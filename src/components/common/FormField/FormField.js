import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../../../styles/styles';

const FormField = ({ input, meta, textContentType, secureTextEntry }) => {
  return (
    <View>
      <TextInput
        style={styles.textInput}
        {...input}
        textContentType={textContentType}
        autoCapitalize={'none'}
        secureTextEntry={secureTextEntry}
      />
      {meta.error && meta.touched && <Text>{meta.error}</Text>}
    </View>
  );
};

export default FormField;
