import { useEffect, useState } from 'react';
import { StyleSheet, FlatList, Text, View, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import MovieCard from '../components/MovieCard';

const Stack = createStackNavigator();

const FilmList = ({ navigation }) => {
  const [films, setFilms] = useState('');
  const [posterURL, setPosterURL] = useState('');

  //Hope to make this dynamic
  const city = 'Seattle, WA';

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

  if (!films) {
    return (
      <View style={styles.container}>
        <Text>Getting films...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Now playing near {city}:</Text>
      <View style={styles.listContainer}>
        <FlatList
          numColumns={2}
          style={styles.list}
          data={films}
          renderItem={({ item }) => (
            <MovieCard
              item={item}
              posterURL={posterURL}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    flex: 2, // the number of columns you want to devide the screen into
    marginHorizontal: 'auto',
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'center',
  },
  title: {
    margin: 10,
    fontSize: 14,
    color: '#fff',
  },
});

export default FilmList;
