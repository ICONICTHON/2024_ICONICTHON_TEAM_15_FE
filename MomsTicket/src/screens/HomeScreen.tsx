// HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.customFontText}>Hello, React Native!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  customFontText: {
    fontSize: 20,
    color: '#333333',
    fontFamily: 'Yeongdo-Bold', // Yeongdo-Bold 폰트 적용
  },
});

export default HomeScreen;
