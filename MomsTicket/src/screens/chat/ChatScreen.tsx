import React, { useState, useRef } from 'react';
import { TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native'; // useNavigation 추가
import BottomBar from '../../components/common/BottomBar'; // BottomBar 컴포넌트를 불러옵니다.

// 시간 형식을 "오전/오후 시간:분"으로 변환하는 함수
const formatAMPM = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? '오후' : '오전';
  hours = hours % 12;
  hours = hours ? hours : 12; // 0시를 12시로 변경
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const strTime = `${ampm} ${hours}:${minutes}`;
  return strTime;
};

// 스타일드 컴포넌트 정의
const KeyboardAvoidingContainer = styled(KeyboardAvoidingView)`
  flex: 1;
  background-color: #ffffff;
`;

const Header = styled.View`
  height: 70px;
  background-color: #ffffff;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  border-bottom-width: 1px;
  border-bottom-color: #e1e1e1;
`;

const HeaderTitle = styled.Text`
  font-size: 24px;
  font-family: 'NanumSquareRoundB';
  color: #000000;
  margin-left: 10px;
`;

const DateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const DateText = styled.Text`
  font-size: 16px;
  font-family: 'NanumSquareRoundR';
  color: #000000;
  margin-left: 5px;
  margin-top: 10px;
`;

const MessageRow = styled.View<{ isSentByUser: boolean }>`
  flex-direction: row;
  align-items: flex-start;
  margin: 10px 0;
  max-width: 75%;
  align-self: ${(props) => (props.isSentByUser ? 'flex-end' : 'flex-start')};
`;

const AvatarIcon = styled(Icon)`
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 20px;
  overflow: hidden;
  color: #d9d9d9;
`;

const MessageContainer = styled.View`
  flex-direction: column;
`;

const SenderName = styled.Text`
  font-size: 18px;
  font-family: 'NanumSquareRoundB';
  color: #000000;
  margin-bottom: 5px;
  margin-left: 10px;
`;

const MessageBubble = styled.View<{ isSentByUser: boolean }>`
  padding: 10px;
  border-radius: 20px;
  background-color: ${(props) => (props.isSentByUser ? '#3E95FF' : '#E9E9E9')};
  border-bottom-right-radius: ${(props) => (props.isSentByUser ? '0px' : '20px')};
  border-bottom-left-radius: ${(props) => (props.isSentByUser ? '20px' : '0px')};
  margin: 0 10px;
`;

const MessageText = styled.Text<{ isSentByUser: boolean }>`
  font-size: 18px;
  font-family: 'NanumSquareRoundR';
  color: ${(props) => (props.isSentByUser ? '#FFFFFF' : '#000000')};
`;

const MessageTime = styled.Text`
  font-size: 14px;
  font-family: 'NanumSquareRoundR';
  color: #585858;
  margin-top: 5px;
  align-self: flex-start;
  margin-left: 10px;
`;

// 채팅 입력창 및 버튼 스타일 정의
const StyledInputContainer = styled.View`
  position: absolute;
  width: 380px;
  height: 44px;
  left: 20px;
  bottom: 100px;
  background: #FFFFFF;
  border: 1px solid #C5C5C5;
  border-radius: 50px;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 10px;
`;

const StyledTextInput = styled(TextInput)`
  flex: 1;
  padding-horizontal: 10px;
  font-size: 16px;
`;

const SendButton = styled(TouchableOpacity)`
  width: 30px;
  height: 30px;
  background-color: #3E95FF;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const ChatScreen = () => {
  const navigation = useNavigation(); // 뒤로 가기 기능을 위한 useNavigation 훅 사용

  const [messages, setMessages] = useState([
    {
      id: '1',
      sender: '닉네임1',
      message: '안녕하세요!! 잘 부탁 드립니다. 아임히어로 같이 가요 ><',
      time: '오전 12:39',
      isSentByUser: false,
    },
    {
      id: '2',
      sender: '닉네임2',
      message: '응원봉 준비 완료했어요!',
      time: '오후 1:39',
      isSentByUser: true,
    },
  ]);
  const [inputText, setInputText] = useState('');
  const scrollViewRef = useRef(null);

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: `${messages.length + 1}`,
        sender: '닉네임2',
        message: inputText,
        time: formatAMPM(new Date()), // 오전/오후 시간:분 형식 적용
        isSentByUser: true,
      };
      setMessages([...messages, newMessage]);
      setInputText('');
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }
  };

  return (
    <KeyboardAvoidingContainer behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={90}>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}> {/* 뒤로 가기 기능 */}
          <Icon name="arrow-left" size={30} color="#000" />
        </TouchableOpacity>
        <HeaderTitle>아임히어로 같이가요~</HeaderTitle>
      </Header>

      <DateContainer>
        <Icon name="calendar" size={20} color="#B3B3B3" />
        <DateText>2024년 10월 12일</DateText>
      </DateContainer>

      <ScrollView ref={scrollViewRef} style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 100 }}>
        {messages.map((msg) => (
          <MessageRow key={msg.id} isSentByUser={msg.isSentByUser}>
            {!msg.isSentByUser && <AvatarIcon name="account-circle" size={40} />}
            <MessageContainer>
              {!msg.isSentByUser && <SenderName>{msg.sender}</SenderName>}
              <MessageBubble isSentByUser={msg.isSentByUser}>
                <MessageText isSentByUser={msg.isSentByUser}>{msg.message}</MessageText>
              </MessageBubble>
              <MessageTime>{msg.time}</MessageTime>
            </MessageContainer>
          </MessageRow>
        ))}
      </ScrollView>

      <StyledInputContainer>
        <StyledTextInput
          value={inputText}
          onChangeText={setInputText}
          placeholder="메시지를 입력하세요"
          placeholderTextColor="#B3B3B3"
          multiline
        />
        <SendButton onPress={handleSend}>
          <Icon name="send" size={20} color="#FFFFFF" />
        </SendButton>
      </StyledInputContainer>

      <BottomBar /> {/* BottomBar를 화면 하단에 배치합니다 */}
    </KeyboardAvoidingContainer>
  );
};

export default ChatScreen;
