import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Preloader from '../Preloader/Preloader';
import AddInput from '../common/AddInput';
import CustomButton from '../common/CustomButton';
import PrayerScreen from '../../screens/PayerScreen';

const Column = (props) => {
  const checkedPrayers = props.prayers.filter(
    (prayer) => prayer.checked === true,
  );
  const uncheckedPrayers = props.prayers.filter(
    (prayer) => prayer.checked === false,
  );

  const renderCheckedPrayers = () => {
    return checkedPrayers.map((prayer) => (
      <PrayerScreen
        prayer={prayer}
        key={prayer.id.toString()}
        columnData={props.columnData}
        navigation={props.navigation}
      />
    ));
  };

  const renderUnCheckedPrayers = () => {
    return uncheckedPrayers.map((prayer) => (
      <PrayerScreen
        prayer={prayer}
        key={prayer.id.toString()}
        columnData={props.columnData}
        navigation={props.navigation}
      />
    ));
  };

  return (
    <ScrollView style={styles.container}>
      {props.isFetching ? (
        <Preloader />
      ) : (
        <View>
          <View>
            <AddInput
              width={24}
              height={24}
              onChange={props.onChangeTitle}
              onPress={props.setNewPrayerToAPI}
            />
          </View>
          <View>{renderUnCheckedPrayers()}</View>
          {!props.isShowChecked ? (
            <View style={styles.prayerBtnWrap}>
              <CustomButton
                title="show Answered Prayers"
                onPress={props.toggleShowChecked}
              />
            </View>
          ) : (
            <View style={styles.prayerBtnWrap}>
              <CustomButton
                title="hidden Answered Prayers"
                onPress={props.toggleShowChecked}
              />
            </View>
          )}
          {props.isShowChecked ? <View>{renderCheckedPrayers()}</View> : <></>}
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
  prayerBtnWrap: {
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
