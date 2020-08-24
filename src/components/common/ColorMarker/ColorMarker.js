import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colorGenerator } from '../../../utils/utils';

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
