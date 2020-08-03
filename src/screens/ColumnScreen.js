import React from 'react';
import Column from '../components/Column';
import { connect } from 'react-redux';
import {
  getIsFetching,
  getColumnPrayers,
  getNewPrayerData,
  getIsShowChecked,
} from '../selectors/selectors';
import {
  setPrayersFromAPI,
  onChageNewPrayerTitle,
  setPrayerToAPI,
  toggleShowChecked,
} from '../actions/prayerActions';

class ColumnScreen extends React.Component {
  componentDidMount() {
    this.props.setPrayersFromAPI();
  }
  onChangeTitle = (titleText) => {
    this.props.onChageNewPrayerTitle(titleText);
  };
  setNewPrayerToAPI = () => {
    const { newPrayerData } = this.props;
    if (newPrayerData.title !== '') {
      this.props.setPrayerToAPI(newPrayerData);
    }
  };
  toggleShowChecked = () => {
    this.props.toggleShowChecked();
  };
  render() {
    return (
      <Column
        prayers={this.props.prayers}
        isFetching={this.props.isFetching}
        onChangeTitle={this.onChangeTitle}
        setNewPrayerToAPI={this.setNewPrayerToAPI}
        isShowChecked={this.props.isShowChecked}
        toggleShowChecked={this.toggleShowChecked}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    prayers: getColumnPrayers(state, props),
    isFetching: getIsFetching(state),
    newPrayerData: getNewPrayerData(state, props),
    isShowChecked: getIsShowChecked(state),
  };
};

const mapDispatchToProps = {
  setPrayersFromAPI,
  onChageNewPrayerTitle,
  setPrayerToAPI,
  toggleShowChecked,
};
export default connect(mapStateToProps, mapDispatchToProps)(ColumnScreen);
