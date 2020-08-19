import React from 'react';
import { View, StyleSheet } from 'react-native';

const colorGenerator = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ColorMarker = () => {
  const styles = StyleSheet.create({
    marker: {
      width: 3,
      height: 22,
      borderRadius: 1,
      backgroundColor: colorGenerator(),
      marginRight: 10,
    },
  });

  return <View style={styles.marker}></View>;
};

export default ColorMarker;
