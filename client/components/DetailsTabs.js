import { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { FilmsContext } from '../context/Films';
import About from './About';
import Showtimes from './Showtimes';

const DetailsTabs = ({ movieDetails, showtimesDetails }) => {
  const { updateSelectedFilm } = useContext(FilmsContext);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    updateSelectedFilm({ title: movieDetails.original_title });
  }, [movieDetails]);

  return (
    <View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={[styles.menuButton, styles.menuButtonOne]}
          onPress={() => setIndex(0)}
        >
          <Text style={[styles.text, index === 0 ? styles.selected : '']}>
            About
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => setIndex(1)}>
          <Text style={[styles.text, index === 1 ? styles.selected : '']}>
            Showtimes
          </Text>
        </TouchableOpacity>
      </View>
      {index === 0 && <About movieDetails={movieDetails} />}
      {index === 1 && <Showtimes showtimesDetails={showtimesDetails} />}
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    height: 30,
  },
  menuButton: {
    width: '50%',
    alignItems: 'center',
  },
  activeButton: {
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  text: {
    color: '#fff',
  },
  selected: {
    color: '#630069',
  },
});

export default DetailsTabs;
