import React from 'react';
import Prayer from '../components/Prayer';
import { connect } from 'react-redux';
import {
  setCheckedPrayerToAPI,
  setPrayersFromAPI,
  deletePrayerFromAPI,
  setPrayerTitleToApi,
} from '../actions/prayerActions';

class PrayerScreen extends React.Component {
  toggleCheckedPrayer = () => {
    const prayerId = this.props.prayer.id;
    const prayerData = {
      title: this.props.prayer.title,
      description: this.props.prayer.description,
      checked: this.props.prayer.checked ? false : true,
      column: this.props.columnData,
    };
    this.props.setCheckedPrayerToAPI(prayerData, prayerId);
  };

  deletePrayer = async () => {
    const prayerId = this.props.prayer.id;
    await this.props.deletePrayerFromAPI(prayerId);
    this.props.setPrayersFromAPI();
  };

  setPrayerTitle = (titleText) => {
    const prayerId = this.props.prayer.id;
    const prayerData = {
      title: titleText,
      description: this.props.prayer.description,
      checked: this.props.prayer.checked,
      column: this.props.columnData,
    };
    this.props.setPrayerTitleToApi(prayerData, prayerId);
  };

  render() {
    return (
      <Prayer
        title={this.props.prayer.title}
        checked={this.props.prayer.checked}
        date={this.props.prayer.description}
        toggleCheckedPrayer={this.toggleCheckedPrayer}
        deletePrayer={this.deletePrayer}
        onChangePrayerTitle={this.onChangePrayerTitle}
        setPrayerTitle={this.setPrayerTitle}
        prayerId={this.props.prayer.id}
        navigation={this.props.navigation}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  setCheckedPrayerToAPI,
  setPrayersFromAPI,
  deletePrayerFromAPI,
  setPrayerTitleToApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrayerScreen);
