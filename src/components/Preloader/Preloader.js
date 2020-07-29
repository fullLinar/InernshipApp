import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/styles';
import AnimatedEllipsis from 'react-native-animated-ellipsis';

const Preloader = (props) => {
  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <AnimatedEllipsis style={{ fontSize: 72 }} animationDelay={150} />
      </View>
    </>
  );
};

export default Preloader;
