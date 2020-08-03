import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import AddButton from '../AddButton';
const AddImput = ({ onChange, onPress, width, height, title, onBlur }) => {
  return (
    <View style={styles.container}>
      <AddButton width={width} height={height} onPress={onPress} />
      <TextInput
        placeholder="Add a prayer..."
        autoCapitalize={'none'}
        style={styles.textInput}
        onChangeText={(newText) => onChange(newText)}
        value={title}
        onBlur={onBlur}
        autoFocus={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingVertical: 13,
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 20,
  },
  textInput: {
    fontSize: 17,
    width: '100%',
    paddingVertical: 0,
  },
});

export default AddImput;
