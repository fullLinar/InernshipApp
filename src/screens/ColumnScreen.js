import React from 'react';
import Column from '../components/Column';
import moment from 'moment';
import { connect } from 'react-redux';
import {
  getIsFetching,
  getColumnPrayers,
  getIsShowChecked,
  prayerColumn,
} from '../selectors/selectors';
import {
  setPrayersFromAPI,
  setPrayerToAPI,
  toggleShowChecked,
} from '../actions/prayerActions';

class ColumnScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: moment().format('MMM DD YYYY hh:mm'),
      column: this.props.column,
    };
  }
  componentDidMount() {
    this.props.setPrayersFromAPI();
  }
  onChangeTitle = (titleText) => {
    this.setState({ title: titleText });
  };
  setNewPrayerToAPI = () => {
    if (this.state.title !== '') {
      this.props.setPrayerToAPI(this.state);
      this.props.setPrayersFromAPI();
    }
  };
  toggleShowChecked = () => {
    this.props.toggleShowChecked();
  };
  render() {
    return (
      <Column
        prayers={this.props.prayers}
        columnData={this.props.column}
        isFetching={this.props.isFetching}
        onChangeTitle={this.onChangeTitle}
        setNewPrayerToAPI={this.setNewPrayerToAPI}
        isShowChecked={this.props.isShowChecked}
        toggleShowChecked={this.toggleShowChecked}
        navigation={this.props.navigation}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    prayers: getColumnPrayers(state, props),
    isFetching: getIsFetching(state),
    isShowChecked: getIsShowChecked(state),
    column: prayerColumn(state, props),
  };
};

const mapDispatchToProps = {
  setPrayersFromAPI,
  setPrayerToAPI,
  toggleShowChecked,
};
export default connect(mapStateToProps, mapDispatchToProps)(ColumnScreen);
