import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

const Search = ({ onChangeText, placeholder, text }) => {
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 190,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});

export default Search;
