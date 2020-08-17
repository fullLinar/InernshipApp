import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CheckBoxButton from '../common/CheckBoxButton';
import PrayerIcon from '../SvgIcons/PrayerIcon';
import UserIcon from '../SvgIcons/UserIcon';
import Swipeout from 'react-native-swipeout';

const Prayer = (props) => {
  const swipeOutBtn = [
    {
      text: 'delete',
      backgroundColor: '#AC5253',
      onPress: () => props.deletePrayer(),
    },
  ];
  return (
    <Swipeout right={swipeOutBtn} style={styles.swipeContainer}>
      <View style={styles.container}>
        <CheckBoxButton
          isChecked={props.checked}
          onPress={props.toggleCheckedPrayer}
        />
        <TouchableOpacity
          style={styles.contentWrap}
          onPress={() =>
            props.navigation.navigate('Prayer', {
              title: props.title,
              prayerId: props.prayerId,
              navigation: props.navigation,
            })
          }>
          <Text style={styles.contentWrapText}>{props.title}</Text>
        </TouchableOpacity>

        <View style={styles.iconsWrap}>
          <View style={styles.userIcon}>
            <UserIcon />
            <Text>5</Text>
          </View>
          <View style={styles.prayerIcon}>
            <PrayerIcon fill="#72A8BC" />
            <Text>20</Text>
          </View>
        </View>
      </View>
    </Swipeout>
  );
};

const styles = StyleSheet.create({
  swipeContainer: {
    backgroundColor: 'transparent',
  },
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
    width: '70%',
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

export default Prayer;
