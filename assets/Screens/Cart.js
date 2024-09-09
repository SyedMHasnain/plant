import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  ALERT_TYPE,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';

import React, {useContext, useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {Globalinfo} from '../../App';
import {
  colors,
  scale,
  verticalScale,
  moderateScale,
  Icon,
} from '../Imports/globalImports';

const Cart = ({route, navigation}) => {
  const {cartCount, setCartCount, productdata} = useContext(Globalinfo);
  const {item} = route.params;

  const removeitem = () =>
    cartCount > 1 ? setCartCount(cartCount - 1) : setCartCount(0);

  return (
    <View style={styles.container}>
      <View>
        {/* Navbar */}
        <View style={styles.Nav}>
          <View style={styles.iconhead}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              activeOpacity={0.7}
              style={styles.backicon}>
              <Icon name="chevron-back" size={30} color={colors.black} />
            </TouchableOpacity>
          </View>
        </View>

        {/* If Items is not in cart */}
        {cartCount > 0 ? (
          //  cartContainer
          <View style={styles.cartitemWrapper}>
            {/* Image */}
            <View style={styles.imgreapper}>
              <Image source={item.image} style={styles.img} />
            </View>
            {/* TExt */}

            <View style={styles.title}>
              <Text style={styles.cartitemtxt}>{item.title}</Text>
              <Text style={styles.cartitemtxt}>$ {item.price * cartCount}</Text>
              <Text style={styles.cartitemtxt}>{item.sizeNumber}" Inches</Text>
            </View>

            <View style={{marginLeft: moderateScale(68)}}>
              {/* PLus */}
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => setCartCount(cartCount + 1)}
                style={styles.AddCart}>
                <Icon name="add" size={20} color={colors.Dgreen} />
              </TouchableOpacity>
              {/* Counts  */}

              <Text
                style={{
                  color: colors.black,
                  fontSize: 16,
                  marginLeft: moderateScale(8),
                  marginTop: moderateScale(5),
                }}>
                {cartCount}
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
          //  cartContainer End
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
      {/* Check Out  */}
      <AlertNotificationRoot>
        <TouchableOpacity
          activeOpactiy={0.7}
          onPress={() =>
            Toast.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Success',
              textBody: 'Congrats! Your Order Is Placed',
            })
          }
          style={styles.CheckOut}>
          <View>
            <Text style={styles.CheckOuttxt}>Check Out</Text>
          </View>
        </TouchableOpacity>
      </AlertNotificationRoot>
      {/* Check out End  */}
    </View>
  );
};

export default Cart;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background, // Set a background color
  },
  // Navbar styles
  iconhead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  // Cart Item Wrapper
  cartitemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: moderateScale(20),
    backgroundColor: colors.white, // Set a background color
    borderRadius: 20,
    padding: moderateScale(10),  // Added padding for better spacing
  },
  // Image wrapper
  imgreapper: {
    flex: 1, // Take up equal space
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: scale(90),
    height: verticalScale(100),
    borderRadius: 10, 
  },
  // Title & Price Wrapper
  title: {
    flex: 2, // Take more space to accommodate text
    justifyContent: 'space-between', // Space out text items
    paddingLeft: moderateScale(10),
  },
  cartitemtxt: {
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Regular',
    color: colors.black,
  },
  // Plus/Minus Button Wrapper
  controlWrapper: {
    flex: 1, // Adjust according to content size
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', // Align controls vertically
  },
  AddCart: {
    width: scale(30), // Increase size for better tap target
    height: verticalScale(30),
    backgroundColor: colors.primary,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScale(5),
  },
  // CheckOut Button
  CheckOut: {
    position: 'absolute',
    bottom: '6%',
    left: '8%',
    borderRadius: 10,
    width: '85%', // Adjust width to fit different screen sizes
    height: verticalScale(40), // Slightly larger button for better tap experience
    backgroundColor: '#99BC85',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CheckOuttxt: {
    color: colors.textDark,
    fontSize: moderateScale(18), // Slightly smaller for consistency
    fontFamily: 'Montserrat-SemiBold',
  },
});

