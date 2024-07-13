import { useState, useContext } from 'react';

import { View, Modal, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { FilmsContext } from '../context/Films';

const MovieTime = ({ item, type, name }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { selectedFilm, updateSelectedFilm, updateToSee } =
    useContext(FilmsContext);

  const handleTimePress = () => {
    updateSelectedFilm({ time: item, viewType: type, theater: name });
    setModalVisible(true);
  };

  const handleConfirmPress = () => {
    updateToSee(selectedFilm.title);
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity style={styles.timeButton} onPress={handleTimePress}>
        <Text style={[styles.text, styles.timeText]}>{item}</Text>
      </TouchableOpacity>
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{ marginBottom: 10 }}>
              Do you want to get tickets for the following film?
            </Text>
            <Text>Name: {selectedFilm.title}</Text>
            <Text>Date: {selectedFilm.date}</Text>
            <Text>Theater: {selectedFilm.theater}</Text>
            <Text>Time: {selectedFilm.time}</Text>
            {selectedFilm.viewType && (
              <Text>Type: {selectedFilm.viewType}</Text>
            )}
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleConfirmPress}
              >
                <Text style={styles.textStyle}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableOpacity>
            </View>
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
  buttonWrapper: {
    flexDirection: 'row',
  },
  button: {
    marginTop: 15,
    marginRight: 15,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
    padding: 20,
    width: 100,
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  timeButton: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
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
