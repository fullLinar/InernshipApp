import React from 'react';
import Column from '../components/Column';
import { connect } from 'react-redux';
import {
  getToken,
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
    this.props.setPrayersFromAPI(this.props.token);
  }
  onChangeTitle = (titleText) => {
    this.props.onChageNewPrayerTitle(titleText);
  };
  setNewPrayerToAPI = () => {
    const { newPrayerData, token } = this.props;
    if (newPrayerData.title !== '') {
      this.props.setPrayerToAPI(newPrayerData, token);
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
    token: getToken(state),
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
