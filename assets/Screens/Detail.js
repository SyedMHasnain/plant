import { Image, StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../theme/colors';
import { TouchableOpacity } from 'react-native';

const Detail = ({route}) => {

  const { item }= route.params;

 
  // console.log(item)
  return (
    <View style={styles.container}>
      {/* HEader */}

      <View style={styles.iconhead}>
        <Icon name="chevron-back" size={30} color={colors.black} />
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
            <Text style={styles.priceheading}>Price</Text>
          </View>
          

          <View>
            <Text style={styles.text}>$ {item.price}</Text>
          </View>
          <View>
            <TouchableOpacity
            activeOpactiy={0.7}
            style={styles.addtocart}>
              <Text style={styles.text}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Detail

const styles = StyleSheet.create({
  textdetail: {
    color: colors.black,
    paddingTop: 30,
    paddingLeft: 20,
    fontFamily: 'Montserrat-Regular',
  },
  priceheading: {
    marginTop: 5,
    fontFamily: 'Montserrat-Regular',
    color: colors.black,
    fontSize: 20,
    paddingLeft: 20,
  },

  imagewrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 20,
  },
  iconhead: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: 10,
  },
  container: {
    flex: 1,
  },

  img: {
    width: 250,
    height: 300,
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
    paddingLeft: 20,
    
  },

  addtocart: {
    backgroundColor: colors.primary,
    padding: 10,
    width: 280,
    marginHorizontal: 50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 20,
    marginTop: 10,
  },
  
});