import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { wp, hp, normalize } from '../ResponsiveNess/ResponsiveNess';

const CustomeDrawer = props => {
  const [ActiveColor, setActiveColor] = useState(0);

  let DATA = [
    {
      image: require('../Assets/Images/Home.png'),
      name: 'Home',
    },
    {
      image: require('../Assets/Images/MarketWatch.png'),
      name: 'Market Watch',
    },
    {
      image: require('../Assets/Images/OrderBook.png'),
      name: 'Order book',
    },
    {
      image: require('../Assets/Images/TradeBook.png'),
      name: 'Trade Book',
    },
    {
      image: require('../Assets/Images/PositionReport.png'),
      name: 'Position Report',
    },
    {
      image: require('../Assets/Images/Banned.png'),
      name: 'Banned/Blocked Script',
    },
    {
      image: require('../Assets/Images/Max.png'),
      name: 'Max Quantity Details',
    },
    {
      image: require('../Assets/Images/Master.png'),
      name: 'Master',
    },
    {
      image: require('../Assets/Images/Transaction.png'),
      name: 'Transaction',
    },
    {
      image: require('../Assets/Images/Finance.png'),
      name: 'Finance',
    },
    {
      image: require('../Assets/Images/Report.png'),
      name: 'Reports',
    },
    {
      image: require('../Assets/Images/Settings.png'),
      name: 'Settings',
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginHorizontal: wp(3),
      }}>
      <View
        style={{
          marginTop: hp(1),
          paddingBottom: hp(2),
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.closeDrawer()}
          style={styles.BackBtn}>
          <Image
            source={require('../Assets/Icons/Cross.png')}
            resizeMode="contain"
            style={{ width: '100%', height: '100%' }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => console.log('Presssed')}
          style={{
            marginTop: wp(2),
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: wp(4),
            paddingTop: hp(2),
          }}>
          <Image
            source={require('../Assets/Images/User_1.png')}
            resizeMode="contain"
            style={[styles.UserImage, { borderRadius: 100 }]}
          />

          <View style={{ flex: 1, marginLeft: wp(3) }}>
            <Text style={styles.Text}>John Doe</Text>
            <Text
              style={[
                styles.Text,
                { fontWeight: '400', fontSize: normalize(14) },
              ]}>
              Lorem ipsum
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <DrawerContentScrollView
        scrollEnabled={true}
        contentContainerStyle={{ paddingTop: 0 }}
        showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          {DATA.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setActiveColor(index);
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: hp(1.6),
                paddingVertical: hp(1),
                paddingHorizontal: wp(4),
                borderRadius: wp(1.5),
                justifyContent: 'space-between',
                backgroundColor: ActiveColor == index ? '#fff' : 'transparent',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={{
                    width: wp(5),
                    height: wp(5),
                    tintColor: ActiveColor == index ? '#5e72e4' : '#fff',
                  }}
                />
                <Text
                  style={{
                    paddingLeft: wp(3),
                    color: ActiveColor == index ? '#5E72E4' : '#fff',
                  }}>
                  {item.name}
                </Text>
              </View>
              {index > 6 && (
                <Image
                  source={require('../Assets/Icons/DownArrow.png')}
                  resizeMode="contain"
                  style={{
                    width: wp(4),
                    height: wp(4),
                    tintColor: ActiveColor == index ? '#5e72e4' : '#fff',
                  }}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default CustomeDrawer;

const styles = StyleSheet.create({
  BackBtn: {
    width: wp(5),
    height: wp(5),
    marginLeft: wp(1.5),
  },
  UserImage: {
    width: wp(15),
    height: wp(15),
  },
  Text: {
    fontSize: normalize(22),
    color: '#fff',
    fontWeight: 'bold',
  },
});
