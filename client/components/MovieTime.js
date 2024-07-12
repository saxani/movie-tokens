import { useState, useContext } from 'react';

import { View, Modal, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { FilmsContext } from '../context/Films';

const MovieTime = ({ item, type, name }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { selectedFilm, updateSelectedFilm } = useContext(FilmsContext);

  const handlePress = () => {
    updateSelectedFilm({ time: item, viewType: type, theater: name });
    setModalVisible(true);
  };

  return (
    <View>
      <TouchableOpacity style={styles.timeButton} onPress={handlePress}>
        <Text style={[styles.text, styles.timeText]}>{item}</Text>
      </TouchableOpacity>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
            <Text>{selectedFilm.title}</Text>
            <Text>{selectedFilm.date}</Text>
            <Text>{selectedFilm.theater}</Text>
            <Text>{selectedFilm.viewType}</Text>
            <Text>{selectedFilm.time}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: 300,
    height: 200,
    margin: 0,
    backgroundColor: 'white',
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

export default MovieTime;
