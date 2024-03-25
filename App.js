import {} from 'react-native';
import React, {useEffect, createContext, useState} from 'react';
import Navigation from './assets/Navigation/Navigation';
import popularData from './assets/data/popular_data';
import {View} from 'react-native-animatable';
import auth from '@react-native-firebase/auth';
export const Globalinfo = createContext();

const Apps = () => {
  const [color, setColor] = useState('red');
  const [islogin, setIslogin] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [api] = useState(
    popularData.map((item, index) => <View key={index}>{item.rating}</View>),
  );

  //       useEffect(() => {
  // // auth()
  // //   .createUserWithEmailAndPassword(
  // //     'jane.dooe@example.com',
  // //     'SuperSecretPassword!',
  // //   )
  // //   .then(() => {
  // //     console.log('User account created & signed in!');
  // //   })
  // //   .catch(error => {
  // //     if (error.code === 'auth/email-already-in-use') {
  // //       console.log('That email address is already in use!');
  // //     }

  // //     if (error.code === 'auth/invalid-email') {
  // //       console.log('That email address is invalid!');
  // //     }

  // //     console.error(error);
  //   });
  //   }, [])

  return (
    <Globalinfo.Provider
      value={{
        popularData,
        cartCount,
        setCartCount,
        api,
        login: islogin,
        appcolor: color,
        setPassword,
        password,
        email,
        setEmail,
      }}>
      <Navigation />
    </Globalinfo.Provider>
  );
};

export default Apps;
