import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import styled from 'styled-components/native';
import ScheduleCard from '../../components/schedule/ScheduleCard';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';

const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #f3f8ff;
`;

const BackgroundRectangle = styled.View`
  position: absolute;
  width: 420px;
  height: ${(props) => (props.short ? '200px' : '420px')};
  left: 0px;
  top: -63px;
  background: #FFFFFF;
  border-radius: 50px;
`;

const ToggleContainer = styled.View`
  margin-top: 40px;
  align-self: center;
  width: 370px;
  height: 40px;
  flex-direction: row;
  border: 1px solid #b3b3b3;
  border-radius: 10px;
  background: #ffffff;
`;

const ToggleButton = styled(TouchableOpacity)<{ selected: boolean }>`
  width: 183px;
  height: 38px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) => (props.selected ? '#3e95ff' : '#ffffff')};
`;

const ToggleText = styled.Text<{ selected: boolean }>`
  font-family: 'NanumSquareRound';
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => (props.selected ? '#ffffff' : '#727272')};
`;

const CalendarContainer = styled.View`
  overflow: hidden;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  margin-top: 10px;
`;

const ScrollableScheduleContainer = styled(ScrollView)`
  padding-top: 20px;
  max-height: 300px;
  padding-bottom: 70px;
`;

export default function TicketScreen() {
  const [activeToggle, setActiveToggle] = useState<'구하기' | '하기'>('구하기');
  const navigation = useNavigation();

  const handleFindTicketPress = () => {
    navigation.navigate('ScheduleDetailScreen');
  };

  const handleProvideTicketPress = () => {
    Alert.alert("매칭 요청", "이 티켓팅 대리를 신청하시겠습니까?");
  };

  return (
    <ScreenContainer>
      <BackgroundRectangle short={activeToggle === '하기'} />

      <ToggleContainer>
        <ToggleButton selected={activeToggle === '구하기'} onPress={() => setActiveToggle('구하기')}>
          <ToggleText selected={activeToggle === '구하기'}>티켓팅 대리 구하기</ToggleText>
        </ToggleButton>
        <ToggleButton selected={activeToggle === '하기'} onPress={() => setActiveToggle('하기')}>
          <ToggleText selected={activeToggle === '하기'}>티켓팅 대리하기</ToggleText>
        </ToggleButton>
      </ToggleContainer>

      {activeToggle === '구하기' ? (
        <View>
          <CalendarContainer>
            <Calendar
              onDayPress={(day) => {
                console.log('selected day', day);
              }}
              theme={{
                todayTextColor: '#3e95ff',
                arrowColor: '#3e95ff',
              }}
              markedDates={{
                '2023-12-01': { marked: true, dotColor: '#3e95ff' },
                '2023-12-15': { marked: true, dotColor: '#3e95ff' },
              }}
            />
          </CalendarContainer>
          <ScrollableScheduleContainer>
            <ScheduleCard
              title="콘서트 A"
              details="2023-12-01, 서울 공연장"
              onPress={handleFindTicketPress}
              isTicketScreen={true}
            />
            <ScheduleCard
              title="콘서트 B"
              details="2023-12-15, 부산 공연장"
              onPress={handleFindTicketPress}
              isTicketScreen={true}
            />
            <ScheduleCard
              title="콘서트 B"
              details="2023-12-15, 부산 공연장"
              onPress={handleFindTicketPress}
              isTicketScreen={true}
            />
          </ScrollableScheduleContainer>
        </View>
      ) : (
        <ScrollView contentContainerStyle={{ paddingTop: 60, paddingBottom: 100 }}>
          <ScheduleCard
            title="대리 구함 - 콘서트 C"
            details="2023-11-20, 대구 공연장"
            onPress={handleProvideTicketPress}
            isTicketScreen={true}
          />
          <ScheduleCard
            title="대리 구함 - 콘서트 D"
            details="2023-12-05, 제주 공연장"
            onPress={handleProvideTicketPress}
            isTicketScreen={true}
          />
           <ScheduleCard
             title="대리 구함 - 콘서트 D"
             details="2023-12-05, 제주 공연장"
             onPress={handleProvideTicketPress}
             isTicketScreen={true}
           />
          <ScheduleCard
            title="대리 구함 - 콘서트 D"
            details="2023-12-05, 제주 공연장"
            onPress={handleProvideTicketPress}
            isTicketScreen={true}
          />
          <ScheduleCard
            title="대리 구함 - 콘서트 D"
            details="2023-12-05, 제주 공연장"
            onPress={handleProvideTicketPress}
            isTicketScreen={true}
          />
        </ScrollView>
      )}
    </ScreenContainer>
  );
}
