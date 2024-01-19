import {StyleSheet, Text, View, } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Incon from 'react-native-vector-icons/Ionicons';
import colors from '../theme/colors'
const Navbar = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <View style={styles.HeaderTilteBack}>
          {/* <Icon name="chevron-left" size={20} color={colors.textDark} /> */}
          <Text style={styles.TitleHeading}>All Plants</Text>
        </View>

       
          <Incon name="search" size={25} color={colors.textDark} />
       

      </View>

      <View style={styles.SubheadingWrapper}>
        <Text style={styles.Subheading}>Plant {'\n'}is For Room</Text>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  
  Header: {
    paddingTop: 15,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  HeaderTilteBack:{
    flexDirection: 'row',
    gap:15,
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  
  TitleHeading:
  {fontFamily: 'Montserrat-SemiBold'
  ,fontSize:25,
color:colors.textDark}
,
SubheadingWrapper:{
  paddingHorizontal:20,
  paddingVertical:32,
  width:230,
  height: 140,
},
Subheading:{
  fontFamily: 'Montserrat-SemiBold',
  color:colors.textDark,
  fontSize:28,
},
});
