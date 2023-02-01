import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
// import {Dimensions} from 'react-native';
import StackPageScreen from '../../../Stackpage';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const Loginpagescreen = ({navigation}) => {
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');
  let url = 'http://10.0.2.2:8081/api/user/login';
  const login = () => {
    const obj = {
      text,
      number,
    };

    console.log(30, obj);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: text,
        password: number,
      }),
    })
      .then(res => console.log(res))
      .then(response => {
        console.log(41, response);
      })
      .catch(err => {
        console.log(42, err);
      });
  };

  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({window, screen}) => {
        setDimensions({window, screen});
      },
    );
    return () => subscription?.remove();
  });

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.header}>Screen Dimensions</Text>
        {Object.entries(dimensions.screen).map(([key, value]) => (
          <Text>
            {key} - {value}
          </Text>
        ))}
      </View>
      <View>
        <View>{/* <StackPageScreen /> */}</View>
        {/* <Text>jiij</Text> */}
        <View
          style={{
            backgroundColor: 'lightblue',
            height: 350,
            // borderWidth: 2,
            // width: 370,
            // marginTop: 20,
            // marginLeft: 10,
          }}>
          <Text
            style={{
              marginTop: 100,
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: 40,
            }}>
            Edison Club jr
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              height: 350,
              // borderWidth: 2,
              // width: 370,
              marginTop: 100,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              // marginLeft: 10,
              elevation: 10,
              height: 600,
            }}>
            <Text style={{fontSize: 30, textAlign: 'center', color: 'black'}}>
              Login
            </Text>
            <Text style={{fontSize: 20, textAlign: 'center', color: 'black'}}>
              Welcome Back!
            </Text>
            <TextInput
              style={{
                height: 50,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                marginTop: 40,
                borderRadius: 10,
              }}
              //   style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="OTP"
              keyboardType="numeric"
            />

            {/* <Button
              style={styles.btn}
              title="Press me"
              onPress={() => Alert.alert('Simple Button pressed')}
            /> */}
            <View
              style={{
                backgroundColor: 'lightblue',
                height: 50,
                width: 200,
                marginLeft: 100,
                borderRadius: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity onPress={() => login()}>
                <Text
                  style={{
                    fontSize: 25,
                    textAlign: 'center',
                    marginTop: 8,
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  SUBMIT
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <Text style={{textAlign: 'center', color: 'black'}}>
                Don't have an account ?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignUppage')}>
                <Text style={{color: 'blue', fontWeight: 'bold'}}> SignUp</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 16,
    marginVertical: 10,
  },

  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    // marginTop: 20,
  },
  btn: {
    marginLeft: 120,
  },
});
export default Loginpagescreen;
