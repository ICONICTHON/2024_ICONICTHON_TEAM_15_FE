// CalendarSchedule.tsx
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Picker } from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScheduleCard from './ScheduleCard';

const WhiteRectangle = styled.View`
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 50px;
  padding: 0 24px;
  position: relative;
`;

const CalendarWrapper = styled.View`
  width: 100%;
  padding-top: ${({ calendarExpanded }) => (calendarExpanded ? '40px' : '24px')};
`;

const CollapseButton = styled.TouchableOpacity`
  align-items: center;
  align-self: center;
  position: absolute;
  bottom: -30px;
  z-index: 1;
`;

const CategoryButtonContainer = styled.View`
  position: absolute;
  left: 21px;
  width: 150px;
  background-color: #EAF0F8;
  border-radius: 20px;
  z-index: 1;
`;

const ScheduleCardList = styled(ScrollView)`
  margin-top: 50px;
  max-height: 300px;
  margin-bottom: 70px;
`;

export default function CalendarSchedule({ navigation, onDaySelect, onCollapse, calendarExpanded }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // 임의의 스케줄 데이터
  const schedules = [
    {
      id: 1,
      title: '미팅',
      date: '2024-11-15',
      location: '서울역',
      type: '회의',
      description: '이것은 수정된 미팅 설명입니다. 수정된 설명이 여기에 표시됩니다.',
      link: 'https://example.com/meeting'
    },
    {
      id: 2,
      title: '프로젝트 회의',
      date: '2024-11-16',
      location: '강남구청',
      type: '회의',
      description: '프로젝트 팀원들과 함께 회의합니다.',
      link: 'https://example.com/project'
    },
    // 다른 스케줄 데이터...
  ];

  const handleSchedulePress = (schedule) => {
    if (navigation) {
      navigation.navigate('ScheduleDetail', { schedule });
    } else {
      console.error('Navigation object not found');
    }
  };

  return (
    <>
      <WhiteRectangle>
        <CalendarWrapper calendarExpanded={calendarExpanded}>
          {calendarExpanded && (
            <>
              <CategoryButtonContainer>
                <Picker
                  selectedValue={selectedCategory}
                  onValueChange={(itemValue) => setSelectedCategory(itemValue)}
                  style={{ height: 30, color: '#000' }}
                >
                  <Picker.Item label="카테고리 선택" value="all" />
                  <Picker.Item label="미팅" value="meeting" />
                  <Picker.Item label="프로젝트" value="project" />
                  <Picker.Item label="스터디" value="study" />
                  <Picker.Item label="개발" value="development" />
                </Picker>
              </CategoryButtonContainer>
              <CollapseButton onPress={onCollapse}>
                <Ionicons name="chevron-up-outline" size={20} color="#000" />
              </CollapseButton>
            </>
          )}
          <Calendar
            current={'2024-11-01'}
            markedDates={{
              '2024-11-15': { selected: true, marked: true, selectedColor: '#3E95FF' },
              '2024-11-20': { marked: true, dotColor: '#3E95FF' },
              '2024-11-25': { marked: true, dotColor: '#3E95FF' },
            }}
            onDayPress={(day) => {
              console.log('selected day', day);
              onDaySelect();
            }}
            theme={{
              selectedDayBackgroundColor: '#3E95FF',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#3E95FF',
              arrowColor: '#3E95FF',
              monthTextColor: '#4A5660',
              textDayFontFamily: 'NanumSquareRound',
              textMonthFontFamily: 'NanumSquareRound',
              textDayHeaderFontFamily: 'NanumSquareRound',
            }}
          />
        </CalendarWrapper>
      </WhiteRectangle>
      <ScheduleCardList>
        {schedules.map((schedule) => (
          <ScheduleCard
            key={schedule.id}
            title={schedule.title}
            details={`${schedule.date}, ${schedule.location}`}
            onPress={() => handleSchedulePress(schedule)}
          />
        ))}
      </ScheduleCardList>
    </>
  );
}
