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

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator tabBar={() => <BottomBar />}>
      <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
      <Tab.Screen name="Tickets" component={TicketStack} options={{ headerShown: false }} />
    </Tab.Navigator>
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

export default function App() {
  return (
    <>
      <TopBar /> {/* 여기서 TopBar를 렌더링하여 모든 화면 상단에 표시 */}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Main" component={MainTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
