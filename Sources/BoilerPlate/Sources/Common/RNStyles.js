import { StyleSheet } from 'react-native';
import { Colors, hp, wp } from '../Constants';
const RNStyles = StyleSheet.create({
  flexCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexRowAround: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  flexRowEvenly: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  width90: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: hp(0.5),
  },
  image100: {
    width: '100%',
    height: '100%',
  },
  image90: {
    width: '90%',
    height: '90%',
  },
  image80: {
    width: '80%',
    height: '80%',
  },
  image70: {
    width: '70%',
    height: '70%',
  },
  image60: {
    width: '60%',
    height: '60%',
  },
  image50: {
    width: '50%',
    height: '50%',
  },
  shadow: {
    shadowOffset: { width: 0, height: 5 },
    shadowColor: Colors.Black,
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,
  },
  imageLoading: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    backgroundColor: Colors.White,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: wp(5),
    height: wp(5),
  },
  devider: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.ACACAC,
  },
});
export default RNStyles;
