import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const SearchResults = ({ results, posterURL, handleHideModal }) => {
  const Item = ({ item }) => {
    const navigation = useNavigation();
    const uri = posterURL + item.poster_path;

    const handlePress = () => {
      navigation.navigate('FilmDetails', {
        item: item,
      });
      handleHideModal();
    };

    return (
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.itemContainer}>
          <Image
            resizeMode={'contain'}
            style={styles.image}
            source={{
              uri: uri,
            }}
          />
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      style={styles.listContainer}
      data={results}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 20,
  },
  itemContainer: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    paddingBottom: 20,
    borderBottomColor: '#aaa',
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
  },
  itemTitle: {
    marginLeft: 10,
    fontSize: 18,
    flex: 1,
    flexWrap: 'wrap',
  },
  image: {
    width: 40,
    height: 60,
  },
});

export default SearchResults;