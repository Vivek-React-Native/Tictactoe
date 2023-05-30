import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { hp, normalize, wp } from '../ResponsiveNess/ResponsiveNess';

const DropDown = props => {
  const {
    title,
    placeholder,
    open,
    value,
    items,
    setOpen,
    setValue,
    setItems,
    zIndex,
    placeholderStyle,
    style,
    arrowIconStyle,
    dropDownContainerStyle,
    selectedItemContainerStyle,
    selectedItemLabelStyle,
    labelStyle,
    mainView,
  } = props;

  return (
    <View style={[styles.DropDownContainer, mainView, { zIndex }]}>
      <Text style={styles.DropDownText}>{title}</Text>

      <DropDownPicker
        placeholder={placeholder}
        placeholderStyle={[styles.placeholderStyle, placeholderStyle]}
        style={[styles.style, style]}
        arrowIconStyle={[styles.arrowIconStyle, arrowIconStyle]}
        dropDownContainerStyle={[
          styles.dropDownContainerStyle,
          dropDownContainerStyle,
        ]}
        selectedItemContainerStyle={[
          styles.selectedItemContainerStyle,
          selectedItemContainerStyle,
        ]}
        selectedItemLabelStyle={[
          styles.selectedItemLabelStyle,
          selectedItemLabelStyle,
        ]}
        labelStyle={[styles.labelStyle, labelStyle]}
        TickIconComponent={() => null}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  DropDownContainer: {
    marginTop: hp(2),
    width: '90%',
    alignSelf: 'center',
  },
  DropDownText: {
    fontSize: normalize(16),
    paddingBottom: hp(1),
  },
  placeholderStyle: {
    fontSize: normalize(16),
    color: '#00000099',
  },
  style: {
    borderWidth: 1,
    borderColor: '#00000040',
    backgroundColor: '#fff',
  },
  dropDownContainerStyle: {
    borderWidth: 1,
    borderColor: '#00000040',
  },
  arrowIconStyle: { tintColor: '#00000060' },
  selectedItemContainerStyle: { backgroundColor: '#5E72E4' },
  selectedItemLabelStyle: { color: '#fff' },
  labelStyle: { fontSize: normalize(16) },
});

// Drop Down With Rupees

// <View style={{ flexDirection: 'row', width: wp(90), alignSelf: 'center' }}>
//   <DropDown
//     title={'Segment'}
//     placeholder={'Select Segment'}
//     open={SegmentOpen}
//     value={SegmentValue}
//     items={SegmentItems}
//     setOpen={setSegmentOpen}
//     setValue={setSegmentValue}
//     setItems={setSegmentItems}
//     mainView={{ width: wp(70) }}
//     zIndex={30}
//   />

//   <View
//     style={{
//       position: 'absolute',
//       bottom: hp(2),
//       right: wp(3),
//     }}>
//     <Text style={{ color: '#11CDEF' }}>0.00 cr</Text>
//   </View>
// </View>;
