import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import LottieView from 'lottie-react-native';
import {Globalinfo} from '../../App';
import {
 
  colors,
  scale,
  verticalScale,
  moderateScale,
  Icon
} from '../Imports/globalImports';
import Navbar, {Nav} from '../components/Navbar';

const Cart = ({route}) => {
  const {cartCount , setCartCount, api} = useContext(Globalinfo);
  const {item} = route.params;

 const removeitem = () =>
   cartCount > 1 ? setCartCount(cartCount - 1) : setCartCount(0);

  return (
    <View style={styles.container}>
      <View style={styles.Nav}>
        <Nav />
      </View>

      {/* If Items is not in cart */}
      {cartCount > 0 ? (
        //  cartContainer
        <View style={styles.cartitemWrapper}>
          {/* Image */}
          <View style={styles.imgreapper}>
            <Image source={item.image } style={styles.img} />
          </View>
          {/* TExt */}
          <View style={styles.title}>
            <Text style={styles.cartitemtxt}>{item.title}</Text>
            <Text style={styles.cartitemtxt}>$ { item.price * cartCount }</Text>
            <Text style={styles.cartitemtxt}>{item.sizeNumber}" Inches</Text>
          </View>

          <View style={{marginLeft: moderateScale(68)}}>
            {/* PLus */}
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => setCartCount(cartCount + 1)}
              style={styles.AddCart}>
              <Icon  name="add" size={20} color={colors.Dgreen} />
            </TouchableOpacity>
            {/* Counts  */}

            <Text style={{color: colors.black, fontSize: 16 , marginLeft: moderateScale(5), marginTop:moderateScale(5)}}>
            
            {cartCount }
            </Text>

            {/* minus */}
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={removeitem}
              style={styles.AddCart}>
              <Icon name="remove" size={20} color={colors.Dgreen} />
            </TouchableOpacity>
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
  AddCart: {
    width: scale(20),
    height: verticalScale(20),
    backgroundColor: colors.primary,
    marginTop: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartitemWrapper: {
    margin: moderateScale(20),
    backgroundColor: colors.white,
    flexDirection: 'row',
     borderRadius:20,
    height: verticalScale(100),
    width: scale(300),
  },
  title: {
    justifyContent: 'center',
  },
  img: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    width: scale(90),
    height: verticalScale(100),
    marginRight: 10,
  },
  Text: {
    fontSize: moderateScale(20),
    fontFamily: 'Montserrat-Bold',
    color: colors.catcolor,
  },
  Plus: {
    marginTop: moderateScale(15),
  },
  cartitemtxt: {
    fontSize: moderateScale(15),
    fontFamily: 'Montserrat-Regular',
    color: colors.black,
  },
});
