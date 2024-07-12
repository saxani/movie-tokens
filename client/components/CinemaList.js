import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Time = ({ item }) => (
  <TouchableOpacity style={styles.timeButton}>
    <Text style={[styles.text, styles.timeText]}>{item}</Text>
  </TouchableOpacity>
);

const ViewingType = ({ item }) => (
  <View>
    <View style={styles.typeContainer}>
      <Text style={[styles.text, styles.type]}>{item.type}</Text>
      <FlatList
        style={styles.timeContainer}
        data={item.time}
        renderItem={({ item }) => <Time item={item} />}
        keyExtractor={(item) => item.time}
      />
    </View>
  </View>
);

const Cinema = ({ item }) => (
  <View style={styles.cinemaContainer}>
    <Text style={styles.text}>{item.name}</Text>
    <Text style={[styles.text, styles.address]}>{item.address}</Text>
    <FlatList
      data={item.showing}
      renderItem={({ item }) => <ViewingType item={item} />}
      keyExtractor={(item) => item.type}
    />
  </View>
);

const CinemaList = ({ cinemaTimes }) => {
  const data = cinemaTimes.theaters;

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
