import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from './context/Films';
import HomeScreen from './screens/HomeScreen';
import MyFilmsScreen from './screens/MyFilmsScreen';
import Logo from './components/Logo';
import Search from './components/Search';

const Tab = createBottomTabNavigator();

function MyTabs() {
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
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
