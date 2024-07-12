import { View, FlatList, Text, StyleSheet } from 'react-native';

import MovieTime from './MovieTime';

const ViewingType = ({ item, name }) => {
  const type = item.type ? item.type : 'Standard';

  return (
    <View>
      <View style={styles.typeContainer}>
        <Text style={[styles.text, styles.type]}>{type}</Text>
        <FlatList
          style={styles.timeContainer}
          data={item.time}
          renderItem={({ item }) => (
            <MovieTime item={item} type={type} name={name} />
          )}
          keyExtractor={(item, index) => `${index}-${item.time}`}
        />
      </View>
    </View>
  );
};

const Cinema = ({ item }) => {
  const location = item;

  return (
    <View style={styles.cinemaContainer}>
      <Text style={styles.text}>{location.name}</Text>
      <Text style={[styles.text, styles.address]}>{location.address}</Text>
      <FlatList
        data={location.showing}
        renderItem={({ item }) => (
          <ViewingType item={item} name={location.name} />
        )}
        keyExtractor={(item, index) =>
          item.type ? item.type : `${index}-standard`
        }
      />
    </View>
  );
};

const CinemaList = ({ cinemaTimes }) => {
  const data = cinemaTimes.theaters;

  if (!cinemaTimes) {
    return;
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Cinema item={item} />}
      keyExtractor={(item) => item.name}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
  address: {
    fontSize: 10,
    marginBottom: 12,
  },
  cinemaContainer: {
    marginBottom: 25,
  },
  typeContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    marginBottom: 10,
  },
  timeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  type: {
    width: 70,
  },
  timeButton: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    borderStyle: 'solid',
    width: 60,
    height: 30,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 12,
  },
});

export default CinemaList;
