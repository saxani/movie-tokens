import { createStackNavigator } from '@react-navigation/stack';

import AllFilmsScreen from './AllFilmsScreen';
import FilmDetailsScreen from './FilmDetailsScreen';

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator initialRouteName='FilmList'>
      <Stack.Screen
        name='FilmList'
        component={AllFilmsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name='FilmDetails' component={FilmDetailsScreen} />
    </Stack.Navigator>
  );
};

export default HomeScreen;
