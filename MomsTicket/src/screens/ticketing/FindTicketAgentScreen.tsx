// FindTicketAgentScreen.tsx
import React, { useState } from 'react';
import { SafeAreaView, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';

const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #f3f8ff;
`;

const BackgroundRectangle = styled.View`
  position: absolute;
  width: 414px;
  height: 600px;
  left: 2px;
  top: -37px;
  background: #ffffff;
  border-radius: 50px;
`;

const LabelContainer = styled.View`
  position: absolute;
  top: 250px;
  left: 40px;
`;

const LabelWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.Text`
  font-family: 'NanumSquareRoundB';
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  margin-left: 8px;
`;

const IconLabelContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const IconWrapper = styled.View`
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const InfoLabel = styled.Text`
  font-family: 'NanumSquareRoundB';
  font-size: 16px;
  color: #000000;
`;

const InfoInput = styled(TextInput)`
  width: 53px;
  height: 24px;
  margin-left: 10px;
  background: #ffffff;
  border: 1px solid #a6a6a6;
  border-radius: 10px;
  text-align: center;
  font-family: 'NanumSquareRoundB';
  font-size: 14px;
  color: #676767;
`;

const ScheduleType = styled.Text`
  position: absolute;
  width: 68px;
  height: 16px;
  left: 48px;
  top: 59px;
  font-family: 'NanumSquareRoundR';
  font-size: 14px;
  color: #1fa7db;
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

const ActionButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 100px;
  width: 323px;
  height: 65px;
  background-color: #3e95ff;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

const ActionButtonText = styled.Text`
  font-family: 'NanumSquareRoundEB';
  color: #ffffff;
  font-size: 18px;
`;

export default function FindTicketAgentScreen({ route }) {
  const { schedule } = route.params; // 이전 화면에서 전달된 스케줄 데이터
  const navigation = useNavigation();

  // 인원, 희망구역, 대리인에게 할 말 입력값을 상태로 관리
  const [peopleCount, setPeopleCount] = useState('');
  const [preferredArea, setPreferredArea] = useState('');
  const [message, setMessage] = useState('');

  const handleActionButtonPress = () => {
    // 입력 데이터를 schedule 객체에 추가하여 전달
    navigation.navigate('MatchTicketAgent', {
      schedule: {
        ...schedule,
        peopleCount,
        preferredArea,
        message,
      },
    });
  };

  return (
    <ScreenContainer>
      <BackgroundRectangle />

      <ScheduleType>{schedule.type}</ScheduleType>
      <TitleContainer>
        <ScheduleTitle>{schedule.title}</ScheduleTitle>
      </TitleContainer>
      <Line />
      <DateContainer>
        <MaterialCommunityIcons name="calendar-text" size={24} color="#B3B3B3" />
        <DateText>{schedule.date}</DateText>
      </DateContainer>
      <LocationContainer>
        <MaterialIcons name="place" size={24} color="#FF6868" />
        <LocationText>{schedule.location}</LocationText>
      </LocationContainer>

      <LabelContainer>
        <LabelWrapper>
          <Feather name="check-circle" size={24} color="#000000" />
          <Label>입력해주세요 (선택사항)</Label>
        </LabelWrapper>
        <IconLabelContainer>
          <IconWrapper>
            <FontAwesome6 name="person" size={24} color="#898989" />
          </IconWrapper>
          <InfoLabel>인원</InfoLabel>
          <InfoInput
            placeholder="1"
            keyboardType="numeric"
            value={peopleCount}
            onChangeText={setPeopleCount}
          />
        </IconLabelContainer>
        <IconLabelContainer>
          <IconWrapper>
            <MaterialCommunityIcons name="sofa-single" size={24} color="#898989" />
          </IconWrapper>
          <InfoLabel>희망구역</InfoLabel>
          <InfoInput
            placeholder="없음"
            value={preferredArea}
            onChangeText={setPreferredArea}
          />
        </IconLabelContainer>
        <IconLabelContainer>
          <IconWrapper>
            <MaterialCommunityIcons name="email-newsletter" size={24} color="#898989" />
          </IconWrapper>
          <InfoLabel>대리인에게 할 말</InfoLabel>
          <InfoInput
            placeholder="없음"
            value={message}
            onChangeText={setMessage}
          />
        </IconLabelContainer>
      </LabelContainer>

      <ActionButton onPress={handleActionButtonPress}>
        <ActionButtonText>매칭하기</ActionButtonText>
      </ActionButton>
    </ScreenContainer>
  );
}
