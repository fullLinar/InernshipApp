import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import PlusIcon from '../SvgIcons/PlusIcom';

const AddHeaderButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginRight: 15 }}>
      <View>
        <PlusIcon />
      </View>
    </TouchableOpacity>
  );
};
export default AddHeaderButton;
