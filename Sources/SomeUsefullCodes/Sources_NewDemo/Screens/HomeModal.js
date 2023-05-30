import React, { useState } from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button, DropDown } from '../Common';
import { hp, normalize, wp } from '../ResponsiveNess/ResponsiveNess';

const HomeModal = props => {
  const { open, close } = props;

  const [SegmentOpen, setSegmentOpen] = useState(false);
  const [SegmentValue, setSegmentValue] = useState(null);
  const [SegmentItems, setSegmentItems] = useState([
    { label: 'MCXFUL', value: 'MCXFUL' },
    { label: 'NSCFUL', value: 'NSCFUL' },
    { label: 'NSCOPT', value: 'NSCOPT' },
  ]);

  const [ScriptOpen, setScriptOpen] = useState(false);
  const [ScriptValue, setScriptValue] = useState(null);
  const [ScriptItems, setScriptItems] = useState([
    { label: 'MCXFUL', value: 'MCXFUL' },
    { label: 'NSCFUL', value: 'NSCFUL' },
    { label: 'NSCOPT', value: 'NSCOPT' },
  ]);

  const [ClientOpen, setClientOpen] = useState(false);
  const [ClientValue, setClientValue] = useState(null);
  const [ClientItems, setClientItems] = useState([
    { label: 'MCXFUL', value: 'MCXFUL' },
    { label: 'NSCFUL', value: 'NSCFUL' },
    { label: 'NSCOPT', value: 'NSCOPT' },
  ]);

  return (
    <Modal
      animationType="fade"
      visible={open}
      transparent={true}
      onRequestClose={close}>
      <View style={styles.containerMainView}>
        <View style={styles.containerView}>
          {/* Filters */}
          <View style={styles.FilterMainView}>
            <Text style={styles.FilterText}>Filter</Text>

            <TouchableOpacity
              onPress={close}
              style={{ width: wp(5), height: wp(5) }}>
              <Image
                source={require('../Assets/Icons/Cross.png')}
                resizeMode="contain"
                style={{ width: '100%', height: '100%', tintColor: '#000' }}
              />
            </TouchableOpacity>
          </View>

          {/* DropDowns */}
          <View>
            <DropDown
              title={'Segment'}
              placeholder={'Select Segment'}
              open={SegmentOpen}
              value={SegmentValue}
              items={SegmentItems}
              setOpen={setSegmentOpen}
              setValue={setSegmentValue}
              setItems={setSegmentItems}
              zIndex={30}
            />
            <DropDown
              title={'Script'}
              placeholder={'Select Script'}
              open={ScriptOpen}
              value={ScriptValue}
              items={ScriptItems}
              setOpen={setScriptOpen}
              setValue={setScriptValue}
              setItems={setScriptItems}
              zIndex={20}
            />
            <DropDown
              title={'Client'}
              placeholder={'Select Client'}
              open={ClientOpen}
              value={ClientValue}
              items={ClientItems}
              setOpen={setClientOpen}
              setValue={setClientValue}
              setItems={setClientItems}
              zIndex={10}
            />
          </View>

          {/* Buttons */}
          <View style={styles.BtnMainView}>
            <Button
              onPress={close}
              title={'Close'}
              containerStyle={{
                marginRight: wp(5),
                backgroundColor: '#F7FAFC',
              }}
            />
            <Button
              title={'Filter'}
              icon={require('../Assets/Images/Filter.png')}
              containerStyle={{ backgroundColor: '#5E72E4' }}
              textStyle={{ color: '#fff', marginLeft: wp(2) }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default HomeModal;

const styles = StyleSheet.create({
  containerMainView: {
    flex: 1,
    backgroundColor: '#00000050',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerView: {
    width: wp(90),
    backgroundColor: '#fff',
    borderRadius: wp(3),
    padding: wp(3),
  },
  FilterMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(3),
    paddingVertical: wp(1),
  },
  FilterText: {
    fontSize: normalize(22),
    fontWeight: '600',
    color: '#000',
  },
  DropDownContainer: {
    marginTop: hp(2),
    width: '95%',
    alignSelf: 'center',
  },
  DropDownText: {
    fontSize: normalize(18),
    paddingBottom: hp(1),
  },
  BtnMainView: {
    zIndex: -1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(3),
    justifyContent: 'flex-end',
    width: wp(80),
  },
  Btns: {
    backgroundColor: '#ff0000',
  },
});
