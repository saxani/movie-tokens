import { FlatList } from 'react-native';

import MovieCard from './MovieCard';

const FilmList = ({ navigation, posterURL, films }) => {
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
