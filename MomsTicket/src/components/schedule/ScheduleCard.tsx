// ScheduleCard.tsx
import React from 'react';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native';

const CardContainer = styled(TouchableOpacity)`
  width: 374px;
  height: 114px;
  margin: 7px 21px;
  background: #FFFFFF;
  border-radius: 20px;
  position: relative;
`;

const TitleText = styled.Text`
  position: absolute;
  left: 20px;
  top: 20px;
  font-family: 'NanumSquareRound';
  font-weight: 700;
  font-size: 20px;
  color: #000000;
`;

const DetailsText = styled.Text`
  position: absolute;
  left: 20px;
  top: 50px;
  font-family: 'NanumSquareRound';
  font-weight: 400;
  font-size: 16px;
  color: #000000;
`;

const ArrowIcon = styled(Feather)`
  position: absolute;
  right: 20px;
  top: 40px;
  color: #888888;
`;

export default function ScheduleCard({ title, details, onPress }) {
  return (
    <CardContainer onPress={onPress}>
      <TitleText>{title}</TitleText>
      <DetailsText>{details}</DetailsText>
      <ArrowIcon name="arrow-right-circle" size={30} />
    </CardContainer>
  );
}
