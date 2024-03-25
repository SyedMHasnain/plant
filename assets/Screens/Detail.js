import {Image, StyleSheet, Text, View, } from 'react-native';
import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {Nav} from '../components/Navbar';
import {
  colors,
  scale,
  verticalScale,
  Animatable,
} from '../Imports/globalImports';
import { Globalinfo } from '../../App';

const Detail = ({navigation, route}) => {
  const {item} = route.params;

  const {cartCount ,setCartCount} = useContext(Globalinfo);

  // const removeitem = () =>
  //   cartCount > 1 ? setCartCount(cartCount - 1) : setCartCount(0);

   const addcart = () => {
        setCartCount(cartCount + 1)
      navigation.navigate('Cart', {item: item});
  
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
      </View>
      <Animatable.View animation="fadeInUp" delay={450}>
        <View style={styles.addcartbtn}>
          <TouchableOpacity
            activeOpactiy={0.7}
            style={styles.addtocart}
            onPress={addcart}>
            <Text style={styles.text}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
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
    width: scale(220),
    height: verticalScale(300),
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
    backgroundColor: '#99BC85',
    padding: 10,
    width: scale(280),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 10,
  },
  
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
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
