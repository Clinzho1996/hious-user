/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */

import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackActions} from '@react-navigation/native';
import ReportBusiness from './ReportBusiness';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  async function login() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    let item = {email, password};
    console.warn(item);

    fetch('https://hiousapp.com/api/user_auth/login.php', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(result => {
        let statusCode = result.status,
          success = result.ok;
        result.json().then(result => {
          if (!success) {
            console.log(result.message);
            Alert.alert('Warning', result.message);
            return;
          } else {
            console.log(result);
            navigation.navigate('Main');
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}>
      <View style={styles.containerTwo}>
        {loading ? (
          <ActivityIndicator
            //visibility of Overlay Loading Spinner
            visible={loading}
            //Text with the Spinner
            textContent={'Loading...'}
            //Text style of the Spinner Text
            textStyle={styles.spinnerTextStyle}
          />
        ) : (
          <>
            <View
              style={{
                paddingHorizontal: 0,
                paddingVertical: 20,
                flexDirection: 'row',
              }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={30} color={'#C4C4C4'} />
              </TouchableOpacity>
              <Text style={{fontSize: 18, color: '#fff'}}>Electricity</Text>
            </View>
            <View>
              <Text style={{fontSize: 28, color: '#7A86C0', fontWeight: '600'}}>
                Let's Sign you in
              </Text>
              <Text
                style={{
                  paddingTop: 20,
                  fontSize: 16,
                  lineHeight: 24,
                  color: '#828282',
                }}>
                Welcome back, we are glad you {'\n'}came back.🙃
              </Text>
              <View>
                <View
                  style={{
                    backgroundColor: '#F9F9F9',
                    paddingHorizontal: 0,
                    paddingVertical: 0,
                    paddingBottom: 10,
                    borderRadius: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: 10,
                    paddingLeft: 20,
                    marginTop: 70,
                  }}>
                  <Icon name="mail-outline" size={20} color={'#C4C4C4'} />
                  <TextInput
                    style={{
                      paddingTop: 5,
                      paddingBottom: 5,
                      fontSize: 16,
                      paddingLeft: 10,
                      color: '#C4C4C4',
                    }}
                    placeholder="Email"
                    placeholderTextColor={'#C4C4C4'}
                    value={email}
                    onChangeText={text => setEmail(text)}
                  />
                </View>
                <View>
                  <View
                    style={{
                      backgroundColor: '#F9F9F9',
                      paddingHorizontal: 0,
                      paddingVertical: 0,
                      paddingBottom: 10,
                      borderRadius: 10,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingTop: 10,
                      paddingLeft: 20,
                      marginTop: 20,
                    }}>
                    <Icon
                      name="lock-closed-outline"
                      size={20}
                      color={'#C4C4C4'}
                    />
                    <TextInput
                      style={{
                        fontSize: 16,
                        width: '82%',
                        paddingTop: 5,
                        paddingBottom: 5,
                        color: '#C4C4C4',
                      }}
                      placeholder="Password"
                      placeholderTextColor={'#C4C4C4'}
                      secureTextEntry={!showPassword}
                      value={password}
                      onChangeText={text => setPassword(text)}
                    />
                    <TouchableOpacity
                      style={{
                        height: 30,
                        width: 30,
                      }}
                      onPress={() => setShowPassword(!showPassword)}>
                      <Icon
                        name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                        size={20}
                        color={'#C4C4C4'}
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      style={{
                        marginTop: 20,
                        justifyContent: 'flex-end',
                        flexDirection: 'row',
                      }}
                      onPress={() => navigation.navigate('Forgot')}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '600',
                          color: '#C4C4C4',
                        }}>
                        Forgot Password ?
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {/* {this.state.statusCode && <Text>{this.state.statusCode}</Text>} */}
                  <View>
                    <TouchableOpacity style={styles.btnPrimary} onPress={login}>
                      <Text style={styles.reg}>Sign in</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{marginTop: 20, alignItems: 'center'}}>
                    <Text style={{color: '#475569', fontSize: 16}}>
                      Or Continue with
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      paddingHorizontal: 80,
                      paddingVertical: 20,
                    }}>
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#F1F5F9',
                        borderRadius: 6,
                        padding: 10,
                      }}>
                      <Icon name="logo-google" size={15} color={'#7A86C0'} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#F1F5F9',
                        borderRadius: 6,
                        padding: 10,
                      }}>
                      <Icon name="logo-twitter" size={15} color={'#7A86C0'} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#F1F5F9',
                        borderRadius: 6,
                        padding: 10,
                      }}>
                      <Icon name="logo-facebook" size={15} color={'#7A86C0'} />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                      marginTop: 10,
                    }}>
                    <Text
                      style={{color: '#828282', fontSize: 16, marginRight: 10}}>
                      Don't have an account?
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Register')}>
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 16,
                          color: '#7A86C0',
                        }}>
                        Register
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: windowWidth,
    height: windowHeight,
    paddingHorizontal: 30,
    paddingVertical: 0,
    flex: 1,
  },
  btnPrimary: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#7A86C0',
    borderRadius: 10,
    marginTop: 70,
    paddingTop: 15,
    paddingBottom: 15,
  },
  reg: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  containerTwo: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 0,
    padding: 8,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});
