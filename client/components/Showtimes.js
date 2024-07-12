import { useState, useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { FilmsContext } from '../context/Films';
import { dateFormatter } from '../utilities/dateFormatter';
import CinemaList from './CinemaList';

const Date = ({ item, num, handleDatePress, currentIndex }) => {
  return (
    <TouchableOpacity
      style={[
        styles.dateButton,
        currentIndex === num ? styles.buttonActive : '',
      ]}
      onPress={() => handleDatePress(num)}
    >
      <Text style={styles.text}>{item}</Text>
    </TouchableOpacity>
  );
};

const Showtimes = ({ showtimesDetails }) => {
  const { updateSelectedFilm } = useContext(FilmsContext);
  const [dateIndex, setDateIndex] = useState(0);
  const dates = dateFormatter();

  const handleDatePress = (num) => {
    setDateIndex(num);
    updateSelectedFilm({ date: dates[num] });
  };

  if (!dates) {
    return;
  }

  if (!showtimesDetails) {
    return (
      <Text style={{ color: '#fff' }}>
        Showtimes for this film cannot be found at this time.{' '}
      </Text>
    );
  }

  return (
    <View>
      <FlatList
        style={styles.dateContainer}
        numColumns={4}
        data={dates}
        renderItem={({ item, index }) => (
          <Date
            item={item}
            num={index}
            handleDatePress={handleDatePress}
            currentIndex={dateIndex}
          />
        )}
        keyExtractor={(item) => item}
      />
      <CinemaList cinemaTimes={showtimesDetails[dateIndex]} />
    </View>
  );
};

const styles = StyleSheet.create({
  dateContainer: {
    marginBottom: 20,
  },
  dateButton: {
    alignItems: 'center',
    margin: 5,
    padding: 10,
    width: '22%',
    backgroundColor: '#fff',
  },
  buttonActive: {
    backgroundColor: '#888',
  },
  text: {
    color: '#000',
  },
});

export default Showtimes;
