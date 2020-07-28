import React from 'react';
import { View, TextInput } from 'react-native';
import PlusIcon from '../../SvgIcons/PlusIcon';

const AddImput = ({ setColumnTitle }) => {
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
      }}>
      <PlusIcon width={24} height={24} />
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
