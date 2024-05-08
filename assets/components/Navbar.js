import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, Incon, Icon, verticalScale, scale} from '../Imports/globalImports';
import { useNavigation } from '@react-navigation/native';

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

const  Nav = () => {
  const navigation = useNavigation();
  return (
    

      <View style={styles.iconhead}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
          style={styles.backicon}>
          <Icon name="chevron-back" size={30} color={colors.black} />
        </TouchableOpacity>

     
      </View>
   
  );
};
export {Nav};

const styles = StyleSheet.create({
  iconhead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  Header: {
    paddingTop: 15,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  HeaderTilteBack: {
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  TitleHeading: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 25,
    color: colors.textDark,
  },
  SubheadingWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
    width: scale(210),
    height: verticalScale(110),
    // backgroundColor: "red",
  },
  Subheading: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.textDark,
    fontSize: 28,
  },
});
