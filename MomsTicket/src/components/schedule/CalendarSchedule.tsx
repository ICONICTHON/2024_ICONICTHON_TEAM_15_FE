import React, { useState } from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScheduleCard from './ScheduleCard';

// Locale 설정
LocaleConfig.locales['kr'] = {
  monthNames: [
    '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'
  ],
  monthNamesShort: [
    '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'
  ],
  dayNames: [
    '일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'
  ],
  dayNamesShort: [
    '일', '월', '화', '수', '목', '금', '토'
  ],
  today: '오늘'
};
LocaleConfig.defaultLocale = 'kr';

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

const CategoryDropdownContainer = styled.View`
  position: absolute;
  left: 7px;
  width: 130px;
  background-color: #EAF0F8;
  border-radius: 20px;
  padding: 0 6px;
  z-index: 2;
`;

const DropdownButton = styled.TouchableOpacity`
  background-color: #EAF0F8;
  border-radius: 20px;
  padding: 6px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const DropdownText = styled.Text`
  font-size: 14px;
  color: #000;
  font-family: 'NanumSquareRound';
`;

const DropdownList = styled.ScrollView`
  max-height: 100px;
  margin-top: 5px;
`;

const DropdownItem = styled.TouchableOpacity`
  padding: 6px 10px;
`;

const DropdownItemText = styled.Text`
  font-family: 'NanumSquareRound';
  font-size: 14px;
  color: #000;
`;

const ScheduleCardList = styled.ScrollView`
  margin-top: 50px;
  max-height: 300px;
  margin-bottom: 70px;
`;

export default function CalendarSchedule({ navigation, onDaySelect, onCollapse, calendarExpanded }) {
  const [selectedCategory, setSelectedCategory] = useState("카테고리 선택");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const schedules = [
    { id: 1, title: '미팅', date: '2024-11-15', location: '서울역', type: '회의', description: '안녕하세요?' },
    { id: 2, title: '프로젝트 회의', date: '2024-11-16', location: '강남구청', type: '회의', description: '안녕하세요?' },
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setDropdownVisible(false);
  };

  const handleSchedulePress = (schedule) => {
    navigation && navigation.navigate('ScheduleDetail', { schedule });
  };

  return (
    <>
      <WhiteRectangle>
        <CalendarWrapper calendarExpanded={calendarExpanded}>
          {calendarExpanded && (
            <>
              <CategoryDropdownContainer>
                <DropdownButton onPress={() => setDropdownVisible(!dropdownVisible)}>
                  <DropdownText>{selectedCategory}</DropdownText>
                  <Ionicons name="chevron-down-outline" size={16} color="#000" />
                </DropdownButton>
                {dropdownVisible && (
                  <DropdownList>
                    <DropdownItem onPress={() => handleCategorySelect('미팅')}>
                      <DropdownItemText>미팅</DropdownItemText>
                    </DropdownItem>
                    <DropdownItem onPress={() => handleCategorySelect('프로젝트')}>
                      <DropdownItemText>프로젝트</DropdownItemText>
                    </DropdownItem>
                    <DropdownItem onPress={() => handleCategorySelect('스터디')}>
                      <DropdownItemText>스터디</DropdownItemText>
                    </DropdownItem>
                    <DropdownItem onPress={() => handleCategorySelect('개발')}>
                      <DropdownItemText>개발</DropdownItemText>
                    </DropdownItem>
                  </DropdownList>
                )}
              </CategoryDropdownContainer>
              <CollapseButton onPress={onCollapse}>
                <Ionicons name="chevron-up-outline" size={20} color="#000" />
              </CollapseButton>
            </>
          )}
          <Calendar
            current={'2024-11-15'}
            monthFormat={'yyyy년 MM월'}
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
