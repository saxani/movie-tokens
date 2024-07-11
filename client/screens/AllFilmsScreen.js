import { StyleSheet, Text, View, Dimensions } from 'react-native';

import FilmList from '../components/FilmList';

const AllFilmsScreen = ({ navigation }) => {
  //Hope to make this dynamic
  const city = 'Seattle, WA';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Now playing near {city}:</Text>
      <View style={styles.listContainer}>
        <FilmList navigation={navigation} />
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    flex: 2, // the number of columns you want to devide the screen into
    marginHorizontal: 'auto',
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    margin: 10,
    fontSize: 14,
    color: '#fff',
  },
});

export default AllFilmsScreen;
