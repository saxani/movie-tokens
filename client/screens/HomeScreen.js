import { createStackNavigator } from '@react-navigation/stack';

import FilmList from './FilmList';
import FilmDetails from './FilmDetails';

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator initialRouteName='FilmList'>
      <Stack.Screen name='FilmList' component={FilmList} />
      <Stack.Screen name='FilmDetails' component={FilmDetails} />
    </Stack.Navigator>
  );
};

export default HomeScreen;
