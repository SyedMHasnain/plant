import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from 'react-native';
//import * as  from 'react-native-animatable';
import React, {useContext, useState} from 'react';
import {Globalinfo} from '../../App';
import {Animatable, colors} from '../Imports/globalImports';
import {scale, verticalScale, moderateScale, s} from 'react-native-size-matters';
import auth from '@react-native-firebase/auth';

const Splashscreen = ({navigation}) => {
  const {password, setEmail, setPassword, email} = useContext(Globalinfo);
  const [islogin, setislogin] = useState(false);

  
 
  const CreateAccount = () => {
    //create Account
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('User account created & signed in!');
          navigation.navigate('Home');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
         Alert.alert('User Already exist');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('User Already exist ');
        }

        console.error(error);
      });
  };
  const signIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch(error => {
       Alert.alert("User not found ");
      });
  };

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
      <View style={styles.textInput}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor={colors.Dgreen}
        />
        
      </View>
      <View style={styles.textInput}>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor={colors.Dgreen}
        />
      </View>
      {/* Button  Sign in Create An Account */}

      {/* sign In */}
      <Animatable.View style={styles.buttonWrapper} animation="fadeInRight">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
    if (!email || !password || email.length === 0 || password.length === 0) {
      Alert.alert('Please enter both email and password');
     
    } else {
      signIn(); // Trigger sign-in function if both email and password are filled
    }
            
          }}
          style={styles.button}>
          <Text style={styles.buttontext}>Sign in</Text>
        </TouchableOpacity>
      </Animatable.View>
      {/* Create Account */}
      <Animatable.View animation="fadeInRight" delay={450}>
        <TouchableOpacity onPress={CreateAccount} style={styles.button2}>
          <Text style={styles.buttontext2}>Create An Account</Text>
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
    marginTop: 40,
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
    height: verticalScale(117),
    width: scale(270),
  },

  Image: {
    width: scale(350),
    height: verticalScale(200),
  },

  input: {
    fontFamily: 'Montserrat-Bold',
    margin: moderateScale(5),
    color: colors.primary,
    paddingLeft: moderateScale(20),
  },

  textInput: {
    margin: moderateScale(6),
    backgroundColor: '#ebfdf2',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
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
