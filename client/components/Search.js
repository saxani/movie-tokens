import { useState, useEffect, useContext, useRef } from 'react';
import { Modal, StyleSheet, View, Pressable, Dimensions } from 'react-native';

import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

import { FilmsContext } from '../context/Films';

import Logo from './Logo';
import Input from './Input';
import SearchResults from './SearchResults';

const Search = () => {
  const { films, posterURL } = useContext(FilmsContext);
  const [text, setText] = useState('');
  const [results, setResults] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const inputRef = useRef(null);

  const handleText = (newText) => {
    setText(newText);
  };

  const handleShowModal = () => {
    setModalVisible(true);
  };

  const handleHideModal = () => {
    setText('');
    setModalVisible(false);
  };

  const onShowModal = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    if (films) {
      setResults(
        films.filter((film) =>
          film.title.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
  }, [text]);

  return (
    <View>
      {!modalVisible && (
        <Entypo
          style={{ marginRight: 5 }}
          onPress={handleShowModal}
          name='magnifying-glass'
          size={32}
          color='black'
        />
      )}

      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onShow={onShowModal}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.modalTop}>
            <Logo />
            <View style={styles.inputContainer}>
              <Input
                onChangeText={handleText}
                placeholder='Search for films...'
                text={text}
                inputRef={inputRef}
              />
            </View>

            <Pressable onPress={handleHideModal} style={styles.closeButton}>
              <AntDesign name='closecircleo' size={30} color='black' />
            </Pressable>
          </View>

          {text && (
            <SearchResults
              results={results}
              posterURL={posterURL}
              handleHideModal={handleHideModal}
            />
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    top: 47,
    margin: 0,
    backgroundColor: 'white',
  },
  modalTop: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputContainer: {
    marginTop: -11,
    marginLeft: -13,
  },
  closeButton: {
    marginRight: 10,
  },
});

export default Search;
