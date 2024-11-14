// BottomBar.tsx
import React from 'react';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const BottomBarContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 414px;
  height: 80px;
  background: #FFFFFF;
  border-radius: 10px 10px 0 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top-radius: 100px;
`;

const Tab = styled.TouchableOpacity`
  display: flex;
  align-items: center;
`;

const TabText = styled.Text`
  font-family: 'NanumSquareRound';
  font-weight: 700;
  font-size: 16px;
  color: #000000;
`;

export default function BottomBar() {
  const navigation = useNavigation();

  return (
    <BottomBarContainer>
      <Tab>
        <Ionicons name="ticket-outline" size={32} color="#000" />
        <TabText>티켓</TabText>
      </Tab>
      <Tab>
        <Ionicons name="people-outline" size={32} color="#000" />
        <TabText>동행</TabText>
      </Tab>
      <Tab onPress={() => navigation.navigate('HomeScreen')}>
        <AntDesign name="home" size={32} color="#000" />
        <TabText>홈</TabText>
      </Tab>
      <Tab>
        <Ionicons name="chatbubble-outline" size={32} color="#000" />
        <TabText>채팅</TabText>
      </Tab>
      <Tab>
        <Ionicons name="person-circle-outline" size={32} color="#000" />
        <TabText>내정보</TabText>
      </Tab>
    </BottomBarContainer>
  );
}
