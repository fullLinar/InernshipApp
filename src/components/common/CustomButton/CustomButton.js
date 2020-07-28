import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../../../styles/styles';

const CustomButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
