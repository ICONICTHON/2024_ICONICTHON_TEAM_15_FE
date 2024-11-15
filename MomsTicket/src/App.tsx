import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomBar from './components/common/BottomBar';
import TopBar from './components/common/TopBar';
import HomeScreen from './screens/HomeScreen';
import ScheduleDetailScreen from './screens/ScheduleDetailScreen';
import FindTicketAgentScreen from './screens/ticketing/FindTicketAgentScreen';
import MatchTicketAgentScreen from './screens/ticketing/MatchTicketAgentScreen';
import TicketScreen from './screens/ticketing/TicketScreen';
import IdolSelectionScreen from './screens/ChooseIdolSlideScreen.tsx';
import MyIdolChooseScreen from './screens/ChooseIdolScreen.tsx';
import ChatListScreen from './screens/chat/ChatListScreen';
import ChatScreen from './screens/chat/ChatScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator tabBar={() => <BottomBar />}>
      <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
      <Tab.Screen name="Tickets" component={TicketStack} options={{ headerShown: false }} />
      <Tab.Screen name="Chat" component={ChatStack} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

const ChooseTabs = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Slide" component={IdolSelectionScreen} />
      <Stack.Screen name="Choose" component={MyIdolChooseScreen} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ScheduleDetail" component={ScheduleDetailScreen} />
      <Stack.Screen name="FindTicketAgent" component={FindTicketAgentScreen} />
      <Stack.Screen name="MatchTicketAgent" component={MatchTicketAgentScreen} />
    </Stack.Navigator>
  );
};

const TicketStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TicketScreen" component={TicketScreen} />
    </Stack.Navigator>
  );
};

const ChatStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ChatListScreen" component={ChatListScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
     {/*} <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="StackTabs"> */}
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Main">

        {/* ChooseTabs 스크린에서는 TopBar를 숨김 */}
        <Stack.Screen name="ChooseTabs" component={ChooseTabs} />

        {/* Main 스크린에서만 TopBar를 렌더링함 */}
        <Stack.Screen name="Main" component={() => (
          <>
            <TopBar />
            <MainTabs />
          </>
        )} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
