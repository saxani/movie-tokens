import { useContext } from 'react';
import { FlatList, View, Text } from 'react-native';

import { FilmsContext } from '../context/Films';
import MovieCard from './MovieCard';

const FilmList = ({ navigation }) => {
  const { posterURL, films } = useContext(FilmsContext);

  if (!films) {
    return (
      <View>
        <Text>Getting films...</Text>
      </View>
    );
  }

  return (
    <FlatList
      numColumns={2}
      data={films}
      renderItem={({ item }) => (
        <MovieCard item={item} posterURL={posterURL} navigation={navigation} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default FilmList;
