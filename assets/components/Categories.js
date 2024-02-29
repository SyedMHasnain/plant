import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CatData from '../data/categories_data';
import colors from '../theme/colors';
import { scale, verticalScale } from 'react-native-size-matters';

const categories = () => {
  const [selected, setSelected] = useState(false);

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {CatData.map((item, index) => (
        <TouchableOpacity
          activeOpacity={0.7}
        
          style={[
            styles.Listwrapper,
              {
             colors: item.selected ? colors.textDark : colors.Dgreen,

              },
          ]}
          key={index}>
          <Text
            style={[
              styles.Text,
              {
                color: item.selected ? colors.black : colors.textDark,
              },
            ]}>
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default categories;

const styles = StyleSheet.create({
  Listwrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 7,
    width: scale(70),
    height: verticalScale(38),
    borderRadius: 10,
    backgroundColor: colors.primary,

  },
  Text: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
});
