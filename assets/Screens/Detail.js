import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {Nav} from '../components/Navbar';
import { colors, Icon, Incon } from '../Imports/globalImports';

const Detail = ({navigation, route}) => {
  const {item} = route.params;
  const [cartCount, setCartCount] = useState(0);

  const removeitem = () =>
    cartCount > 1 ? setCartCount(cartCount - 1) : setCartCount(0);

  const addcart = () => {
    if (cartCount < 1) {
      console.log(' Cart is Empty ');
    } else {
      navigation.navigate('Cart');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Nav />
      </View>
      {/* Body */}

      <View style={styles.imagewrapper}>
        <Image style={styles.img} source={item.image} />
      </View>
      {/* Footer */}

      <View style={styles.FooterWrapper}>
        <View style={styles.DeatilWrapper}>
          <Text style={styles.Headingtext}>{item.title}</Text>
          <View>
            <Text style={styles.textdetail}>{item.details}</Text>
          </View>
        </View>
      </View>
      <View style={styles.prices}>
        {/* Price */}
        <View>
          <Text style={styles.priceheading}>Price</Text>
          <Text style={styles.text}>$ {item.price}</Text>
        </View>
        {/* PriceEnd  */}

        {/* Quantiyty Counter */}
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
                onPress={() => setCartCount(cartCount + 1)}
                style={styles.AddCart}>
                <Icon name="add" size={17} color={colors.white} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Quantiyty Counter */}
      </View>
      <View style={styles.addcartbtn}>
        <TouchableOpacity
          activeOpactiy={0.7}
          style={styles.addtocart}
          onPress={addcart}>
          <Text style={styles.text}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  textdetail: {
    color: colors.black,
    paddingTop: 10,
    paddingLeft: 20,
    fontFamily: 'Montserrat-Regular',
  },
  priceheading: {
    fontFamily: 'Montserrat-Regular',
    color: colors.black,
    fontSize: 20,
  },

  imagewrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconhead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    margin: 10,
  },
  container: {
    flex: 1,
  },

  img: {
    width: scale(300),
    height: verticalScale(210),
  },
  Headingtext: {
    fontFamily: 'Montserrat-Bold',
    color: colors.black,
    fontSize: 30,
    paddingLeft: 15,
  },

  prices: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    marginTop: 10,
  },
  text: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.black,
    fontSize: 20,
  },
  cartQuantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginTop: 5,
  },

  addtocart: {
    backgroundColor: colors.primary,
    padding: 10,
    width: scale(280),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 10,
  },
  counterWrapper: {},
  AddCart: {
    width: scale(20),
    height: verticalScale(20),
    backgroundColor: colors.BtnColor,
    marginTop: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addcartbtn: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
