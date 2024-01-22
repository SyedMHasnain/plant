import {
  StyleSheet,
  FlatList,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React ,{createContext, useState}from 'react';
import {colors, Icon, Like, popularData} from '../Imports/globalImports';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';



const  ItemDrawer = (props) => {
  
  const {navigation, route} = props;
  const [cartCount, setCartCount] = useState(0);
  let plusitems = () => {
    setCartCount(cartCount + 1);
  };
  return (
    
      <View style={{}}>
        <View style={styles.PopularHeading}>
          <Text
            style={{
              fontFamily: 'Montserrat-Regular',
              color: colors.black,
              fontSize: 14,
            }}>
            Popular
          </Text>
          <Icon name="arrow-down-outline" size={10} color={colors.textDark} />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
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
                     
                      <Text style={styles.text}>
                        $ {item.price}
                      </Text>
                      {/* <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={plusitems}
                        style={styles.imgAddCart}>
                        <Icon name="add" size={17} color={colors.white} />
                      </TouchableOpacity> */}
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
export default ItemDrawer

const styles = StyleSheet.create({
  imgAddCart: {
    width: scale(20),
    height: verticalScale(20),
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BtnColor,
    borderRadius: 50,
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
    marginTop: 10,
    fontSize: 18,
    color: colors.price,
    fontFamily: 'Montserrat-SemiBold',
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
