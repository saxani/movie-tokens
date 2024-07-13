import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from '@expo/vector-icons/AntDesign';

import AllFilmsScreen from './AllFilmsScreen';
import FilmDetailsScreen from './FilmDetailsScreen';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName='FilmList'>
      <Stack.Screen
        name='FilmList'
        component={AllFilmsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='FilmDetails'
        component={FilmDetailsScreen}
        options={{
          headerLeft: () => (
            <AntDesign
              name='back'
              size={32}
              color='black'
              style={{ marginLeft: 10 }}
              onPress={() => {
                navigation.navigate('FilmList');
              }}
            />
          ),
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeScreen;
