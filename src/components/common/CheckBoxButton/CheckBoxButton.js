import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import CheckIcon from '../../SvgIcons/ChekIcon';

const CheckBoxButton = ({ onPress, isChecked }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {isChecked ? <CheckIcon /> : <></>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 22,
    height: 22,
    padding: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#424E75',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CheckBoxButton;
