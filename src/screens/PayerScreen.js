import React from 'react';
import Prayer from '../components/Prayer';
import { connect } from 'react-redux';
import {
  setCheckedPrayerToAPI,
  setPrayersFromAPI,
  deletePrayerFromAPI,
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

  render() {
    return (
      <Prayer
        title={this.props.prayer.title}
        checked={this.props.prayer.checked}
        date={this.props.prayer.description}
        toggleCheckedPrayer={this.toggleCheckedPrayer}
        deletePrayer={this.deletePrayer}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(PrayerScreen);
