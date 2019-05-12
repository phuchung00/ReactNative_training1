import React from 'react'
import { Text } from 'react-native'
import { Platform, StyleSheet, View } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{ props.headerText  }</Text>
      <Text>this is Header</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    // height:60,
    paddingTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    // margin: 10,
  },
});

export default Header