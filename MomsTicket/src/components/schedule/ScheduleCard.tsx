// ScheduleCard.tsx
// 달력에서 특정 날짜 클릭하면 보이는 각 스케줄카드

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
  margin-bottom: 10px; /* 제목과 상세 텍스트 사이 간격 */
`;

const DetailsText = styled.Text`
  font-family: 'NanumSquareRoundR';
  font-size: 16px;
  color: #000000;
`;

const ArrowIcon = styled(Feather)`
  color: #888888;
`;

export default function ScheduleCard({ title, details, onPress }) {
  return (
    <CardContainer onPress={onPress}>
      <TextContainer>
        <TitleText>{title}</TitleText>
        <DetailsText>{details}</DetailsText>
      </TextContainer>
      <ArrowIcon name="arrow-right-circle" size={30} />
    </CardContainer>
  );
}
