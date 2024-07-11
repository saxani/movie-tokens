import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import MoviePoster from './MoviePoster';

const MovieCard = ({ item, posterURL, navigation }) => {
  const [cardWidth, setCardWidth] = useState('');
  const rating = Math.round(item.vote_average * 10) / 10;

  const styles = StyleSheet.create({
    item: {
      backgroundColor: '#fff',
      padding: 10,
      margin: 10,
      width: '45%',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    rating: {
      marginTop: 'auto',
    },
  });

  const getSize = (e) => {
    setCardWidth(e.nativeEvent.layout.width);
  };

  const handlePress = () => {
    navigation.navigate('FilmDetails', {
      item: item,
    });
  };

  return (
    <TouchableOpacity
      onLayout={getSize}
      style={styles.item}
      onPress={handlePress}
    >
      <MoviePoster
        posterURL={posterURL}
        path={item.poster_path}
        width={cardWidth - 20}
        height={(cardWidth - 20) * 1.5}
        marginBottom={5}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.rating}>{rating}/10</Text>
    </TouchableOpacity>
  );
};

export default MovieCard;
