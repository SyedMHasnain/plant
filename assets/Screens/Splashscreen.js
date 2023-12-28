import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import colors from '../theme/colors';

const Splashscreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Heading*/}
      <View style={styles.HeadingWrapper}>
        <Text style={styles.Heading}>The Best App For Your Plant </Text>
      </View>
      {/* Image  */}
      <View style={styles.ImageWrapper}>
       
        <Image
          source={require('../images/plant4.png')}
          style={styles.Image}
          resizeMode="contain"
        />
      </View>
      {/* Login Form  */}
      {/* <View style={styles.textInput}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={colors.Dgreen}
        />
      </View>
      <View style={styles.textInput}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={colors.Dgreen}
        />
      </View> */}
      {/* Button  */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        <Text style={styles.buttontext}>Signin</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('')}
        style={styles.button2}>
        <Text style={styles.buttontext2}>Create An Account?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  HeadingWrapper: {
    marginTop: 20,
    padding: 24,
  },
  Heading: {
    color: colors.Dgreen,
    fontSize: 32,
    fontFamily: 'Montserrat-Bold',
    height: 117,
    width: 270,
  },
  ImageWrapper: {
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: 250,
    height: 250,
  },
  input: {
    fontFamily: 'Montserrat-Bold',
    marginLeft: 20,
    color: colors.black,
  },

  //   textInput: {
  //     margin: 6,
  //     padding: 4,
  //     backgroundColor: '#ebfdf2',

  //     borderRadius: 20,
  //     // shadowColor: '#000',
  //     // shadowOffset: {
  //     //   width: 0,
  //     //   height: 2,
  //     // },
  //     // elevation: 2,
  //     // shadowOpacity: 0.25,
  //     // shadowRadius: 3.84,
  //   },
  buttontext2: {
    color: colors.black,
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
  buttontext: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
  button: {
    marginTop: 50,
    width: 360,
    height: 56,
    color: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: colors.BtnColor,
    fontFamily: 'Montserrat-Regular',
  },
  button2: {
    marginTop: 34,
    width: 360,
    height: 56,
    color: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: colors.BtnColor,
    fontFamily: 'Montserrat-Regular',
    borderColor: colors.BtnColor,
    borderWidth: 1,
    backgroundColor: colors.white,
  },
});
