import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CheckBoxButton from '../common/CheckBoxButton';
import PrayerIcon from '../SvgIcons/PrayerIcon';
import UserIcon from '../SvgIcons/UserIcon';
import Swipeout from 'react-native-swipeout';
import AddInput from '../common/AddInput';
import ColorMarker from '../common/ColorMarker/ColorMarker';

const Prayer = (props) => {
  const [isEditTitle, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(props.title);

  const handleIsEdit = () => {
    isEditTitle ? setIsEdit(false) : setIsEdit(true);
  };

  const editTitle = (titleText) => {
    setNewTitle(titleText);
  };

  const setPraterNewTitle = () => {
    props.setPrayerTitle(newTitle);
  };
  const swipeOutBtn = [
    {
      text: 'delete',
      backgroundColor: '#AC5253',
      onPress: () => props.deletePrayer(),
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
                  date: props.date,
                  navigation: props.navigation,
                })
              }
              onLongPress={() => handleIsEdit()}>
              {props.checked ? (
                <Text style={styles.contentWrapCheckedText}>{props.title}</Text>
              ) : (
                <Text style={styles.contentWrapText}>{props.title}</Text>
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
