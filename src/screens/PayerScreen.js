import React from 'react';
import Prayer from '../components/Prayer';
import { connect } from 'react-redux';
import {
  onChangePrayerChecked,
  deletePrayer,
  editPrayerTitle,
} from '../actions/prayerActions';

class PrayerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.prayer = this.props.prayer;
  }
  toggleCheckedPrayer = () => {
    const prayerId = this.prayer.id;
    const prayerData = {
      ...this.prayer,
      checked: this.prayer.checked ? false : true,
      column: this.props.columnData,
    };
    this.props.onChangePrayerChecked(prayerData, prayerId);
  };

  deletePrayer = () => {
    const prayerId = this.prayer.id;
    this.props.deletePrayer(prayerId);
  };

  setPrayerTitle = (titleText) => {
    const prayerId = this.prayer.id;
    const prayerData = {
      ...this.prayer,
      title: titleText,
      column: this.props.columnData,
    };
    this.props.editPrayerTitle(prayerData, prayerId);
  };

  render() {
    return (
      <Prayer
        title={this.prayer.title}
        checked={this.prayer.checked}
        date={this.prayer.description}
        toggleCheckedPrayer={this.toggleCheckedPrayer}
        deletePrayer={this.deletePrayer}
        onChangePrayerTitle={this.onChangePrayerTitle}
        setPrayerTitle={this.setPrayerTitle}
        prayerId={this.prayer.id}
        navigation={this.props.navigation}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  onChangePrayerChecked,
  deletePrayer,
  editPrayerTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrayerScreen);
