import { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DetailsTabs from '../components/DetailsTabs';
import MoviePoster from '../components/MoviePoster';
import { timeFormatter } from '../utilities/timeFormatter';
import { FilmsContext } from '../context/Films';

const FilmDetails = ({ route }) => {
  const [movieDetails, setMovieDetails] = useState('');
  const [runtime, setRuntime] = useState('');
  const [rating, setRating] = useState('');
  const { posterURL } = useContext(FilmsContext);

  const { item } = route.params;

  useEffect(() => {
    fetch('http://192.168.2.131:4000/movie-details', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ id: item.id }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMovieDetails(data);
        setRuntime(timeFormatter(data.runtime));
        setRating(Math.round(data.vote_average * 10) / 10);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <MoviePoster
            posterURL={posterURL}
            path={movieDetails.poster_path}
            width={100}
            height={150}
            marginBottom={5}
          />
        </View>

        <View style={styles.headerRight}>
          <Text>{movieDetails.original_title}</Text>
          <Text>{movieDetails.certification}</Text>
          <Text>{runtime}</Text>
          <Text>{rating}/10</Text>
        </View>
      </View>
      <DetailsTabs movieDetails={movieDetails} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  headerRight: {
    marginLeft: 20,
  },
});

export default FilmDetails;
