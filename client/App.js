import { useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider, FilmsContext } from './context/Films';
import HomeScreen from './screens/HomeScreen';
import MyFilmsScreen from './screens/MyFilmsScreen';
import Logo from './components/Logo';
import Search from './components/Search';

const Tab = createBottomTabNavigator();

const TabScreens = () => {
  const { getNowPlayingFilms } = useContext(FilmsContext);

  useEffect(() => {
    getNowPlayingFilms();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        headerLeft: () => <Logo />,
        headerTitle: () => <Search />,
        headerStyle: {
          backgroundColor: '#fff',
          height: 100,
        },
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='MyFilms' component={MyFilmsScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <TabScreens />
      </NavigationContainer>
    </Provider>
  );
}
