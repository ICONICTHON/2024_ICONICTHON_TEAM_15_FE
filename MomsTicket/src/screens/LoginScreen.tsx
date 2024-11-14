import React, { useState } from 'react';
import styled from 'styled-components/native';
import { WebView } from 'react-native-webview';
import { View, ActivityIndicator, Alert } from 'react-native';
import { KAKAO_NATIVE_APP_KEY, REDIRECT_URI } from '@env';

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_NATIVE_APP_KEY}&redirect_uri=${REDIRECT_URI}`;

// kakao auth url 확인용
console.log("Kakao Auth URL:", KAKAO_AUTH_URL);
const LoginScreen = () => {
  const [showWebView, setShowWebView] = useState(false);

  const handleKakaoLogin = () => {
    setShowWebView(true);
    // 로그 기록용
     console.log("Kakao Login 버튼 클릭됨. WebView 표시 시작");
  };

  const handleNavigationStateChange = (navState: any) => {
    const { url } = navState;
    console.log("WebView URL 변경됨:", url);
    if (url.includes('?code=')) {
      const code = url.split('?code=')[1];
      console.log("인가 코드 추출 완료:", code);
      setShowWebView(false);
      sendCodeToBackend(code);
    } else if (url.includes('error')) {
      setShowWebView(false);
      Alert.alert('로그인 오류', '카카오 로그인에 실패했습니다.');
      console.log("Kakao 로그인 실패 URL:", url);
    }
  };

  const sendCodeToBackend = async (code: string) => {
    console.log("백엔드로 전송할 인가 코드:", code);
    try {
      const response = await fetch(`${BaseURL}/login?code=${code}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      //const data = await response.json();
      //console.log(data); // 사용자 정보 확인
    } catch (error) {
      console.error(error);
      Alert.alert('서버 오류', '서버와의 연결에 문제가 발생했습니다.');
    }
  };

  return (
    <Container>
          {showWebView ? (
            <WebView
              source={{ uri: KAKAO_AUTH_URL }}
              onNavigationStateChange={handleNavigationStateChange}
              startInLoadingState
              renderLoading={() => <ActivityIndicator size="large" color="#FEE500" />}
              originWhitelist={['*']}
              javaScriptEnabled={true}
              onError={(error) => console.error("WebView 로드 오류:", error)} // <== WebView 로드 오류 확인
            />
          ) : (
            <>
              <Logo source={require('../assets/images/IdolBomLogo.png')} />
              <KakaoLoginButton onPress={handleKakaoLogin}>
                <KakaoButtonImage source={require('../assets/images/kakao_login_large_narrow.png')} />
              </KakaoLoginButton>
            </>
          )}
        </Container>
  );
};

// 스타일드 컴포넌트
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Logo = styled.Image`
  width: 203px;
  height: 55.089px;
  flex-shrink: 0;
  margin-bottom: 50px;
`;

const KakaoLoginButton = styled.TouchableOpacity`
  width: 313px;
  height: 65px;
  flex-shrink: 0;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const KakaoButtonImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export default LoginScreen;
