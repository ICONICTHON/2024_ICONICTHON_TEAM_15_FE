// ChatListScreen.tsx
import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ChatRoomItem from '../../components/chat/ChatRoomItem';
import { useNavigation } from '@react-navigation/native';

const mockData = [
  {
    id: '1',
    title: '아임히어로 같이가요~',
    lastMessage: '안녕하세요!! 잘 부탁 드립니다.',
    schedule: '1/17~19 IM HERO - THE STADIUM 콘서트',
    unreadCount: 0,
  },
  {
    id: '2',
    title: '팬미팅 준비 모임',
    lastMessage: '내일 모임 준비 완료!',
    schedule: '2/14 팬미팅 사전 준비',
    unreadCount: 2,
  },
  {
    id: '3',
    title: '응원봉 나눔',
    lastMessage: '응원봉 수량 확인 중이에요.',
    schedule: '1/17~19 IM HERO - THE STADIUM 콘서트',
    unreadCount: 0,
  },
  {
    id: '4',
    title: '안녕하세요',
    lastMessage: '건행건행',
    schedule: '1/20 콘서트 응원 준비',
    unreadCount: 1,
  },
  {
    id: '5',
    title: 'ㅎㅇ',
    lastMessage: '아하',
    schedule: '1/20 콘서트 응원 준비',
    unreadCount: 3,
  },
  {
    id: '6',
    title: '임영웅 짱',
    lastMessage: '그렇군요',
    schedule: '2/14 팬미팅 사전 준비',
    unreadCount: 0,
  },
];

const ChatListScreen: React.FC = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: typeof mockData[0] }) => (
    <ChatRoomItem
      title={item.title}
      lastMessage={item.lastMessage}
      schedule={item.schedule}
      unreadCount={item.unreadCount}
      onPress={() => navigation.navigate('ChatScreen', { chatId: item.id })}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>채팅</Text>
      <FlatList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: 24,
    fontFamily: 'NanumSquareRoundEB',
    color: '#000000',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
});

export default ChatListScreen;
