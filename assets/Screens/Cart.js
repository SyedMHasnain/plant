import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
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
  const {cartCount , setCartCount} = useContext(Globalinfo);
  const {item} = route.params;
 const [deleteItem, setDeleteitem] = useState(true)

 const remove_item = ()=> {
  if (deleteItem) {
      // If item is being deleted, decrease cart count
      setCartCount(prevCount => prevCount  == 0);
    } else {
      // If item is being added back, increase cart count
      setCartCount(prevCount => prevCount + 1);
    }
    // Toggle deleteItem state
    // setDeleteitem(prevDelete => !prevDelete);
  }

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

            {/* Quantiyty Counter
        <View>
          <Text style={styles.text}>Quantity</Text>
          <View style={styles.cartQuantity}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={removeitem}
              style={styles.AddCart}>
              <Icon name="remove" size={17} color={colors.white} />
            </TouchableOpacity>
            <Text style={{color: colors.black, fontSize: 19, marginTop: 8}}>
              {cartCount}
            </Text>

            <View style={styles.counterWrapper}>
              <TouchableOpacity
                activeOpacity={0.9}
                // onPress={() => setCartCount(cartCount + 1)}
                style={styles.AddCart}>
                <Icon name="add" size={17} color={colors.white} />
              </TouchableOpacity>
            </View>
          </View>
        </View> */}
            {/* Quantiyty Counter */}
          </View>

          <View style={{marginLeft: moderateScale(68)}}>
            <TouchableOpacity onPress={remove_item}>
              <Econ
                style={{}}
                name="delete-outline"
                size={28}
                color={colors.primary}
              />
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
  cartitemtxt: {
    fontSize: moderateScale(18),
    fontFamily: 'Montserrat-Regular',
    color: colors.black,
  },
});
