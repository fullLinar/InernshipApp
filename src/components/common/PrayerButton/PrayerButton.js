import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBoxButton from '../CheckBoxButton';
import PrayerIcon from '../../SvgIcons/PrayerIcon';
import UserIcon from '../../SvgIcons/UserIcon';

const PrayerButton = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrap}>
        <CheckBoxButton isChecked={props.isChecked} />
        <Text style={styles.contentWrapText}>{props.title}</Text>
      </View>

      <View style={styles.iconsWrap}>
        <View style={styles.userIcon}>
          <UserIcon />
          <Text>5</Text>
        </View>
        <View style={styles.prayerIcon}>
          <PrayerIcon />
          <Text>20</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 22,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
  contentWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentWrapText: {
    marginLeft: 15,
    fontSize: 17,
  },
  iconsWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  prayerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PrayerButton;
