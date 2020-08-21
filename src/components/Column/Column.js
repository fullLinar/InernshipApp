import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Preloader from '../Preloader/Preloader';
import AddInput from '../common/AddInput';
import CustomButton from '../common/CustomButton';
import PrayerScreen from '../../screens/PayerScreen';

const Column = ({
  prayers,
  columnData,
  navigation,
  onChangeTitle,
  createPrayer,
  toggleShowChecked,
  isShowChecked,
  isFetching,
}) => {
  const checkedPrayers = prayers.filter((prayer) => prayer.checked === true);
  const uncheckedPrayers = prayers.filter((prayer) => prayer.checked === false);

  const renderCheckedPrayers = () => {
    return checkedPrayers.map((prayer) => (
      <PrayerScreen
        prayer={prayer}
        key={prayer.id}
        columnData={columnData}
        navigation={navigation}
      />
    ));
  };

  const renderUnCheckedPrayers = () => {
    return uncheckedPrayers.map((prayer) => (
      <PrayerScreen
        prayer={prayer}
        key={prayer.id}
        columnData={columnData}
        navigation={navigation}
      />
    ));
  };

  if (isFetching) {
    return <Preloader />;
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <View>
          <AddInput
            width={24}
            height={24}
            onChange={onChangeTitle}
            onPress={createPrayer}
            onBlur={createPrayer}
          />
        </View>
        <View>{renderUnCheckedPrayers()}</View>
        <View style={styles.prayerBtnWrap}>
          <CustomButton
            title={
              isShowChecked
                ? 'hidden Answered Prayers'
                : 'show Answered Prayers'
            }
            onPress={toggleShowChecked}
          />
        </View>
        {isShowChecked && <View>{renderCheckedPrayers()}</View>}
      </View>
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
