import { SafeAreaView, StyleSheet, TextInput } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

const Search = ({
  onChangeText,
  placeholder,
  text,
  inputRef,
  marginBottom,
}) => {
  const styles = StyleSheet.create({
    container: {
      height: 40,
      width: 190,
      marginTop: 12,
      marginBottom: marginBottom || 0,
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,

      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      marginLeft: 5,
    },
    icon: {
      margin: 3,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Entypo
        style={styles.icon}
        name='magnifying-glass'
        size={24}
        color='black'
      />
      <TextInput
        autoCorrect={false}
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={text}
        ref={inputRef}
      />
    </SafeAreaView>
  );
};

export default Search;
