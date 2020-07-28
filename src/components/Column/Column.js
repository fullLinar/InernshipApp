import React from 'react';
import { View, Text } from 'react-native';

const Column = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>text</Text>
    </View>
  );
};

export default Column;
