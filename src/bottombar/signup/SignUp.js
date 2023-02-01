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
import DateTimePicker from 'react-native-modal-datetime-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const SignUppagescreen = ({navigation}) => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = date => {
    setSelectedDate(date);
    hideDatePicker();
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
      <View
        style={{
          backgroundColor: 'lightblue',
          height: 350,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            height: 10000,
            // borderWidth: 2,
            // width: 370,
            marginTop: 120,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            // marginLeft: 10,
            elevation: 10,
            // height: '100%',
          }}>
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
              color: 'black',
              marginTop: 10,
              fontWeight: 'bold',
            }}>
            SignUp
          </Text>
          <TextInput
            style={{
              height: 50,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              marginTop: 30,
              borderRadius: 10,
            }}
            //   style={styles.input}
            placeholder="Name"
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

          <Button
            style={styles.btn}
            title="Date Of Birth"
            onPress={showDatePicker}
            color="lightblue"
          />

          <DateTimePickerModal
            date={selectedDate}
            isVisible={datePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={{
                height: 50,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                marginTop: 10,
                borderRadius: 10,
                width: 170,
              }}
              //   style={styles.input}
              placeholder="State"
              onChangeText={onChangeText}
              value={text}
            />
            <TextInput
              style={{
                height: 50,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                marginTop: 10,
                borderRadius: 10,
                width: 170,
              }}
              //   style={styles.input}
              placeholder="District"
              onChangeText={onChangeText}
              value={text}
            />
          </View>

          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={{
                height: 50,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                marginTop: 10,
                borderRadius: 10,
                width: 170,
              }}
              //   style={styles.input}
              placeholder="Tahsil"
              onChangeText={onChangeText}
              value={text}
            />
            <TextInput
              style={{
                height: 50,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                marginTop: 10,
                borderRadius: 10,
                width: 170,
              }}
              //   style={styles.input}
              placeholder="Pincode"
              onChangeText={onChangeText}
              value={text}
            />
          </View>
          <TextInput
            style={{
              height: 50,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              marginTop: 10,
              borderRadius: 10,
              // width: 170,
              color: 'black',
            }}
            //   style={styles.input}
            placeholder="Referal code"
            onChangeText={onChangeText}
            value={text}
          />

          <TouchableOpacity onPress={() => navigation.navigate('AgeGroupPage')}>
            <View
              style={{
                height: 50,
                width: 150,
                backgroundColor: 'lightblue',
                marginLeft: 200,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 8,
                  fontSize: 25,
                  color: 'white',
                }}>
                Next
              </Text>
            </View>
          </TouchableOpacity>

          {/* /> */}
          {/* </View> */}
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
    marginTop: 0,
  },
  //   btn: {
  //     marginLeft: 120,
  //   },
  btn: {
    height: 30,
    marginTop: 90,
    width: 50,
    color: 'red',
  },
});
export default SignUppagescreen;
