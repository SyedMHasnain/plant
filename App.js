import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useState} from 'react';

import Navigation from './assets/Navigation/Navigation';
import popularData from './assets/data/popular_data';

export const Globalinfo = createContext();

const Apps = () => {

  const [color, setColor] = useState('red');
  const [islogin, setIslogin] = useState(false);
  const [cartCount, setCartCount] = useState(0);
 


  return (
    <Globalinfo.Provider value={{
  
      popularData,
      cartCount,
      setCartCount,
      login:islogin,
      appcolor:color}}>
      <Navigation />
    </Globalinfo.Provider>
  );
};

export default Apps;


