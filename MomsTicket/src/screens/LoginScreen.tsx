// LoginScreen.tsx
import React from 'react';
import { View, TouchableOpacity, Image, Linking, Alert } from 'react-native';
import styled from 'styled-components/native';
import { KAKAO_REST_API_KEY, REDIRECT_URI } from '@env';

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const LoginScreen: React.FC = () => {
  const handleKakaoLogin = async () => {
    try {
      // 브라우저에서 카카오 로그인 페이지 열기
      await Linking.openURL(KAKAO_AUTH_URL);
    } catch (error) {
      Alert.alert('Error', '로그인 페이지를 열 수 없습니다.');
      console.error("카카오 로그인 오류:", error);
    }
  };

  return (
    <Container>
      <Logo source={require('../assets/images/IdolBomLogo.png')} />
      <KakaoLoginButton onPress={handleKakaoLogin}>
        <KakaoButtonImage source={require('../assets/images/kakao_login_large_narrow.png')} />
      </KakaoLoginButton>
    </Container>
  );
};

// 스타일 컴포넌트
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Logo = styled.Image`
  width: 203px;
  height: 55.089px;
  margin-bottom: 50px;
`;

const KakaoLoginButton = styled.TouchableOpacity`
  width: 313px;
  height: 65px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const KakaoButtonImage = styled.Image`
  width: 100%;
  height: 100%;
  radius: 20px;

`;

export default LoginScreen;
