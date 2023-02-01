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
// import {Dropdown} from 'react-native-dropdown';
// import {Dropdown} from 'react-native-dropdown';
// import {Picker} from '@react-native-picker/picker';
import {Picker} from '@react-native-picker/picker';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

// class AgeGroupscreen extends Component {
const AgeGroupscreen = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

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
          height: 340,
          backgroundColor: 'lightblue',
          width: '100%',
        }}>
        <View
          style={{
            height: 1050,
            width: 390,
            backgroundColor: 'white',
            borderRadius: 40,
            marginTop: 200,
          }}>
          {/* <View>
            <Picker
              selectedValue={this.state.user}
              onValueChange={this.updateUser}>
              <Picker.Item label="Steve" value="steve" />
              <Picker.Item label="Ellen" value="ellen" />
              <Picker.Item label="Maria" value="maria" />
            </Picker>
            <Text style={styles.text}>{this.state.user}</Text>
          </View> */}
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
              fontWeight: 'bold',
              marginTop: 40,
              color: 'black',
            }}>
            select Age Group
          </Text>
          <View
            style={{
              height: 50,
              width: 380,
              marginLeft: 5,
              backgroundColor: 'white',
              borderColor: 'black',
              marginTop: 20,
              borderWidth: 1,
            }}>
            <Picker
              style={{borderColor: 'black', borderWidth: 5}}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item label=" Select " value="java" />
              <Picker.Item label="   3 - 6 year old" value="java" />
              <Picker.Item label="   7 - 10 year old" value="js" />
              <Picker.Item label="   11 - 14 year old" value="js" />
              <Picker.Item label="   15 - 16 year old" value="js" />
            </Picker>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('PaymentDetail')}>
            <View
              style={{
                height: 50,
                width: 150,
                backgroundColor: 'lightblue',
                marginLeft: 200,
                marginTop: 60,
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

  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red',
  },
});
export default AgeGroupscreen;
