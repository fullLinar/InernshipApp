import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ColumnButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '100%',
        height: 59,
        borderStyle: 'solid',
        borderColor: '#E5E5E5',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 15,
        justifyContent: 'center',
        marginVertical: 5,
      }}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default ColumnButton;
