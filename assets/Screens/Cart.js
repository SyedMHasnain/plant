import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useContext} from 'react';
import LottieView from 'lottie-react-native';
import {Globalinfo} from '../../App';
import {
  Econ,
  colors,
  scale,
  verticalScale,
  moderateScale,
} from '../Imports/globalImports';
import Navbar, {Nav} from '../components/Navbar';
const Cart = ({route}) => {
  const { cartCount} = useContext(Globalinfo);
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.Nav}>
        <Nav />
      </View>

      {/* If Items is not in cart */}
      {cartCount > 0 ? (
        //  cartConmtainer
        <View style={styles.cartitemWrapper}>
          {/* Image */}
          <View style={styles.imgreapper}>
            <Image source={item.image} style={styles.img} />
          </View>
          {/* TExt */}
          <View style={styles.title}>
            <Text style={styles.cartitemtxt}>{item.title}</Text>
            <Text style={styles.cartitemtxt}>$ {item.price}</Text>
            <Text style={styles.cartitemtxt}>{item.sizeNumber}" Inches</Text>
          </View>
          <View style={{marginLeft: moderateScale(68)}}>
            <Econ
              style={{}}
              name="delete-outline"
              size={28}
              color={colors.primary}
            />
          </View>
        </View>
      ) : (
        //  cartConmtainer End
        <View style={{flex: 1, marginTop: 90, alignItems: 'center'}}>
          <LottieView
            style={{
              width: scale(200),
              height: verticalScale(200),
              transform: [{scaleX: -1}],
            }}
            source={require('../images/Animation - plant.json')}
            autoPlay
            loop
          />
          <Text
            style={{
              color: colors.black,
              fontSize: 29,
              fontFamily: 'Montserrat-Regular',
            }}>
            Your Cart is Empty
          </Text>
        </View>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  cartitemWrapper: {
    margin: 10,
    // backgroundColor: colors.primary,
    flexDirection: 'row',
    // borderRadius:20,
    // borderWidth: 1,
    height: verticalScale(100),
    width: scale(300),
  },
  title: {
    justifyContent: 'center',
  },
  img: {
    backgroundColor:colors.primary,
    borderRadius: 20,
    width: scale(90),
    height: verticalScale(100),
    marginRight:10,
  },
  Text: {
    fontSize: moderateScale(20),
    fontFamily: 'Montserrat-Bold',
    color: colors.catcolor,
  },
  cartitemtxt: {
    fontSize: moderateScale(18),
    fontFamily: 'Montserrat-Regular',
    color: colors.black,
  },
});
