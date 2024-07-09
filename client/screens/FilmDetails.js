import { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

const FilmDetails = ({ route }) => {
  const [movieDetails, setMovieDetails] = useState('');
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
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <Text>{movieDetails.original_title}</Text>
      <Text>{movieDetails.overview}</Text>
    </View>
  );
};

export default FilmDetails;
