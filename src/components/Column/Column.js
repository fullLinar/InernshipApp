import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Preloader from '../Preloader/Preloader';
import AddImput from '../common/AddInput';
import PrayerButton from '../common/PrayerButton/PrayerButton';
import CustomButton from '../common/CustomButton';

const Column = (props) => {
  const checkedPrayers = props.prayers.filter(
    (prayer) => prayer.checked === true,
  );
  const uncheckedPrayers = props.prayers.filter(
    (prayer) => prayer.checked === false,
  );

  const rederCheckedPrayers = () => {
    return checkedPrayers.map((prayer) => (
      <PrayerButton title={prayer.title} isChecked={prayer.checked} />
    ));
  };

  const rederUnCheckedPrayers = () => {
    return uncheckedPrayers.map((prayer) => (
      <PrayerButton title={prayer.title} isChecked={prayer.checked} />
    ));
  };

  return (
    <ScrollView style={styles.container}>
      {props.isFetching ? (
        <Preloader />
      ) : (
        <View>
          <View>
            <AddImput
              width={24}
              height={24}
              onChange={props.onChangeTitle}
              onPress={props.setNewPrayerToAPI}
            />
          </View>
          <View>{rederCheckedPrayers()}</View>
          {!props.isShowChecked ? (
            <View style={styles.prayeBtnWrap}>
              <CustomButton
                title="show Answered Prayers"
                onPress={props.toggleShowChecked}
              />
            </View>
          ) : (
            <View style={styles.prayeBtnWrap}>
              <CustomButton
                title="hidden Answered Prayers"
                onPress={props.toggleShowChecked}
              />
            </View>
          )}
          {props.isShowChecked ? <View>{rederUnCheckedPrayers()}</View> : <></>}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    flex: 1,
  },
  prayeBtnWrap: {
    alignItems: 'center',
    width: '100%',
    marginTop: 21,
    paddingBottom: 21,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  checkedList: {
    maxHeight: '51%',
  },
});

export default Column;
