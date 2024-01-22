import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
//import * as  from 'react-native-animatable';
import React from 'react';
import {Animatable, colors} from '../Imports/globalImports';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const Splashscreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Heading*/}
      <View style={styles.HeadingWrapper}>
        <Text style={styles.Heading}>Let's Plant With Us</Text>
        <Text style={styles.Description}>Make the world green Again </Text>
      </View>
      {/* Image  */}
      <View style={styles.ImageWrapper}>
        <Image
          source={require('../images/Boy.png')}
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

      <Animatable.View style={styles.buttonWrapper} animation="fadeInRight">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Home')}
          style={styles.button}>
          <Text style={styles.buttontext}>Signin</Text>
        </TouchableOpacity>
      </Animatable.View>
      <Animatable.View animation="fadeInRight" delay={450}>
        <TouchableOpacity
          onPress={() => navigation.navigate('')}
          style={styles.button2}>
          <Text style={styles.buttontext2}>Create An Account?</Text>
        </TouchableOpacity>
      </Animatable.View>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  Heading: {
    color: colors.black,
    fontSize: 28,
    fontFamily: 'Montserrat-Bold',
  },

  Description: {
    color: colors.black,
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    height: 117,
    width: 270,
  },

  Image: {
    width: scale(350),
    height: verticalScale(250),
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
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    width: 320,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 20,
    backgroundColor: colors.BtnColor,
    fontFamily: 'Montserrat-Regular',
  },
  button2: {
    marginTop: 34,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    fontFamily: 'Montserrat-Regular',
  },
});
