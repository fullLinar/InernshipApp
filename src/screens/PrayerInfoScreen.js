import React from 'react';
import PrayerInfo from '../components/PrayerInfo';

class PrayerInfoScreen extends React.Component {
  render() {
    return <PrayerInfo date={this.props.route.params.date} />;
  }
}

export default PrayerInfoScreen;
