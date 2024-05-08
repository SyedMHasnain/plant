import {} from 'react-native';
import React, { createContext, useState} from 'react';
import Navigation from './assets/Navigation/Navigation';

import auth from '@react-native-firebase/auth';
export const Globalinfo = createContext();

const Apps = () => {

  const [color, setColor] = useState('red');
  const [islogin, setIslogin] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [carts, setCarts] = useState([1,2,3]);
  
  const addtocart = (item) => {
   const itemexist = carts.findIndex((cart) => cart.id === item.id) ;
   if(itemexist === -1){
    setCarts([...carts,item])
   }
  };
     

  return (
    <Globalinfo.Provider
      value={{
      
        cartCount,
        setCartCount,
        login: islogin,
        appcolor: color,
        setPassword,
        password,
        email,
        setEmail,
        carts,
       addtocart,
      }}>
      <Navigation />
    </Globalinfo.Provider>
  );
};

export default Apps;
