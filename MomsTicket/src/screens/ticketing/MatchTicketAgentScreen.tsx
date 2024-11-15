// MatchTicketAgentScreen.tsx
import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import StepIndicator from 'react-native-step-indicator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Octicons from 'react-native-vector-icons/Octicons';

const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #f3f8ff;
`;

const BackgroundRectangle = styled.View`
  position: absolute;
  width: 414px;
  height: 600px;
  left: 0px;
  top: -58px;
  background: #ffffff;
  border-radius: 50px;
`;

const ProfileImage = styled.View`
  position: absolute;
  width: 100px;
  height: 100px;
  left: 47px;
  top: 54px;
  background-color: #d9d9d9;
  border-radius: 50px;
`;

const AgentNickname = styled.Text`
  position: absolute;
  width: 200px;
  height: 23px;
  left: 171px;
  top: 67px;
  font-family: 'NanumSquareRoundB';
  font-size: 20px;
  line-height: 23px;
  color: #000000;
`;

const IterationsButton = styled.TouchableOpacity`
  position: absolute;
  left: 340px;
  top: 30px;
`;

const AgentIntroduction = styled.Text`
  position: absolute;
  width: 200px;
  height: 18px;
  left: 171px;
  top: 94px;
  font-family: 'NanumSquareRoundR';
  font-size: 16px;
  line-height: 18px;
  color: #000000;
`;

const ReliabilityContainer = styled.View`
  position: absolute;
  width: 220px;
  height: 18px;
  left: 171px;
  top: 130px;
  flex-direction: row;
  align-items: center;
`;

const ReliabilityLabel = styled.Text`
  font-family: 'NanumSquareRoundB';
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  margin-right: 8px;
`;

const ReliabilityScore = styled.Text`
  font-family: 'NanumSquareRoundB';
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  margin-right: 10px;
`;

const ReliabilityBarBackground = styled.View`
  width: 100px;
  height: 10px;
  background: #e0e0e0;
  border-radius: 5px;
`;

const ReliabilityBarFill = styled.View`
  width: ${(props) => props.fillWidth || 0}px;
  height: 10px;
  background: #3e95ff;
  border-radius: 5px;
`;

const ScheduleInfoContainer = styled.View`
  position: absolute;
  top: 170px;
  left: 47px;
  flex-direction: row;
  align-items: center;
`;

const DateText = styled.Text`
  font-family: 'NanumSquareRoundB';
  font-size: 18px;
  color: #000000;
  margin-left: 8px;
`;

const ScheduleTitle = styled.Text`
  font-family: 'NanumSquareRoundB';
  font-size: 18px;
  line-height: 30px;
  color: #000000;
  margin-left: 20px;
`;

const RequestContainer = styled.View`
  position: absolute;
  width: 291px;
  height: 150px;
  top: 230px;
  background: #f3f8ff;
  border-radius: 20px;
  padding: 15px;
  align-self: center;
`;

const RequestHeader = styled.Text`
  font-family: 'NanumSquareRoundB';
  font-size: 20px;
  color: #000000;
  text-align: center;
  margin-bottom: 12px;
`;

const InfoRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 9px;
  left: 10px;
`;

const InfoText = styled.Text`
  font-family: 'NanumSquareRoundB';
  font-size: 18px;
  color: #000000;
  margin-left: 8px;
  margin-bottom: 3px;
`;

const labels = ["대리인 매칭", "티켓 예매", "결제금액 전달"];
const customStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#62c1e5',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#62c1e5',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#62c1e5',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#62c1e5',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 16,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#62c1e5',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#62c1e5',
  labelColor: '#666666',
  labelSize: 16,
  currentStepLabelColor: '#62c1e5'
};

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

export default function MatchTicketAgentScreen({ route }) {
  const { schedule } = route.params || {};
  const reliabilityScore = 80;
  const currentPosition = 5;
  const navigation = useNavigation();

  const handleActionButtonPress = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <ScreenContainer>
      <BackgroundRectangle />

      <ProfileImage />
      <AgentNickname>대리인 닉네임</AgentNickname>

      <IterationsButton onPress={() => console.log('Iterations Button Pressed')}>
        <Octicons name="iterations" size={32} color="#3e95ff" />
      </IterationsButton>

      <AgentIntroduction>자기소개입니다. 안녕하세요.</AgentIntroduction>

      <ReliabilityContainer>
        <ReliabilityLabel>신뢰도</ReliabilityLabel>
        <ReliabilityScore>{reliabilityScore}</ReliabilityScore>
        <ReliabilityBarBackground>
          <ReliabilityBarFill fillWidth={(reliabilityScore / 100) * 100} />
        </ReliabilityBarBackground>
      </ReliabilityContainer>

      <ScheduleInfoContainer>
        <MaterialCommunityIcons name="calendar-text" size={24} color="#B3B3B3" />
        <DateText>{schedule?.date || '날짜 정보 없음'}</DateText>
        <ScheduleTitle>{schedule?.title || '제목 정보 없음'}</ScheduleTitle>
      </ScheduleInfoContainer>

      <RequestContainer>
        <RequestHeader>내 신청내역</RequestHeader>
        <InfoRow>
          <FontAwesome6 name="person" size={16} color="#898989" />
          <InfoText>인원: {schedule?.peopleCount || '1'}</InfoText>
        </InfoRow>
        <InfoRow>
          <MaterialCommunityIcons name="sofa-single" size={16} color="#898989" />
          <InfoText>희망구역: {schedule?.preferredArea || '없음'}</InfoText>
        </InfoRow>
        <InfoRow>
          <MaterialCommunityIcons name="email-newsletter" size={16} color="#898989" />
          <InfoText>대리인에게 할 말: {schedule?.message || '없음'}</InfoText>
        </InfoRow>
      </RequestContainer>

      <View style={styles.stepIndicatorContainer}>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={currentPosition}
          labels={labels}
        />
      </View>

      <ActionButton onPress={handleActionButtonPress}>
        <ActionButtonText>대화하러가기</ActionButtonText>
      </ActionButton>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  stepIndicatorContainer: {
    position: 'absolute',
    top: 420,
    width: '100%',
    paddingHorizontal: 30,
  },
});
