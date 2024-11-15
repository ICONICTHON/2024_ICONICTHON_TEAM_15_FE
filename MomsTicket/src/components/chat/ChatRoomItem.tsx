// ChatRoomItem.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface ChatRoomItemProps {
  title: string;
  lastMessage: string;
  schedule: string;
  unreadCount: number;
  onPress: () => void;
}

const ChatRoomItem: React.FC<ChatRoomItemProps> = ({
  title,
  lastMessage,
  schedule,
  unreadCount,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        {/* Placeholder for image */}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.schedule}>{schedule}</Text>
        <Text style={styles.lastMessage} numberOfLines={2}>
          {lastMessage}
        </Text>
      </View>
      <View style={styles.badgeContainer}>
        {unreadCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{unreadCount}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1',
    alignItems: 'center',
  },
  imageContainer: {
    width: 63,
    height: 62,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'NanumSquareRoundEB',
    fontSize: 20,
    color: '#000000',
  },
  schedule: {
    fontFamily: 'NanumSquareRound',
    fontSize: 14,
    color: '#585858',
  },
  lastMessage: {
    fontFamily: 'NanumSquareRound',
    fontSize: 16,
    color: '#000000',
  },
  badgeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#E00000',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  badgeText: {
    color: '#FFFFFF',
    fontFamily: 'NanumSquareRound',
    fontSize: 16,
  },
});

export default ChatRoomItem;
