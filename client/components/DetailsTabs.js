import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const DetailsTabs = () => {
  return (
    <View>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={[styles.menuButton, styles.menuButtonOne]}>
          <Text>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text>Showtimes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
  },
  menuButton: {
    width: '50%',
    alignItems: 'center',
  },
  activeButton: {
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
});

export default DetailsTabs;
