import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// import Loginpage from '../../../login';

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      {/* <View
        style={{
          flex: 1,
          height: 120,
          width: 30,
          backgroundColor: 'red',
        }}></View> */}
      <ScrollView>
        <View
          style={{
            // justifyContent: 'space-around',
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 3,
            backgroundColor: 'lightblue',
            borderColor: 'lightblue',
            textAlign: 'center',
            height: 180,
          }}>
          <Image
            style={{
              height: 25,
              width: 25,
              // borderRadius: 100,
              marginright: 60,
              marginLeft: 10,
              marginTop: 7,
            }}
            source={{
              uri: 'https://cdn.onlinewebfonts.com/svg/img_272299.png',
            }}
          />
          <Image
            style={{
              height: 25,
              width: 25,
              // borderRadius: 100,
              marginright: 60,
              marginLeft: 300,
              marginTop: 7,
            }}
            source={{
              uri: 'https://cdn.onlinewebfonts.com/svg/img_316859.png',
            }}
          />
        </View>
        <View style={{marginLeft: 75, flexDirection: 'row'}}>
          <Image
            style={{
              height: 130,
              width: 130,
              borderRadius: 100,
              marginTop: -80,
            }}
            source={{
              uri: 'https://tse3.mm.bing.net/th?id=OIP.PztowP3ljup0SM75tkDimQHaHa&pid=Api&P=0',
            }}
          />
          <Text
            style={{marginLeft: 15, bottom: 50, color: 'black', fontSize: 22}}>
            edisonclub
          </Text>
        </View>

        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              borderWidth: 1,
              borderRadius: 3,
              marginTop: 10,
              backgroundColor: 'white',
              borderColor: 'white',
              textAlign: 'center',
              height: 50,
              elevation: 5,
              width: 363,
              marginLeft: 20,
            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                // borderRadius: 100,
                // marginright: 60,
                marginLeft: 20,
                marginTop: 7,
              }}
              source={{
                uri: 'https://tse4.mm.bing.net/th?id=OIP.Ve9O3aNxfOTTEluNI6eiKgHaHa&pid=Api&P=0',
              }}
            />
            <Text style={{marginLeft: 30, marginTop: 10}}>Shots</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              borderWidth: 1,
              borderRadius: 3,
              backgroundColor: 'white',
              borderColor: 'white',
              textAlign: 'center',
              height: 50,
              marginTop: 10,
              elevation: 5,
              width: 363,
              marginLeft: 20,
            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                borderRadius: 100,
                marginright: 60,
                marginLeft: 10,
                marginTop: 7,
              }}
              source={{
                uri: 'https://tse3.mm.bing.net/th?id=OIP.CUp_ZAgqa7D87MgVjZCKRAHaHa&pid=Api&P=0',
              }}
            />
            <Text style={{marginLeft: 30, marginTop: 10}}>Likes</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              borderWidth: 1,
              borderRadius: 3,
              backgroundColor: 'white',
              borderColor: 'white',
              textAlign: 'center',
              height: 50,
              elevation: 5,
              marginTop: 10,
              width: 363,
              marginLeft: 20,
            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                borderRadius: 100,
                marginright: 60,
                marginLeft: 10,
                marginTop: 7,
              }}
              source={{
                uri: 'https://tse4.mm.bing.net/th?id=OIP.xcmCOX3luCN__l15W_YJhQHaHa&pid=Api&P=0',
              }}
            />
            <Text style={{marginLeft: 30, marginTop: 10}}>Tags</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              borderWidth: 1,
              borderRadius: 3,
              backgroundColor: 'white',
              borderColor: 'white',
              textAlign: 'center',
              height: 50,
              marginTop: 10,
              elevation: 5,
              width: 363,
              marginLeft: 20,
            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                borderRadius: 100,
                marginright: 60,
                marginLeft: 10,
                marginTop: 7,
              }}
              source={{
                uri: 'https://tse3.mm.bing.net/th?id=OIP.uv8DuKjIIBSdGCPENzXD6AHaHa&pid=Api&P=0',
              }}
            />
            <Text style={{marginLeft: 30, marginTop: 10}}>basket</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              borderWidth: 1,
              borderRadius: 3,
              backgroundColor: 'white',
              borderColor: 'white',
              textAlign: 'center',
              height: 50,
              marginTop: 10,
              elevation: 5,
              width: 363,
              marginLeft: 20,
            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                borderRadius: 100,
                marginright: 60,
                marginLeft: 10,
                marginTop: 7,
              }}
              source={{
                uri: 'https://tse3.mm.bing.net/th?id=OIP.EyjFrcTRGhxj7X62cgYqbgHaHa&pid=Api&P=0',
              }}
            />
            <Text style={{marginLeft: 30, marginTop: 10}}>Download</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              borderWidth: 1,
              borderRadius: 3,
              backgroundColor: 'white',
              borderColor: 'white',
              textAlign: 'center',
              height: 50,
              marginTop: 10,
              elevation: 5,
              width: 363,
              marginLeft: 20,
            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                borderRadius: 100,
                marginright: 60,
                marginLeft: 10,
                marginTop: 7,
              }}
              source={{
                uri: 'https://tse3.mm.bing.net/th?id=OIP.rKp8NJQIBWUnsotMElUATwHaHa&pid=Api&P=0',
              }}
            />
            <Text style={{marginLeft: 30, marginTop: 10}}>Edit</Text>
          </View>
        </TouchableOpacity>
        {/* <Loginpage /> */}
        {/* <Text>Profile</Text> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
