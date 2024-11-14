// TopBar.tsx
// 아이돌 이름이랑 알람(bell 아이콘) 있는 거

import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';

const TopBarContainer = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 30px 0 30px;
  background: #FFFFFF;
`;

const IdolNameContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: #FFFFFF;
  border: 1px solid #D4D9E0;
  border-radius: 50px;
  padding: 6px 20px;
`;

const IdolName = styled.Text`
  font-family: 'NanumSquareRoundEB';
  font-size: 18px;
  color: #000000;
`;

const NotificationContainer = styled.View`
  position: relative;
  width: 32px;
  height: 32px;
  background-color: #FFFFFF;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

const NotificationBadge = styled.View`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 8px;
  height: 8px;
  background: #3E95FF;
  border-radius: 50%;
`;

const DropdownContainer = styled.View`
  position: absolute;
  top: 60px;
  left: 30px;
  background: #FFFFFF;
  border: 1px solid #D4D9E0;
  border-radius: 10px;
  padding: 10px;
  width: 120px;
  z-index: 1;
`;

const DropdownItem = styled.TouchableOpacity`
  padding: 10px;
`;

const DropdownText = styled.Text`
  font-family: 'NanumSquareRoundB';
  font-size: 16px;
  color: #000000;
`;

export default function TopBar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleItemPress = (item) => {
    console.log(`${item} 선택됨`);
    setDropdownVisible(false);
  };

  return (
    <TopBarContainer>
      <View>
        <IdolNameContainer onPress={toggleDropdown}>
          <IdolName>임영웅</IdolName>
          <FontAwesome6
            name="caret-down"
            size={18}
            color="#000"
            style={{
              marginLeft: 8,
              marginTop: 2, // 아이콘을 살짝 아래로 내림
              transform: [{ rotate: dropdownVisible ? '180deg' : '0deg' }],
            }}
          />
        </IdolNameContainer>

        {dropdownVisible && (
          <DropdownContainer>
            <DropdownItem onPress={() => handleItemPress('Option 1')}>
              <DropdownText>이찬원</DropdownText>
            </DropdownItem>
            <DropdownItem onPress={() => handleItemPress('Option 2')}>
              <DropdownText>장민호</DropdownText>
            </DropdownItem>
            <DropdownItem onPress={() => handleItemPress('Option 3')}>
              <DropdownText>영탁</DropdownText>
            </DropdownItem>
          </DropdownContainer>
        )}
      </View>

      <NotificationContainer>
        <Fontisto name="bell" size={28} color="#000" />
        <NotificationBadge />
      </NotificationContainer>
    </TopBarContainer>
  );
}
