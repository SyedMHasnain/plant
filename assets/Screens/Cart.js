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
}
 from '../Imports/globalImports';
import Navbar, { Nav } from '../components/Navbar';

const Cart = ({route}) => {
  const {appcolor, cartCount} = useContext(Globalinfo);
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.Nav}>
        <Nav />
      </View>
      <View style={styles.cartitemWrapper}>
        {/* Image */}
        <View style={styles.imgreapper}>
          <Image source={item.image} style={styles.img} />
        </View>
        {/* TExt */}
        <View style={styles.title}>
          <Text style={styles.cartitemtxt}>{item.title}</Text>
          <Text style={styles.cartitemtxt}>$ {item.price}</Text>
          <Text style={styles.cartitemtxt}>
            Delivery Time {item.deliveryTime} Min
          </Text>
        </View>
        <View style={styles.Deleteicon}>
          <Econ name="delete" size={20} color={colors.black} />
        </View>
      </View>

      {cartCount > 0 ? (
        <Text style={styles.Text}>{item.title}Your Cart Full </Text>
      ) : (
        <LottieView
          style={{
            width: scale(120),
            height: verticalScale(200),
          }}
          source={require('../images/Animation - plant.json')}
          autoPlay
          loop
        />
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
    justifyContent: 'flex-start',
    margin: 20,
    backgroundColor: colors.catcolor,
    flexDirection: 'row',
    borderWidth: 1,
    height: verticalScale(100),
    width: scale(300),
  },
  title: {
    justifyContent: 'center',
  },
  img: {
    width: scale(100),
    height: verticalScale(100),
  },
  Text: {
    fontSize: moderateScale(20),
    fontFamily: 'Montserrat-Bold',
    color: colors.catcolor,
  },
  cartitemtxt: {
    fontSize: moderateScale(13),
    fontFamily: 'Montserrat-Regular',
    color: colors.black,
  },
});
