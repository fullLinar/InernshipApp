import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BackIcon from '../SvgIcons/BackIcon';
import PrayerIcon from '../SvgIcons/PrayerIcon';

const PrayerHeader = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <View>
            <BackIcon />
          </View>
        </TouchableOpacity>
        <View>
          <PrayerIcon fill="#fff" />
        </View>
      </View>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: '100%',
    backgroundColor: '#BFB393',
    paddingTop: 50,
    paddingBottom: 23,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 15,
  },
  title: {
    fontSize: 17,
    lineHeight: 27,
    color: '#fff',
    paddingHorizontal: 15,
  },
});

export default PrayerHeader;
