import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import PlusIcon from '../../SvgIcons/PlusIcon';

const AddButton = ({ onPress, width, height }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginRight: 15 }}>
      <View>
        <PlusIcon width={width} height={height} />
      </View>
    </TouchableOpacity>
  );
};
export default AddButton;
