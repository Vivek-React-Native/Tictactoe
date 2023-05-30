import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  SectionList,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { RNStyles, RNText } from '../../Common';
import { Colors, FontSize, hp, Images, isIOS, wp } from '../../Constants';
import { Functions } from '../../Utils';

const CornerRadius = wp(4);

const OverlapingVertical = () => {
  return (
    <View style={styles.Container}>
      <SectionList
        sections={DummayData}
        keyExtractor={(v, i) => String(i)}
        style={styles.SectionListStyle}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={true} // for android
        renderSectionHeader={({ section: { title } }) => (
          <RenderTitle title={title} />
        )}
        renderItem={({ item }) => <RenderItem list={item.list} />}
      />
    </View>
  );
};

const RenderTitle = ({ title }) => {
  const backgroundColor = React.useMemo(() => Functions.RandomColor(), []);
  return (
    <View style={[styles.TitleView, { backgroundColor: Colors.LightBlue }]}>
      <RNText style={styles.title}>{title}</RNText>
    </View>
  );
};

const RenderItem = ({ list }) => {
  return (
    <View style={styles.GridContainer}>
      <FlatList
        data={list}
        keyExtractor={(v, i) => String(i)}
        numColumns={2}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.RenderItemsView,
              {
                backgroundColor:
                  index % 2 === 0 ? Colors.Orange : Colors.Purple,
              },
            ]}>
            <Image
              source={item.image}
              resizeMode={'cover'}
              style={styles.image}
            />
            <RNText style={styles.RenderText}>{item.name}</RNText>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    ...RNStyles.container,
  },
  SectionListStyle: {
    width: wp(95),
    alignSelf: 'center',
    borderTopLeftRadius: CornerRadius,
    borderTopRightRadius: CornerRadius,
    marginTop: isIOS ? hp(7) : hp(2),
  },
  TitleView: {
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(3),
    borderTopLeftRadius: wp(4),
    borderTopRightRadius: wp(4),
    overflow: 'hidden',
  },
  title: {
    fontWeight: 'bold',
    fontSize: wp(5),
  },
  GridContainer: {
    borderWidth: 2,
    borderTopWidth: 0,
    marginBottom: hp(2),
    borderColor: Colors.LightBlue,
    borderBottomLeftRadius: CornerRadius,
    borderBottomRightRadius: CornerRadius,
  },
  RenderItemsView: {
    flex: 1,
    height: hp(20),
    marginVertical: hp(2),
    marginHorizontal: wp(2),
  },
  image: {
    width: '85%',
    height: '80%',
    top: -hp(1),
    alignSelf: 'center',
  },
  RenderText: {
    fontSize: FontSize.font18,
    textAlign: 'center',
    bottom: hp(1),
    color: Colors.White,
  },
});

const Subjects = [
  { name: 'Account', image: Images.im_pencil },
  { name: 'Stat', image: Images.img_Bike },
  { name: 'Eco', image: Images.img_Car },
  { name: 'BA', image: Images.img_Orange },
];

const DummayData = [
  {
    title: 'Subject 1',
    data: [{ list: Subjects }],
  },
  {
    title: 'Subject 2',
    data: [{ list: Subjects }],
  },
  {
    title: 'Subject 3',
    data: [{ list: Subjects }],
  },
  {
    title: 'Subject 4',
    data: [{ list: Subjects }],
  },
  {
    title: 'Subject 5',
    data: [{ list: Subjects }],
  },
  {
    title: 'Subject 6',
    data: [{ list: Subjects }],
  },
  {
    title: 'Subject 7',
    data: [{ list: Subjects }],
  },
  {
    title: 'Subject 8',
    data: [{ list: Subjects }],
  },
  {
    title: 'Subject 9',
    data: [{ list: Subjects }],
  },
  {
    title: 'Subject 10',
    data: [{ list: Subjects }],
  },
];

export default OverlapingVertical;
