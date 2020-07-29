import React from 'react';
import { View, TextInput } from 'react-native';
import AddButton from '../AddButton';
const AddImput = ({ setColumnTitle, onPress, width, height }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 14,
        paddingVertical: 13,
        borderStyle: 'solid',
        borderColor: '#E5E5E5',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 20,
      }}>
      <AddButton width={width} height={height} onPress={onPress} />
      <TextInput
        placeholder="Add a prayer..."
        autoCapitalize={'none'}
        style={{ fontSize: 17, marginLeft: 15, width: '100%' }}
        onChangeText={(newText) => setColumnTitle(newText)}
      />
    </View>
  );
};

export default AddImput;
