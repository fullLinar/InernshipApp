import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CheckBoxButton from '../common/CheckBoxButton';
import PrayerIcon from '../SvgIcons/PrayerIcon';
import UserIcon from '../SvgIcons/UserIcon';
import Swipeout from 'react-native-swipeout';
import AddInput from '../common/AddInput';
import ColorMarker from '../common/ColorMarker/ColorMarker';

const Prayer = ({
  title,
  checked,
  setPrayerTitle,
  deletePrayer,
  toggleCheckedPrayer,
  prayerId,
  date,
  navigation,
}) => {
  const [isEditTitle, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleIsEdit = () => {
    isEditTitle ? setIsEdit(false) : setIsEdit(true);
  };

  const editTitle = (titleText) => {
    setNewTitle(titleText);
  };

  const setPraterNewTitle = () => {
    setPrayerTitle(newTitle);
  };
  const swipeOutBtn = [
    {
      text: 'delete',
      backgroundColor: '#AC5253',
      onPress: () => deletePrayer(),
    },
  ];
  return (
    <>
      {isEditTitle ? (
        <View style={{ paddingVertical: 10 }}>
          <AddInput
            width={24}
            height={24}
            containerHeight={61}
            title={newTitle}
            onChange={editTitle}
            onPress={setPraterNewTitle}
            onBlur={setPraterNewTitle}
          />
        </View>
      ) : (
        <Swipeout right={swipeOutBtn} style={styles.swipeContainer}>
          <View style={styles.container}>
            <ColorMarker />
            <CheckBoxButton isChecked={checked} onPress={toggleCheckedPrayer} />

            <TouchableOpacity
              style={styles.contentWrap}
              onPress={() =>
                navigation.navigate('Prayer', {
                  title: title,
                  prayerId: prayerId,
                  date: date,
                  navigation: navigation,
                })
              }
              onLongPress={() => handleIsEdit()}>
              {checked ? (
                <Text style={styles.contentWrapCheckedText}>{title}</Text>
              ) : (
                <Text style={styles.contentWrapText}>{title}</Text>
              )}
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
      )}
    </>
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
    width: '67%',
  },
  contentWrapText: {
    marginLeft: 15,
    fontSize: 17,
  },
  contentWrapCheckedText: {
    marginLeft: 15,
    fontSize: 17,
    textDecorationLine: 'line-through',
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
