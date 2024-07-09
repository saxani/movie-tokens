import { FlatList, View, Text } from 'react-native';

const SearchResults = ({ results }) => {
  const Item = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={results}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default SearchResults;
