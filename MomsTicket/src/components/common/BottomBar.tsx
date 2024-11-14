// BottomBar.tsx
// 하단 네비게이션 바

import React, { useState } from 'react';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation, CommonActions } from '@react-navigation/native';

const BottomBarContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: #FFFFFF;
  border-radius: 10px 10px 0 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Tab = styled.TouchableOpacity`
  display: flex;
  align-items: center;
`;

const TabText = styled.Text`
  font-family: 'NanumSquareRoundEB';
  font-size: 18px;
  color: ${({ isSelected }) => (isSelected ? '#3E95FF' : '#000000')};
`;

export default function BottomBar() {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState("Home");

  const handlePress = (screenName) => {
    setSelectedTab(screenName);
    navigation.dispatch(
      CommonActions.navigate({
        name: screenName,
      })
    );
  };

  return (
    <BottomBarContainer>
      <Tab onPress={() => handlePress("Tickets")}>
        <Ionicons name="ticket-outline" size={32} color={selectedTab === "Tickets" ? "#3E95FF" : "#000"} />
        <TabText isSelected={selectedTab === "Tickets"}>티켓</TabText>
      </Tab>
      <Tab onPress={() => handlePress("Companion")}>
        <Ionicons name="people-outline" size={32} color={selectedTab === "Companion" ? "#3E95FF" : "#000"} />
        <TabText isSelected={selectedTab === "Companion"}>동행</TabText>
      </Tab>
      <Tab onPress={() => handlePress("Home")}>
        <AntDesign name="home" size={32} color={selectedTab === "Home" ? "#3E95FF" : "#000"} />
        <TabText isSelected={selectedTab === "Home"}>홈</TabText>
      </Tab>
      <Tab onPress={() => handlePress("Chat")}>
        <Ionicons name="chatbubble-outline" size={32} color={selectedTab === "Chat" ? "#3E95FF" : "#000"} />
        <TabText isSelected={selectedTab === "Chat"}>채팅</TabText>
      </Tab>
      <Tab onPress={() => handlePress("Profile")}>
        <Ionicons name="person-circle-outline" size={32} color={selectedTab === "Profile" ? "#3E95FF" : "#000"} />
        <TabText isSelected={selectedTab === "Profile"}>내정보</TabText>
      </Tab>
    </BottomBarContainer>
  );
}