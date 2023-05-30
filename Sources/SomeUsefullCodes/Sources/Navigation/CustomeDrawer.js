import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Image,
  Text,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {normalize} from '../ResponsiveNess/ResponsiveNess';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const {width, height} = Dimensions.get('screen');

const CustomeDrawer = props => {
  const [isEnabled, setisEnabled] = useState(false);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={{backgroundColor: '#fff', height: height * 0.2}}>
          <TouchableOpacity
            style={styles.CrossIcon}
            onPress={() => props.navigation.closeDrawer()}>
            {/* <Image
              source={require('../Assets/Images/Icons/Cross.png')}
              resizeMode="contain"
              style={styles.Images}
            /> */}
            <FontAwesome5 name="times" size={width * 0.05} color={'#000'} />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              marginTop: width * 0.03,
              marginHorizontal: width * 0.03,
            }}>
            <Image
              source={require('../Assets/Images/UserImages/User_1.jpeg')}
              resizeMode="contain"
              style={{
                width: width * 0.25,
                height: width * 0.25,
                borderRadius: 100,
              }}
            />
            <View
              style={{
                flex: 1,
                paddingLeft: width * 0.02,
                paddingVertical: width * 0.05,
              }}>
              <Text
                style={{
                  fontSize: normalize(16),
                  fontFamily: 'Ambit-BoldItalic',
                }}>
                {'Julian Wan'}
              </Text>
              <Text
                style={{
                  fontSize: normalize(12),
                  color: '#00000060',
                  marginTop: width * 0.01,
                  fontFamily: 'ambit-italic',
                }}>
                {'Software Developer'}
              </Text>
            </View>
          </View>
        </View>

        <DrawerItemList {...props} />

        <DrawerItem
          label={'Rate us'}
          labelStyle={{marginLeft: -width * 0.04}}
          onPress={() => console.log('Hello world')}
          icon={({color, size}) => (
            <FontAwesome5 name="comments" size={size} color={color} />
          )}
        />
      </DrawerContentScrollView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginVertical: width * 0.03,
        }}>
        <Text style={{fontSize: normalize(16)}}>Dark Mode</Text>
        <Switch
          trackColor={{false: '#00000050', true: '#55cd56'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          thumbColor={'#fff'}
          ios_backgroundColor="#fff"
          onValueChange={() => {
            setisEnabled(!isEnabled);
            console.log('Value Changed');
          }}
          value={isEnabled}
        />
      </View>

      <View
        style={{
          backgroundColor: '#0f238a',
          alignItems: 'center',
          flex: 0.2,
        }}
      />
    </View>
  );
};

export default CustomeDrawer;

const styles = StyleSheet.create({
  Images: {
    width: '100%',
    height: '100%',
  },
  CrossIcon: {
    width: width * 0.05,
    height: width * 0.05,
    alignSelf: 'flex-end',
    marginRight: width * 0.03,
    marginTop: width * 0.01,
  },
});
