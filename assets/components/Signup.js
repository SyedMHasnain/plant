import {Image, StyleSheet, Text, TouchableOpacity, TextInput,View, ScrollView} from 'react-native';

import React from 'react';
import colors from '../theme/colors';

const SignUp = ({navigation}) => {
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
        <View style={styles.ButtonsWrapper}>

          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.button}>
            <Text style={styles.buttonSignin}>Signin</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.button2]}>
            <Text style={styles.buttonCreatAc}>Create An Account?</Text>
          </TouchableOpacity>
        </View>
      </View>
    
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  HeadingWrapper: {
    marginTop: 20,
    padding: 10,
    marginLeft: 10,
  },
  Heading: {
    color: colors.Dgreen,
    fontSize: 32,
    fontFamily: 'Montserrat-Bold',
    height: 117,
    width: 270,
  },
  ImageWrapper: {
    flex:0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: 250,
    height: 200,
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

  ButtonsWrapper:{
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  buttonCreatAc: {
    color: colors.black,
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
  buttonSignin: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
  button: {
    marginTop: 30,
    width: 350,
    height: 46,
    color: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: colors.BtnColor,
    fontFamily: 'Montserrat-Regular',
  },
  button2: {
    marginTop: 24,
    color: colors.white,
    borderColor: colors.BtnColor,
    borderWidth: 1,
    backgroundColor: colors.white,
  },
});
