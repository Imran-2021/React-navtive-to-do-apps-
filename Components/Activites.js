import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Activites = (props) => {

  return (
    <View style={styles.activites}>
      <View style={styles.activitesLeft}>
        <View style={styles.square}></View>
        <Text style={styles.activitesText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  activites: {
    backgroundColor: 'yellow',
    padding: 14,
    borderRadius: 9,
    flexDirection: 'row',
    alignactivitess: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  activitesLeft: {
    flexDirection: 'row',
    alignactivitess: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 20,
    height: 20,
    backgroundColor: '#FF6347',
    opacity: 0.4,
   
    marginRight: 14,
  },
  activitesText: {
    maxWidth: '82%',
  },
  circular: {
    width: 7,
    height: 7,
    borderColor:"#FF0000",
    borderWidth: 2,
 
  },
});

export default Activites;