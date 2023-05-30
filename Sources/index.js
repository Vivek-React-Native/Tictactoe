import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import {
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import Config from 'react-native-config';
import { Colors } from './Constants';
import { AllScreens } from '../AppNavigation';
import ReAnimated, { SlideInLeft } from 'react-native-reanimated';

const Sources = ({ navigation }) => {
  const Indicator = useRef(new Animated.Value(0)).current;
  const [WholeHeight, setWholeHeight] = useState(1);
  const [VisibleHeight, setVisibleHeight] = useState(0);
  const indicatorSize =
    WholeHeight > VisibleHeight
      ? (VisibleHeight * VisibleHeight) / WholeHeight
      : VisibleHeight;
  const difference =
    VisibleHeight > indicatorSize ? VisibleHeight - indicatorSize : 1;
  const translateY = Animated.multiply(
    Indicator,
    VisibleHeight / WholeHeight,
  ).interpolate({
    inputRange: [0, difference],
    outputRange: [0, difference],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    // console.log('env -> ', Config);
  }, []);

  return (
    <SafeAreaView style={styles.Container}>
      <View style={{ flex: 1 }}>
        <Animated.FlatList
          data={AllScreens}
          keyExtractor={(v, index) => String(index)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <RenderItem item={item} index={index} navigation={navigation} />
          )}
          onContentSizeChange={(width, height) => setWholeHeight(height)}
          onLayout={({
            nativeEvent: {
              layout: { x, y, width, height },
            },
          }) => setVisibleHeight(height)}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: Indicator } } }],
            { useNativeDriver: true },
          )}
        />

        <Animated.View
          style={[
            styles.indicator,
            { height: indicatorSize, transform: [{ translateY: translateY }] },
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  renderItemContainer: {
    borderWidth: 1,
    borderColor: Colors.ACACAC,
    marginHorizontal: 15,
    marginVertical: 15,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowColor: Colors.Black,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    backgroundColor: Colors.White,
    elevation: 7,
  },
  renderItem: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  Text: {
    color: Colors.Black,
  },
  indicator: {
    width: 7,
    backgroundColor: Colors.Red,
    position: 'absolute',
    right: 0,
  },
});
const RenderItem = ({ item, index, navigation }) => {
  return (
    <ReAnimated.View
      style={{ ...styles.renderItemContainer }}
      entering={SlideInLeft.delay(index * 50)}>
      <TouchableOpacity
        onPress={() => navigation.navigate(item.name)}
        style={styles.renderItem}>
        <Text style={styles.Text}>{item.name}</Text>
      </TouchableOpacity>
    </ReAnimated.View>
  );
};
export default Sources;
