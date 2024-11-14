// ThreeDaysSchedule.tsx
// 홈화면에서 어제/오늘/내일 스케줄

import React, { useState } from 'react';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// 임시 데이터
const schedules = {
  yesterday: [
    { time: "오후 2:00", title: "스케줄 제목", details: "스케줄 날짜, 장소" },
    { time: "오후 2:00", title: "스케줄 제목", details: "스케줄 날짜, 장소" },
    { time: "오후 2:00", title: "스케줄 제목", details: "스케줄 날짜, 장소" },
  ],
  today: [
    { time: "오후 2:00", title: "스케줄 제목", details: "스케줄 날짜, 장소" },
    { time: "오후 2:00", title: "스케줄 제목", details: "스케줄 날짜, 장소" },
    { time: "오후 2:00", title: "스케줄 제목", details: "스케줄 날짜, 장소" },
    { time: "오후 2:00", title: "스케줄 제목", details: "스케줄 날짜, 장소" },
  ],
  tomorrow: [
    { time: "오후 2:00", title: "스케줄 제목", details: "스케줄 날짜, 장소" },
    { time: "오후 2:00", title: "스케줄 제목", details: "스케줄 날짜, 장소" },
  ],
};

const ScheduleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 352px;
  height: 48px;
  background-color: #EAF0F8;
  border-radius: 50px;
  padding: 0 20px;
  margin-top: 10px;
`;

const ScheduleText = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;

const ScheduleTextContent = styled.Text`
  font-family: ${({ selected }) => (selected ? 'NanumSquareRoundEB' : 'NanumSquareRoundB')};
  font-size: 16px;
  color: ${({ selected }) => (selected ? '#000000' : '#898989')};
  background-color: ${({ selected }) => (selected ? '#FFFFFF' : 'transparent')};
  padding: 7px 15px;
  border-radius: 50px;
`;

const ScheduleList = styled.View`
  margin-top: 20px;
  width: 100%;
`;

const ScheduleCardContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #F3F8FF;
  border-radius: 20px;
  padding: 16px;
  margin-bottom: 10px;
  margin-left: 31px;
  margin-right: 31px;
`;

const TimeText = styled.Text`
  font-family: 'NanumSquareRoundB';
  font-size: 16px;
  color: #000000;
  margin-right: 10px;
`;

const ScheduleInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

const TitleText = styled.Text`
  font-family: 'NanumSquareRoundEB';
  font-size: 18px;
  color: #000000;
  margin-bottom: 4px;
`;

const DetailsText = styled.Text`
  font-family: 'NanumSquareRoundR';
  font-size: 16px;
  color: #000000;
`;

const ArrowIcon = styled(MaterialIcons)`
  color: #BDBDBD;
`;

const ShowMoreButton = styled.TouchableOpacity`
  align-items: center;
  margin-top: 5px;
`;

export default function ThreeDaysSchedule({ showAllSchedules, toggleShowAllSchedules }) {
  const [selectedDay, setSelectedDay] = useState('today');
  const displayedSchedules = showAllSchedules
    ? schedules[selectedDay]
    : schedules[selectedDay].slice(0, 2);

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  return (
    <>
      <ScheduleContainer>
        <ScheduleText onPress={() => handleDayChange('yesterday')}>
          <ScheduleTextContent selected={selectedDay === 'yesterday'}>어제</ScheduleTextContent>
        </ScheduleText>
        <ScheduleText onPress={() => handleDayChange('today')}>
          <ScheduleTextContent selected={selectedDay === 'today'}>오늘</ScheduleTextContent>
        </ScheduleText>
        <ScheduleText onPress={() => handleDayChange('tomorrow')}>
          <ScheduleTextContent selected={selectedDay === 'tomorrow'}>내일</ScheduleTextContent>
        </ScheduleText>
      </ScheduleContainer>

      <ScheduleList>
        {displayedSchedules.map((schedule, index) => (
          <ScheduleCard
            key={index}
            time={schedule.time}
            title={schedule.title}
            details={schedule.details}
          />
        ))}
      </ScheduleList>

      <ShowMoreButton onPress={toggleShowAllSchedules}>
        <Ionicons
          name={showAllSchedules ? "chevron-up-outline" : "chevron-down-outline"}
          size={20}
          color="#000"
        />
      </ShowMoreButton>
    </>
  );
}

// ScheduleCard 컴포넌트
function ScheduleCard({ time, title, details }) {
  return (
    <ScheduleCardContainer>
      <TimeText>{time}</TimeText>
      <ScheduleInfo>
        <TitleText>{title}</TitleText>
        <DetailsText>{details}</DetailsText>
      </ScheduleInfo>
      <ArrowIcon name="keyboard-arrow-right" size={24} /> {/* 아이콘 추가 */}
    </ScheduleCardContainer>
  );
}
