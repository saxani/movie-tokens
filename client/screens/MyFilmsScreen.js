import { StyleSheet, Text, View } from 'react-native';

const MyFilmsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>My Films</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyFilmsScreen;
