    // TopBar.tsx
    import React from 'react';
    import styled from 'styled-components/native';
    import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
    import Fontisto from 'react-native-vector-icons/Fontisto';

    const TopBarContainer = styled.View`
      position: relative;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 10px 16px;
      background: #FFFFFF;
    `;

    const UserInfoContainer = styled.View`
      flex-direction: row;
      align-items: center;
      background: #FFFFFF;
      border: 1px solid #D4D9E0;
      border-radius: 50px;
      padding: 6px 10px;
    `;

    const UserName = styled.Text`
      font-family: 'NanumSquareRound';
      font-weight: 800;
      font-size: 16px;
      color: #000000;
      margin-right: 4px;
    `;

    const ArrowPlaceholder = styled.View`
      width: 8px;
      height: 8px;
      background: #000000;
      border-radius: 1px;
      transform: rotate(90deg);
    `;

    const NotificationContainer = styled.View`
      position: relative;
      width: 24px;
      height: 24px;
      background-color: #FFFFFF;
      border-radius: 12px;
      justify-content: center;
      align-items: center;
    `;

    const NotificationBadge = styled.View`
      position: absolute;
      top: 0;
      right: 0;
      width: 8px;
      height: 8px;
      background: #3E95FF;
      border-radius: 50%;
    `;

    export default function TopBar() {
      return (
        <TopBarContainer>
          {/* User Info */}
          <UserInfoContainer>
            <UserName>임영웅</UserName>
            <FontAwesome6 name="caret-down" size={20} color="#000" />
          </UserInfoContainer>

          {/* Notification Icon Placeholder */}
          <NotificationContainer>
           <Fontisto name="bell" size={22} color="#000" /> {/* 알림 아이콘 */}
            <NotificationBadge />
          </NotificationContainer>
        </TopBarContainer>
      );
    }
