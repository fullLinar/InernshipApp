import React from 'react';
import { View, StyleSheet } from 'react-native';
import AnimatedEllipsis from 'react-native-animated-ellipsis';

const Preloader = () => {
  return (
    <>
      <View style={styles.container}>
        <AnimatedEllipsis style={styles.ellipsis} animationDelay={150} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ellipsis: { fontSize: 72 },
});
export default Preloader;
