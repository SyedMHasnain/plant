import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View>
      <View style={styles.textInput}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={colors.Dgreen}
        />
      </View>
      <View style={styles.textInput}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={colors.Dgreen}
        />
      </View>
    </View>
  );
}

export default Login

const styles = StyleSheet.create({
  input: {
    fontFamily: 'Montserrat-Bold',
    marginLeft: 20,
    color: colors.black,
  },

  textInput: {
    margin: 6,
    padding: 4,
    backgroundColor: '#ebfdf2',

    borderRadius: 20,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // elevation: 2,
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
  },
});