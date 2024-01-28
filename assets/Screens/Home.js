import {StyleSheet, ScrollView, Text, View, Button} from 'react-native';
import React from 'react';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import colors from '../theme/colors';
import ItemDrawer from '../components/ItemDrawer';

const Home = props => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.Container}>
      <Navbar />
      <Categories />
      <View>
        <ItemDrawer navigation={props.navigation} route={props.route} />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: colors.white,
  },
});
