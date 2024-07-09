import { useState, useEffect, useContext } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
} from 'react-native';
import { FilmsContext } from '../context/Films';

import Input from './Input';
import SearchResults from './SearchResults';

//Need a variable somewhere for this so it works in app.js too
const menuHeight = 100;

const Search = () => {
  const { films } = useContext(FilmsContext);
  const [text, setText] = useState('');
  const [results, setResults] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  console.log(results);

  const handleText = (newText) => {
    setText(newText);

    if (newText) {
      setModalVisible(true);
    }
  };

  useEffect(() => {
    if (films) {
      setResults(films.filter((film) => film.title.includes(text)));
    }
  }, [text]);

  return (
    <View>
      <Input
        onChangeText={handleText}
        placeholder='Search for films...'
        text={text}
      />

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
            <SearchResults results={results} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '100%',
    height: Dimensions.get('window').height - menuHeight,
    top: menuHeight,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Search;
