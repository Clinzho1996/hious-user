/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Welcome = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleTwo, setModalVisibleTwo] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredViewTwo}>
          <View style={styles.modalViewTwo}>
            <Text style={styles.modalTextTwo}>Account type</Text>
            <View style={styles.filterTwo}>
              <Pressable
                style={styles.filterpropTwo}
                onPress={() => setModalVisible(!modalVisible)}>
                <Icon name="close" size={30} color={'#fff'} />
              </Pressable>
            </View>
            <TouchableOpacity
              style={styles.call}
              onPress={() => navigation.navigate('Register')}>
              <Text
                style={{color: '#FFFFFF', textAlign: 'center', fontSize: 16}}>
                Personal account
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.call}
              onPress={() => navigation.navigate('Register')}>
              <Text
                style={{color: '#FFFFFF', textAlign: 'center', fontSize: 16}}>
                Business account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleTwo}
        onRequestClose={() => {
          setModalVisibleTwo(!modalVisibleTwo);
        }}>
        <View style={styles.centeredViewTwo}>
          <View style={styles.modalViewTwo}>
            <Text style={styles.modalTextTwo}>Account type</Text>
            <View style={styles.filterTwo}>
              <Pressable
                style={styles.filterpropTwo}
                onPress={() => setModalVisibleTwo(!modalVisibleTwo)}>
                <Icon name="close" size={30} color={'#fff'} />
              </Pressable>
            </View>
            <TouchableOpacity
              style={styles.call}
              onPress={() => navigation.navigate('Login')}>
              <Text
                style={{color: '#FFFFFF', textAlign: 'center', fontSize: 16}}>
                Personal account
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.call}
              onPress={() => navigation.navigate('Login')}>
              <Text
                style={{color: '#FFFFFF', textAlign: 'center', fontSize: 16}}>
                Business account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View>
        <View style={{alignItems: 'center', paddingTop: 50}}>
          <Image
            source={require('../assets/search.png')}
            style={{width: 300, height: 300}}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.text}>Find businesses around you with ease</Text>
          <Text style={styles.textDetails}>
            We help you connect with the right vendors near you, using your
            current location.
          </Text>
          <View style={styles.cta}>
            <TouchableOpacity
              style={styles.btnPrimary}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.reg}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnSec}
              onPress={() => setModalVisibleTwo(!modalVisibleTwo)}>
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: windowWidth,
    height: windowHeight,
  },
  text: {
    fontSize: 28,
    fontWeight: '900',
    color: '#7A86C0',
    textAlign: 'center',
  },
  details: {
    alignContent: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  textDetails: {
    textAlign: 'center',
    lineHeight: 20.89,
    fontSize: 14,
    paddingVertical: 10,
    color: '#828282',
  },
  cta: {
    paddingTop: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnPrimary: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#7A86C0',
    borderRadius: 10,
  },
  btnSec: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginLeft: 10,
  },
  reg: {
    color: '#fff',
    fontSize: 16,
  },
  login: {
    fontSize: 16,
    color: '#7A86C0',
  },
  centeredViewTwo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingTop: 450,
  },
  modalViewTwo: {
    margin: 20,
    backgroundColor: '#7A86C0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    width: windowWidth,
  },
  textStyleTwo: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTextTwo: {
    marginBottom: 15,
    marginTop: 30,
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
    alignItems: 'center',
    marginLeft: 80,
  },
  filterTwo: {
    marginTop: 0,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    top: 20,
  },
  filterpropTwo: {
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 5,
  },
  call: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginTop: 20,
    width: 300,
    padding: 20,
    borderRadius: 15,
  },
});
