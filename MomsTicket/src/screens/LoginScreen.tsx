// LoginScreen.tsx
import React from 'react';
import styled from 'styled-components/native';

const LoginScreen = () => {
  const handleKakaoLogin = () => {
    console.log("Kakao Login 버튼 클릭됨");
  };

  return (
    <Container>
      {/* 아이돌봄 로고 */}
      <Logo source={require('../assets/images/IdolBomLogo.png')} />

      {/* 카카오 로그인 버튼 */}
      <KakaoLoginButton onPress={handleKakaoLogin}>
        <KakaoButtonImage source={require('../assets/images/kakao_login_large_narrow.png')} />
      </KakaoLoginButton>
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
