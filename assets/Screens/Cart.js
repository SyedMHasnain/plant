import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import {
  ALERT_TYPE,
  Dialog,
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
                  marginLeft: moderateScale(5),
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
          // onPress={() =>
          // Dialog.show({
          //   type: ALERT_TYPE.SUCCESS,
          //   title: 'Success',
          //   textBody: 'Congrats!Your Order Is Placed ',
          //   button: 'close',})}
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
  },
  // navbar
  iconhead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  Header: {
    paddingTop: 15,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  HeaderTilteBack: {
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  TitleHeading: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 25,
    color: colors.textDark,
  },
  SubheadingWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
    width: scale(210),
    height: verticalScale(110),
  },
  Subheading: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.textDark,
    fontSize: 28,
  },
  //nabvbar end

  AddCart: {
    width: scale(20),
    height: verticalScale(20),
    backgroundColor: colors.primary,
    marginTop: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CheckOut: {
    flex: 1,
    position: 'absolute',
    bottom: '6%',
    left: '8%',
    borderRadius: 10,
    width: moderateScale(280),
    height: verticalScale(30),
    backgroundColor: '#99BC85',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CheckOuttxt: {
    color: colors.textDark,
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
  },
  cartitemWrapper: {
    margin: moderateScale(20),
    backgroundColor: colors.white,
    flexDirection: 'row',
    borderRadius: 20,
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
