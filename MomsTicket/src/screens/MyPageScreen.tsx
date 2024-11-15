// MyPageScreen.tsx
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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

const Nickname = styled.Text`
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

const Introduction = styled.Text`
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

const ReliabilityBarFill = styled.View<{ fillWidth: number }>`
  width: ${(props) => props.fillWidth || 0}px;
  height: 10px;
  background: #3e95ff;
  border-radius: 5px;
`;

const FrameContainer = styled.View`
  position: absolute;
  width: 107px;
  height: 35px;
  left: 28px;
  top: 200px;
  flex-direction: row;
  align-items: center;
  gap: 7px;
`;

const PeopleIcon = styled(MaterialCommunityIcons).attrs({
  name: 'account-group-outline',
  size: 28,
  color: '#000000',
})``;

const RecordText = styled.Text`
  font-family: 'Noto Sans KR';
  font-size: 24px;
  font-weight: 700;
  color: #000000;
`;

const RecruitmentCard = styled.View`
  position: absolute;
  width: 358px;
  height: 145px;
  left: 28px;
  top: 245px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  padding: 15px;
`;

const RecruitmentTitle = styled.Text`
  font-family: 'Inter';
  font-size: 17px;
  font-weight: 600;
  color: #000000;
`;

const RecruitmentDateRange = styled.Text`
  font-family: 'Inter';
  font-size: 12px;
  color: #5b5b5b;
  margin-top: 10px;
`;

const MeetingDateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

const CalendarIcon = styled(MaterialCommunityIcons).attrs({
  name: 'calendar-range',
  size: 24,
  color: '#b2b2b2',
})``;

const MeetingDateText = styled.Text`
  font-family: 'Inter';
  font-size: 14px;
  color: #000000;
  margin-left: 8px;
`;

const StatusContainer = styled.View`
  position: absolute;
  width: 109px;
  height: 28px;
  left: 257px;
  top: 323px;
  background: rgba(255, 255, 255, 0.99);
  border: 1px solid #c1c0c0;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const StatusText = styled.Text`
  font-family: 'Noto Sans KR';
  font-size: 14px;
  color: rgba(255, 71, 62, 0.99);
`;

const AttendanceContainer = styled.View`
  position: absolute;
  width: 24px;
  height: 40px;
  left: 342px;
  top: 260px;
  align-items: center;
`;

const AttendanceIcon = styled(MaterialCommunityIcons).attrs({
  name: 'account-multiple',
  size: 24,
  color: '#898989',
})``;

const AttendanceCount = styled.Text`
  font-family: 'Inter';
  font-size: 14px;
  color: #5b5b5b;
  margin-top: 5px;
`;

export default function MyPageScreen() {
  const reliabilityScore = 80;

  return (
    <ScreenContainer>
      <BackgroundRectangle />

      <ProfileImage />
      <Nickname>내 닉네임</Nickname>
      <Introduction>내 한줄 소개를 여기에 표시</Introduction>

      <ReliabilityContainer>
        <ReliabilityLabel>신뢰도</ReliabilityLabel>
        <ReliabilityScore>{reliabilityScore}</ReliabilityScore>
        <ReliabilityBarBackground>
          <ReliabilityBarFill fillWidth={(reliabilityScore / 100) * 100} />
        </ReliabilityBarBackground>
      </ReliabilityContainer>

      <FrameContainer>
        <PeopleIcon />
        <RecordText>내 기록</RecordText>
      </FrameContainer>

      <RecruitmentCard>
        <RecruitmentTitle>임영웅 겨울콘서트</RecruitmentTitle>
        <RecruitmentDateRange>2024.11.1O ~ 2024.11.12</RecruitmentDateRange>
        <MeetingDateContainer>
          <CalendarIcon />
          <MeetingDateText>2024.12.12 목요일</MeetingDateText>
        </MeetingDateContainer>
      </RecruitmentCard>

      <StatusContainer>
        <StatusText>매칭중</StatusText>
      </StatusContainer>

      <AttendanceContainer>
        <AttendanceIcon />
        <AttendanceCount>3/6</AttendanceCount>
      </AttendanceContainer>
    </ScreenContainer>
  );
}
