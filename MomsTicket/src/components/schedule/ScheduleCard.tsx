import React from 'react';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity, View, Text } from 'react-native';

const CardContainer = styled(TouchableOpacity)`
  width: 374px;
  height: 114px;
  margin: 7px 21px;
  background: #FFFFFF;
  border-radius: 20px;
  position: relative;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
`;

const TextContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-right: auto;
`;

const TitleText = styled.Text`
  font-family: 'NanumSquareRoundB';
  font-size: 20px;
  color: #000000;
  margin-bottom: 10px;
`;

const DetailsText = styled.Text`
  font-family: 'NanumSquareRoundR';
  font-size: 16px;
  color: #000000;
`;

const ArrowIcon = styled(Feather)`
  color: #888888;
`;

const ActionButtonContainer = styled(View)`
  width: 59px;
  height: 64px;
  background: #3E95FF;
  border-radius: 19px;
  align-items: center;
  justify-content: center;
`;

const ActionButtonText = styled(Text)`
  font-family: 'NanumSquareRound';
  font-size: 16px;
  font-weight: 800;
  color: #FFFFFF;
`;

export default function ScheduleCard({ title, details, onPress, isTicketScreen }) {
  return (
    <CardContainer onPress={onPress}>
      <TextContainer>
        <TitleText>{title}</TitleText>
        <DetailsText>{details}</DetailsText>
      </TextContainer>
      {isTicketScreen ? (
        <ActionButtonContainer>
          <ActionButtonText>신청</ActionButtonText>
        </ActionButtonContainer>
      ) : (
        <ArrowIcon name="arrow-right-circle" size={30} />
      )}
    </CardContainer>
  );
}
