import { Image, ScrollView, StyleSheet, Text, Touchable, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../theme/colors';
import { TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


  const Detail = ({navigation,route}) => {
    const {item} = route.params ;
    const [cartCount, setCartCount] = useState(0)
    const removeitem = ()=>(
      cartCount > 0 ? setCartCount(cartCount - 1) : setCartCount(0) 
    )
  return (
    <View style={styles.container}>
    
      {/* HEader */}

      <View style={styles.iconhead}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
          style={styles.backicon}>
          <Icon name="chevron-back" size={30} color={colors.black} />
        </TouchableOpacity>

        <Icon name="heart" size={30} color="red" />
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 20,
          marginTop: 10,
        }}>
        {/* Price */}
        <View >
          <Text style={styles.priceheading}>Price</Text>
          <Text style={styles.text}>$ {item.price}</Text>
        </View>
        {/* PriceEnd  */}

        {/* Quantiyty Counter */}
        <View >
          <Text style={styles.text}>Quantity</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 10,
              marginTop: 5,
            }}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={removeitem}
              style={styles.AddCart}>
              <Icon name="remove" size={17} color={colors.white} />
            </TouchableOpacity>
            <Text style={{color: colors.black, fontSize: 16}}>{cartCount}</Text>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => setCartCount(cartCount + 1)}
              style={styles.AddCart}>
              <Icon name="add" size={17} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Quantiyty Counter */}
      </View>
      <View style={styles.addcartbtn}>
        <TouchableOpacity activeOpactiy={0.7} style={styles.addtocart}

        onPress={()=>navigation.navigate("Cart",)}>

          <Text style={styles.text}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

};

export default Detail

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
    flex:1,
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
    width: "80%",
    height: "80%",
  },
  Headingtext: {
    fontFamily: 'Montserrat-Bold',
    color: colors.black,
    fontSize: 30,
    paddingLeft: 15,
  },
  text: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.black,
    fontSize: 20,
    
  },

  addtocart: {
    backgroundColor: colors.primary,
    padding: 10,
    width: 280,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 10,
  },
  AddCart: {
    width: 20,
    height: 20,
    marginLeft: 10,
    backgroundColor: colors.BtnColor,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addcartbtn:{
    marginBottom:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});