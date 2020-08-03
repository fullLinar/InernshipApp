import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'react-native';
import SettingIcon from '../../SvgIcons/setting';

const SettingButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => console.log('Setting')}
      style={{ marginRight: 15 }}>
      <View>
        <SettingIcon />
      </View>
    </TouchableOpacity>
  );
};

export default SettingButton;
