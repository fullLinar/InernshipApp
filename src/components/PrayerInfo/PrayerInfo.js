import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PlusIcon from '../SvgIcons/PlusIcon';

const PrayerInfo = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.lastPrayed}>Last prayed 8 min ago</Text>
      </View>
      <View style={styles.infoGrid}>
        <View style={styles.infoGridItem}>
          <Text style={styles.infoGridDate}>July 25 2017</Text>
          <Text style={styles.infoGridText}>Date Added</Text>
          <Text style={(styles.infoGridText, styles.infoGridLink)}>
            Opened for 4 days
          </Text>
        </View>
        <View style={styles.infoGridItem}>
          <Text style={styles.infoGridItemCount}>123</Text>
          <Text style={styles.infoGridText}>Times Prayed Total</Text>
        </View>
        <View style={styles.infoGridItem}>
          <Text style={styles.infoGridItemCount}>63</Text>
          <Text style={styles.infoGridText}>Times Prayed by Me</Text>
        </View>
        <View style={styles.infoGridItem}>
          <Text style={styles.infoGridItemCount}>60</Text>
          <Text style={styles.infoGridText}>Times Prayed by Others</Text>
        </View>
      </View>
      <View style={styles.membersWrap}>
        <Text style={styles.membersTitle}>members</Text>
        <View style={styles.memberItems}>
          <View style={styles.addMemberBtn}>
            <PlusIcon fill="#fff" />
          </View>
          <View style={styles.addMemberBtn}>
            <PlusIcon fill="#fff" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  lastPrayed: {
    fontSize: 17,
    padding: 15,
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  infoGridItem: {
    width: '50%',
    minHeight: 108,
    paddingHorizontal: 15,
    paddingVertical: 26,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  infoGridDate: {
    fontSize: 22,
    color: '#BFB393',
    marginBottom: 6,
  },
  infoGridItemCount: {
    fontSize: 37,
    color: '#BFB393',
  },
  infoGridText: {
    fontSize: 13,
  },
  infoGridLink: {
    color: '#72A8BC',
  },
  membersWrap: {
    paddingHorizontal: 15,
    marginBottom: 28,
  },
  membersTitle: {
    textTransform: 'uppercase',
    fontSize: 13,
    marginBottom: 13,
    color: '#72A8BC',
  },
  memberItems: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  addMemberBtn: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BFB393',
    borderRadius: 30,
    margin: 3,
  },
});

export default PrayerInfo;
