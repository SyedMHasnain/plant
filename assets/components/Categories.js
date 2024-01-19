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

const categories = () => {
  const [selected, setSelected] = useState(false);

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {CatData.map((item, index) => (
        <TouchableOpacity
          activeOpacity={0.7}
          // onPress={ () => setSelected(item.selected = !item.selected)}
          style={[
            styles.Listwrapper,
            //   {
            //  colors: item.selected ? colors.primary : colors.Dgreen,

            //   },
          ]}
          key={index}>
          <Text
            style={[
              styles.Text,
              {
                color: item.selected ? colors.black : colors.catcolor,
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
    padding: 10,
    borderRadius: 10,
  },
  Text: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
});
