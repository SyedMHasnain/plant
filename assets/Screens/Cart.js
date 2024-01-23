import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import colors from '../theme/colors';
const Cart = () => {
 
  return (
    <View style={styles.container}>
      <LottieView
        style={{
          width: scale(120),
          height: verticalScale(200),
        }}
        source={require('../images/Animation - plant.json')}
        autoPlay
        loop
      />

      <Text style={styles.Text}>{item.title }Your Cart Is Empty </Text>
    </View>
  );
}

export default Cart

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  Text:{  
    fontSize:moderateScale(20),
    fontFamily:'Montserrat-Bold',
    color:colors.catcolor
  },
});