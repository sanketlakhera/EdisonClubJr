import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const ChallengeScreen = ({navigation}) => {
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
      <ScrollView>
        <View style={style.container}>
          <View style={style.header}></View>
          {Object.entries(dimensions.screen).map(([key, value]) => (
            <View>{/* {key} - {value} */}</View>
          ))}
        </View>
        {/* <View>
        <Text>hel</Text>
        <Image
          style={style.menu}
          source={{
            uri: 'https://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg',
          }}
        />
      </View> */}
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{height: 50, width: 50}}
            source={{
              uri: 'https://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg',
            }}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              style={{
                height: 50,
                width: 50,
                borderRadius: 100,
                marginright: 60,
                marginLeft: 270,
              }}
              source={{
                uri: 'https://tse3.mm.bing.net/th?id=OIP.PztowP3ljup0SM75tkDimQHaHa&pid=Api&P=0',
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            // justifyContent: 'space-around',
            // flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 3,
            backgroundColor: 'lightblue',
            borderColor: 'lightblue',
            textAlign: 'center',
            height: 17520,
            // marginTop: 20,
          }}>
          <View>
            <View
              style={{
                // justifyContent: 'space-around',
                // flexDirection: 'row',
                borderWidth: 1,
                borderRadius: 3,
                backgroundColor: 'white',
                borderColor: 'lightblue',
                // textAlign: 'center',
                height: 400,
                marginTop: 10,
                marginLeft: 10,
                marginRight: 10,
                width: 370,
              }}>
              <View
                style={{
                  borderWidth: 1,

                  borderRadius: 3,
                  backgroundColor: 'white',
                  borderColor: 'white',
                  // textAlign: 'center',
                  // marginTop: 5,
                  elevation: 20,
                  height: 45,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    style={{
                      height: 35,
                      width: 35,
                      // borderRadius: 100,
                      marginLeft: 10,
                      marginTop: 3,
                      borderRadius: 100,
                    }}
                    source={{
                      uri: 'https://tse3.mm.bing.net/th?id=OIP.PztowP3ljup0SM75tkDimQHaHa&pid=Api&P=0',
                    }}
                  />
                  <Text
                    style={{marginRight: 140, color: 'black', marginTop: 7}}>
                    EdisionClubJR
                  </Text>
                  <Image
                    style={{
                      height: 25,
                      width: 25,
                      // borderRadius: 100,
                      marginRight: 10,
                      marginTop: 7,
                    }}
                    source={{
                      uri: 'https://icon-library.com/images/android-3-dot-menu-icon/android-3-dot-menu-icon-9.jpg',
                    }}
                  />
                </View>
                <Image
                  style={{
                    height: 320,
                    width: 365,
                    // backgroundColor: 'red',
                  }}
                  source={{
                    uri: 'https://tse2.mm.bing.net/th?id=OIP.PEpf7GETqbiVaTWvEK2sLAHaFj&pid=Api&P=0',
                  }}
                />
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={{height: 20, width: 20}}
                    source={{
                      uri: 'https://tse2.mm.bing.net/th?id=OIP.iw_5iUO-yqfqecKWMon4_gHaHa&pid=Api&P=0',
                    }}
                  />
                  <Text style={{marginLeft: 10}}>
                    Liked by <Text style={{color: 'black'}}>18,290</Text> others
                  </Text>
                  <Image
                    style={{height: 20, width: 20, marginLeft: 150}}
                    source={{
                      uri: 'https://www.kindpng.com/picc/m/153-1537658_twitter-comment-icon-png-clipart-png-download-topic.png',
                    }}
                  />
                </View>
              </View>
            </View>
          </View>

          <View>
            <View
              style={{
                // justifyContent: 'space-around',
                // flexDirection: 'row',
                borderWidth: 1,
                borderRadius: 3,
                backgroundColor: 'white',
                borderColor: 'lightblue',
                // textAlign: 'center',
                height: 400,
                marginTop: 10,
                marginLeft: 10,
                marginRight: 10,
                width: 370,
              }}>
              <View
                style={{
                  borderWidth: 1,

                  borderRadius: 3,
                  backgroundColor: 'white',
                  borderColor: 'white',
                  // textAlign: 'center',
                  // marginTop: 5,
                  elevation: 20,
                  height: 45,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    style={{
                      height: 35,
                      width: 35,
                      // borderRadius: 100,
                      marginLeft: 10,
                      marginTop: 3,
                      borderRadius: 100,
                    }}
                    source={{
                      uri: 'https://tse3.mm.bing.net/th?id=OIP.PztowP3ljup0SM75tkDimQHaHa&pid=Api&P=0',
                    }}
                  />
                  <Text
                    style={{marginRight: 140, color: 'black', marginTop: 7}}>
                    EdisionClubJR
                  </Text>
                  <Image
                    style={{
                      height: 25,
                      width: 25,
                      // borderRadius: 100,
                      marginRight: 10,
                      marginTop: 7,
                    }}
                    source={{
                      uri: 'https://icon-library.com/images/android-3-dot-menu-icon/android-3-dot-menu-icon-9.jpg',
                    }}
                  />
                </View>
                <Image
                  style={{
                    height: 320,
                    width: 365,
                    // backgroundColor: 'red',
                  }}
                  source={{
                    uri: 'https://www.thetravelteam.com/wp-content/uploads/2018/07/group_travel_app.jpg',
                  }}
                />
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={{height: 20, width: 20}}
                    source={{
                      uri: 'https://tse2.mm.bing.net/th?id=OIP.iw_5iUO-yqfqecKWMon4_gHaHa&pid=Api&P=0',
                    }}
                  />
                  <Text style={{marginLeft: 10}}>
                    Liked by <Text style={{color: 'black'}}>18,290</Text> others
                  </Text>
                  <Image
                    style={{height: 20, width: 20, marginLeft: 150}}
                    source={{
                      uri: 'https://www.kindpng.com/picc/m/153-1537658_twitter-comment-icon-png-clipart-png-download-topic.png',
                    }}
                  />
                </View>
              </View>
            </View>
          </View>

          <View>
            <View
              style={{
                // justifyContent: 'space-around',
                // flexDirection: 'row',
                borderWidth: 1,
                borderRadius: 3,
                backgroundColor: 'white',
                borderColor: 'lightblue',
                // textAlign: 'center',
                height: 400,
                marginTop: 10,
                marginLeft: 10,
                marginRight: 10,
                width: 370,
              }}>
              <View
                style={{
                  borderWidth: 1,

                  borderRadius: 3,
                  backgroundColor: 'white',
                  borderColor: 'white',
                  // textAlign: 'center',
                  // marginTop: 5,
                  elevation: 20,
                  height: 45,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    style={{
                      height: 35,
                      width: 35,
                      // borderRadius: 100,
                      marginLeft: 10,
                      marginTop: 3,
                      borderRadius: 100,
                    }}
                    source={{
                      uri: 'https://tse3.mm.bing.net/th?id=OIP.PztowP3ljup0SM75tkDimQHaHa&pid=Api&P=0',
                    }}
                  />
                  <Text
                    style={{marginRight: 140, color: 'black', marginTop: 7}}>
                    EdisionClubJR
                  </Text>
                  <Image
                    style={{
                      height: 25,
                      width: 25,
                      // borderRadius: 100,
                      marginRight: 10,
                      marginTop: 7,
                    }}
                    source={{
                      uri: 'https://icon-library.com/images/android-3-dot-menu-icon/android-3-dot-menu-icon-9.jpg',
                    }}
                  />
                </View>
                <Image
                  style={{
                    height: 320,
                    width: 365,
                    // backgroundColor: 'red',
                  }}
                  source={{
                    uri: 'https://wallpapercave.com/wp/wp2047778.jpg',
                  }}
                />
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={{height: 20, width: 20}}
                    source={{
                      uri: 'https://tse2.mm.bing.net/th?id=OIP.iw_5iUO-yqfqecKWMon4_gHaHa&pid=Api&P=0',
                    }}
                  />
                  <Text style={{marginLeft: 10}}>
                    Liked by <Text style={{color: 'black'}}>18,290</Text> others
                  </Text>
                  <Image
                    style={{height: 20, width: 20, marginLeft: 150}}
                    source={{
                      uri: 'https://www.kindpng.com/picc/m/153-1537658_twitter-comment-icon-png-clipart-png-download-topic.png',
                    }}
                  />
                </View>
              </View>
            </View>
          </View>

          <View>
            <View
              style={{
                // justifyContent: 'space-around',
                // flexDirection: 'row',
                borderWidth: 1,
                borderRadius: 3,
                backgroundColor: 'white',
                borderColor: 'lightblue',
                // textAlign: 'center',
                height: 400,
                marginTop: 10,
                marginLeft: 10,
                marginRight: 10,
                width: 370,
              }}>
              <View
                style={{
                  borderWidth: 1,

                  borderRadius: 3,
                  backgroundColor: 'white',
                  borderColor: 'white',
                  // textAlign: 'center',
                  // marginTop: 5,
                  elevation: 20,
                  height: 45,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    style={{
                      height: 35,
                      width: 35,
                      // borderRadius: 100,
                      marginLeft: 10,
                      marginTop: 3,
                      borderRadius: 100,
                    }}
                    source={{
                      uri: 'https://tse3.mm.bing.net/th?id=OIP.PztowP3ljup0SM75tkDimQHaHa&pid=Api&P=0',
                    }}
                  />
                  <Text
                    style={{marginRight: 140, color: 'black', marginTop: 7}}>
                    EdisionClubJR
                  </Text>
                  <Image
                    style={{
                      height: 25,
                      width: 25,
                      // borderRadius: 100,
                      marginRight: 10,
                      marginTop: 7,
                    }}
                    source={{
                      uri: 'https://icon-library.com/images/android-3-dot-menu-icon/android-3-dot-menu-icon-9.jpg',
                    }}
                  />
                </View>
                <Image
                  style={{
                    height: 320,
                    width: 365,
                    // backgroundColor: 'red',
                  }}
                  source={{
                    uri: 'http://blog.topdeck.travel/wp-content/uploads/2016/11/shutterstock_311342426.jpg',
                  }}
                />
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={{height: 20, width: 20}}
                    source={{
                      uri: 'https://tse2.mm.bing.net/th?id=OIP.iw_5iUO-yqfqecKWMon4_gHaHa&pid=Api&P=0',
                    }}
                  />
                  <Text style={{marginLeft: 10}}>
                    Liked by <Text style={{color: 'black'}}>18,290</Text> others
                  </Text>
                  <Image
                    style={{height: 20, width: 20, marginLeft: 150}}
                    source={{
                      uri: 'https://www.kindpng.com/picc/m/153-1537658_twitter-comment-icon-png-clipart-png-download-topic.png',
                    }}
                  />
                </View>
              </View>
            </View>
          </View>

          <View>
            <View
              style={{
                // justifyContent: 'space-around',
                // flexDirection: 'row',
                borderWidth: 1,
                borderRadius: 3,
                backgroundColor: 'white',
                borderColor: 'lightblue',
                // textAlign: 'center',
                height: 400,
                marginTop: 10,
                marginLeft: 10,
                marginRight: 10,
                width: 370,
              }}>
              <View
                style={{
                  borderWidth: 1,

                  borderRadius: 3,
                  backgroundColor: 'white',
                  borderColor: 'white',
                  // textAlign: 'center',
                  // marginTop: 5,
                  elevation: 20,
                  height: 45,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    style={{
                      height: 35,
                      width: 35,
                      // borderRadius: 100,
                      marginLeft: 10,
                      marginTop: 3,
                      borderRadius: 100,
                    }}
                    source={{
                      uri: 'https://tse3.mm.bing.net/th?id=OIP.PztowP3ljup0SM75tkDimQHaHa&pid=Api&P=0',
                    }}
                  />
                  <Text
                    style={{marginRight: 140, color: 'black', marginTop: 7}}>
                    EdisionClubJR
                  </Text>
                  <Image
                    style={{
                      height: 25,
                      width: 25,
                      // borderRadius: 100,
                      marginRight: 10,
                      marginTop: 7,
                    }}
                    source={{
                      uri: 'https://icon-library.com/images/android-3-dot-menu-icon/android-3-dot-menu-icon-9.jpg',
                    }}
                  />
                </View>
                <Image
                  style={{
                    height: 320,
                    width: 365,
                    // backgroundColor: 'red',
                  }}
                  source={{
                    uri: 'https://tse3.mm.bing.net/th?id=OIP.2unAur3isClWZ8Sp2YT6YQHaE8&pid=Api&P=0',
                  }}
                />
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={{height: 20, width: 20}}
                    source={{
                      uri: 'https://tse2.mm.bing.net/th?id=OIP.iw_5iUO-yqfqecKWMon4_gHaHa&pid=Api&P=0',
                    }}
                  />
                  <Text style={{marginLeft: 10}}>
                    Liked by <Text style={{color: 'black'}}>18,290</Text> others
                  </Text>
                  <Image
                    style={{height: 20, width: 20, marginLeft: 150}}
                    source={{
                      uri: 'https://www.kindpng.com/picc/m/153-1537658_twitter-comment-icon-png-clipart-png-download-topic.png',
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 16,
    marginVertical: 3,
  },

  menu: {
    height: 20,
    weidth: 20,
    color: 'black',
  },
});
export default ChallengeScreen;
