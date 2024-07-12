import { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DetailsTabs from '../components/DetailsTabs';
import MoviePoster from '../components/MoviePoster';
import { timeFormatter } from '../utilities/timeFormatter';
import { FilmsContext } from '../context/Films';

const FilmDetails = ({ route }) => {
  const [movieDetails, setMovieDetails] = useState('');
  const [showtimesDetails, setShowtimesDetails] = useState('');

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
        setMovieDetails(data[0]);
        setShowtimesDetails(data[1]);
        setRuntime(timeFormatter(data[0].runtime));
        setRating(Math.round(data[0].vote_average * 10) / 10);
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
          <Text style={styles.text}>{movieDetails.original_title}</Text>
          <Text style={styles.text}>{movieDetails.certification}</Text>
          <Text style={styles.text}>{runtime}</Text>
          <Text style={styles.text}>{rating}/10</Text>
        </View>
      </View>
      <DetailsTabs
        movieDetails={movieDetails}
        showtimesDetails={showtimesDetails}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#000',
    flex: 1,
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
  text: {
    color: '#fff',
  },
});

export default FilmDetails;
