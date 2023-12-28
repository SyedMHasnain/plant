import { StyleSheet, Text, View ,ScrollView,  TouchableOpacity} from 'react-native'
import React from 'react'
import CatData from '../data/categories_data'
import colors from '../theme/colors'


const categories = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {CatData.map((item, index) => (
        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles.Listwrapper,
            {
              backgroundColor: item.selected ? colors.primary : colors.price,
              marginLeft: item.id === 1 ? 20 : 5,
            },
          ]}
          key={index}>
          <Text style={styles.Text}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
  
}

export default categories

const styles = StyleSheet.create({
  Listwrapper: {
      backgroundColor: colors.BtnColor,
    width: 85,
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
    
   
  },
  Text:{
    
    fontFamily: 'Montserrat-Regular'},
});