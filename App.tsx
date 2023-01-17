import * as React from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from './src/pages/Home';
import Search from './src/pages/Search';
import Setting from './src/pages/Setting';
import {Provider, useSelector} from 'react-redux';
import {RootState, store} from './src/redux/store';

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Setting: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const linking = {
  prefixes: ['synergy://'],
  config: {
    screens: {
      Home: 'home',
      Setting: 'setting',
      Search: 'search',
    },
  },
};

function App(): JSX.Element {
  const {isDarkTheme} = useSelector((state: RootState) => state.reducer);
  return (
    <NavigationContainer
      linking={linking}
      theme={isDarkTheme ? DarkTheme : DefaultTheme}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            tabBarLabel: 'Setting',
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="gear" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function Main(): JSX.Element {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Main;
