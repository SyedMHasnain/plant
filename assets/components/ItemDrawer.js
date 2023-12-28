import {StyleSheet, FlatList, Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import popularData from '../data/popular_data';
import colors from '../theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Like from '../Screens/Detail';


export default function ItemDrawer(props ) {

  const {navigation , route } = props
 
  // ) const handlepress= () => (
  //   )
  
  return (
    <View style={{}}>
      <View style={styles.PopularHeading}>
        <Text style={{fontFamily: 'Montserrat-Regular', color: colors.black}}>
          Popular
        </Text>
        <Icon name="arrow-down-outline" size={10} color={colors.textDark} />
      </View>
      <View
    
       style={{flex: 1, flexDirection: 'row'}}>
        {/* flatlist */}
        <FlatList
          numColumns={2}
          scrollEnabled={false}
          data={popularData}
          renderItem={({item, index}) => (
            // Flatlist Start
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate('Detail', {item: item})}>
            

              <View style={styles.mainView}>
                <View style={styles.imgbgcolor}>
                  <Image style={[styles.img]} source={item.image} />
                </View>

                <View style={styles.DetailWrapper}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontFamily: 'Montserrat-Bold',
                        color: colors.black,
                      }}>
                      {item.title}
                    </Text>
                    <View style={{flexDirection: 'row', marginLeft: 5}}>
                      <Icon name="star" size={15} color={colors.secondary} />
                      <Text
                        style={{
                          fontFamily: 'Montserrat-Regular',
                          marginLeft: 5,
                        }}>
                        {item.rating}
                      </Text>
                    </View>
                  </View>

                  <View>
                    <Text style={styles.text}>From {item.sizeNumber}</Text>
                    <Text style={[styles.text, {color: colors.black}]}>
                      $ {item.price}
                    </Text>
                    <TouchableOpacity
                      activeOpacity={0.9}
                      onPress={() => console.log('Add to cart')}
                      style={styles.imgAddCart}>
                      <Icon name="add" size={17} color={colors.white} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
        {/* FlatList End */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgAddCart: {
    width: 25,
    height: 25,
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BtnColor,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  PopularHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    paddingLeft: 24,
    marginTop: 50,
  },
  mainView: {
    
    height: 210,
    width: 165,
    marginLeft: 15,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: colors.white,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },

  DetailWrapper: {
    marginLeft: 10,
    marginTop: 25,
  },
  text: {
    color: colors.textDark,
    fontFamily: 'Montserrat-Regular',
  },

  img: {
    marginTop: 15,
    width: 140,
    height: 100,
  },

  TitleRating: {
    marginLeft: 10,
    marginTop: 20,
    flexDirection: 'row',
  },
  TitleFont: {
    fontFamily: 'Montserrat-Bold',
  },

  Inches: {},
});
