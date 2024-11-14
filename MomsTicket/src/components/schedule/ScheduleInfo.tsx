// ScheduleInfo.tsx
// 스케줄 상세 정보

import React from 'react';
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BackgroundRectangle = styled.View`
  position: absolute;
  width: 414px;
  height: 420px;
  left: 2px;
  top: -37px;
  background: #FFFFFF;
  border-radius: 50px;
`;

const ScheduleType = styled.Text`
  position: absolute;
  width: 68px;
      height: 16px;
  left: 48px;
  top: 59px;
  font-family: 'NanumSquareRoundR';
  font-size: 14px;
  line-height: 16px;
  color: #1FA7DB;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 85px;
  padding: 0 48px;
  justify-content: space-between;
  width: 100%;
`;

const ScheduleTitle = styled.Text`
  font-family: 'NanumSquareRoundB';
  font-size: 20px;
  line-height: 23px;
  color: #000000;
`;

const Line = styled.View`
  position: absolute;
  width: 354.01px;
  height: 0px;
  left: 25px;
  top: 120px;
  border: 0.4px solid #000000;
`;

const DateContainer = styled.View`
  position: absolute;
  width: 140px;
  height: 24.31px;
  left: 48px;
  top: 142px;
  flex-direction: row;
  align-items: center;
`;

const DateText = styled.Text`
  font-family: 'NanumSquareRoundB';
  font-size: 16px;
  color: #000000;
  margin-left: 10px;
`;

const LocationContainer = styled.View`
  position: absolute;
  width: 100px;
  height: 23px;
  left: 48px;
  top: 175px;
  flex-direction: row;
  align-items: center;
`;

const LocationText = styled.Text`
  font-family: 'NanumSquareRoundB';
  font-size: 16px;
  color: #000000;
  margin-left: 10px;
`;

const ButtonContainer = styled.View`
  position: absolute;
  left: 47px;
  top: 233px;
`;

const Button = styled.TouchableOpacity`
  width: 323px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #1FA7DB;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

const ButtonText = styled.Text`
  font-family: 'NanumSquareRoundB';
  font-size: 16px;
  color: #1FA7DB;
`;

const LinkButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 100px;
  width: 323px;
  height: 65px;
  background-color: #3E95FF;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

const LinkButtonText = styled.Text`
  font-family: 'NanumSquareRoundEB';
  color: #FFFFFF;
  font-size: 18px;
`;

const DescriptionText = styled.Text`
  margin-top: 390px;
  padding: 30px;
  font-family: 'NanumSquareRoundR';
  font-size: 16px;
  line-height: 24px;
  color: #333333;
`;

export default function ScheduleInfo({ title, date, location, type, description, link }) {
  const navigation = useNavigation();

  const handleLinkPress = () => {
    if (link) {
      Linking.openURL(link).catch(err => console.error("Couldn't load page", err));
    }
  };

  return (
    <>
      <BackgroundRectangle />
      <ScheduleType>{type}</ScheduleType>

      <TitleContainer>
        <ScheduleTitle>{title}</ScheduleTitle>
        <MaterialCommunityIcons name="bell-plus-outline" size={28} color="#000" />
      </TitleContainer>

      <Line />
      <DateContainer>
        <MaterialCommunityIcons name="calendar-text" size={24} color="#B3B3B3" />
        <DateText>{date}</DateText>
      </DateContainer>
      <LocationContainer>
        <MaterialIcons name="place" size={24} color="#FF6868" />
        <LocationText>{location}</LocationText>
      </LocationContainer>
      <ButtonContainer>
        <Button onPress={() => navigation.navigate('FindTicketAgent', { schedule: { title, date, location, type, description, link } })}>
          <ButtonText>티켓팅 대리 구하기</ButtonText>
        </Button>
        <Button>
          <ButtonText>동행</ButtonText>
        </Button>
      </ButtonContainer>
      <DescriptionText>{description}</DescriptionText>
      <LinkButton onPress={handleLinkPress}>
        <LinkButtonText>링크 바로가기</LinkButtonText>
      </LinkButton>
    </>
  );
}
