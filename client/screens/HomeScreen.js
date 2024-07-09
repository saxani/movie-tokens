import { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AllFilmsScreen from './AllFilmsScreen';
import FilmDetailsScreen from './FilmDetailsScreen';
import Search from '../components/Search';

const Stack = createStackNavigator();

const HomeScreen = () => {
  const [films, setFilms] = useState('');
  const [posterURL, setPosterURL] = useState('');

  useEffect(() => {
    fetch('http://192.168.2.131:4000/now-playing')
      .then((res) => res.json())
      .then((data) => {
        setFilms(data);
      })
      .catch((error) => {
        console.error(error);
      });

    fetch('http://192.168.2.131:4000/poster-url')
      .then((res) => res.json())
      .then((data) => {
        setPosterURL(data.poster);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const AllFilmsWrapper = () => {
    return <AllFilmsScreen films={films} posterURL={posterURL} />;
  };

  return (
    <Stack.Navigator initialRouteName='FilmList'>
      <Stack.Screen
        name='FilmList'
        component={AllFilmsWrapper}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name='FilmDetails' component={FilmDetailsScreen} />
    </Stack.Navigator>
  );
};

export default HomeScreen;
