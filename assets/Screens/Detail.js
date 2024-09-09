import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {Nav} from '../components/Navbar';
import {
  colors,
  scale,
  verticalScale,
  Animatable,
  moderateScale,
} from '../Imports/globalImports';
import {Globalinfo} from '../../App';

const Detail = ({navigation, route}) => {

  const {item} = route.params;
  // const handeladdtocart =(item)=>{
  //   addtocart(item);
  //   navigation.navigate('Cart')
  // }

  const {cartCount, setCartCount, addtocart, productdata} =
    useContext(Globalinfo);

  const handleaddcart = item => {
    addtocart(item);
    setCartCount(cartCount + 1);
    navigation.navigate('Cart', {item});
  };

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Nav />
      </View>
      {/* Body */}

      <View style={styles.imagewrapper}>
        <Image source={item.image} style={styles.img} />
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
      <Animatable.View animation="fadeInUp" delay={10}>
        <View style={styles.addcartbtn}>
          <TouchableOpacity
            activeOpactiy={0.7}
            style={styles.addtocart}
            onPress={() => handleaddcart(item)}>
            <Text style={styles.text}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background, // Set a background color
  },
  // Detail Text
  textdetail: {
    color: colors.black,
    paddingTop: verticalScale(10),
    paddingLeft: moderateScale(20),
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(14),
  },
  priceheading: {
    fontFamily: 'Montserrat-Regular',
    color: colors.black,
    fontSize: moderateScale(20),
  },

  imagewrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Image styling
  img: {
    width: scale(230),
    height: verticalScale(300),
    resizeMode: 'contain', // Ensure the image scales without distortion
    borderRadius: moderateScale(10), // Slight rounding for a modern look
  },
  Headingtext: {
    fontFamily: 'Montserrat-Bold',
    color: colors.black,
    fontSize: moderateScale(30),
    paddingLeft: moderateScale(15),
  },

  // Price Section
  prices: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    marginVertical: verticalScale(10),
  },
  text: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.black,
    fontSize: moderateScale(20),
  },
  // Add to Cart Button
  addtocart: {
    backgroundColor: '#99BC85',
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(40), // Increased width for better visual balance
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(20),
    marginTop: verticalScale(10),
  },
  // Button container
  addcartbtn: {
    marginBottom: verticalScale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

