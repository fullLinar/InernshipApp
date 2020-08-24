import React from 'react';
import { View, Text, TextInput, Keyboard } from 'react-native';
import { styles } from '../../../styles/styles';

const FormField = ({
  input,
  meta,
  textContentType = 'none',
  secureTextEntry = false,
  autoCapitalize = 'none',
  onKeyPress,
}) => {
  return (
    <View>
      <TextInput
        style={styles.textInput}
        {...input}
        textContentType={textContentType}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        blurOnSubmit={false}
        onSubmitEditing={() => onKeyPress()}
      />
      {meta.error && meta.touched && <Text>{meta.error}</Text>}
    </View>
  );
};

export default FormField;
