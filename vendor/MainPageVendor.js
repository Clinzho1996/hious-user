/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import * as React from 'react';

const windowWidth = Dimensions.get('window').width;

const MainPageVendor = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.user}>
        <TouchableOpacity
          style={styles.userdetails}
          onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../assets/vendor-user.png')}
            style={{width: 40, height: 40}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('NotificationsVendor')}>
          <Image
            source={require('../assets/notify.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>
      <View style={{paddingVertical: 20}}>
        <Text
          style={{
            color: '#7A86C0',
            fontSize: 24,
            lineHeight: 36,
            fontWeight: '700',
          }}>
          Dashboard
        </Text>
        <View>
          <View
            style={{
              backgroundColor: '#F9F9F9',
              display: 'flex',
              flexDirection: 'row',
              padding: 20,
              borderRadius: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 200,
            }}>
            <View>
              <Text style={{color: '#7A86C0', fontSize: 16, fontWeight: '500'}}>
                Total Sales
              </Text>
              <Text style={{color: '#c4c4c4', fontSize: 30, fontWeight: '700'}}>
                ₦1,435,767.00
              </Text>
            </View>
            <View
              style={{borderWidth: 1, borderColor: '#f9f9f9', borderRadius: 6}}>
              <Image
                source={require('../assets/naira.png')}
                style={{
                  width: 30,
                  height: 30,
                  borderWidth: 1,
                  borderColor: '#f9f9f9',
                  borderRadius: 6,
                  padding: 10,
                }}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#F9F9F9',
              display: 'flex',
              flexDirection: 'row',
              padding: 20,
              borderRadius: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <View>
              <Text style={{color: '#7A86C0', fontSize: 16, fontWeight: '500'}}>
                Total Users
              </Text>
              <Text style={{color: '#c4c4c4', fontSize: 30, fontWeight: '700'}}>
                255
              </Text>
            </View>
            <View
              style={{borderWidth: 1, borderColor: '#f9f9f9', borderRadius: 6}}>
              <Image
                source={require('../assets/total-users.png')}
                style={{
                  width: 30,
                  height: 30,
                  borderWidth: 1,
                  borderColor: '#f9f9f9',
                  borderRadius: 6,
                  padding: 10,
                }}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#F9F9F9',
              display: 'flex',
              flexDirection: 'row',
              padding: 20,
              borderRadius: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <View>
              <Text style={{color: '#7A86C0', fontSize: 16, fontWeight: '500'}}>
                New Users
              </Text>
              <Text style={{color: '#c4c4c4', fontSize: 30, fontWeight: '700'}}>
                14
              </Text>
            </View>
            <View
              style={{borderWidth: 1, borderColor: '#f9f9f9', borderRadius: 6}}>
              <Image
                source={require('../assets/New-users.png')}
                style={{
                  width: 30,
                  height: 30,
                  borderWidth: 1,
                  borderColor: '#f9f9f9',
                  borderRadius: 6,
                  padding: 10,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MainPageVendor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 30,
    width: windowWidth,
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userdetails: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    backgroundColor: '#F9F9F9',
    padding: 10,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 13,
    textAlign: 'center',
    color: '#5c5c5c',
    marginTop: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#7A86C0',
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
    width: 300,
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
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
  filter: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterprop: {
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 5,
    alignItems: 'center',
  },
});
