import React from 'react';
import Column from '../components/Column';
import moment from 'moment';
import { connect } from 'react-redux';
import {
  getIsFetching,
  getColumnPrayers,
  getIsShowChecked,
  getPrayerColumn,
} from '../selectors/selectors';
import {
  getPrayers,
  addPrayer,
  toggleShowChecked,
} from '../actions/prayerActions';

class ColumnScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: moment().format('MMM DD YYYY hh:mm'),
    };
  }
  componentDidMount() {
    this.props.getPrayers();
  }
  onChangeTitle = (titleText) => {
    this.setState({ title: titleText });
  };
  createPrayer = () => {
    const { title, description } = this.state;
    const { column } = this.props;
    if (title !== '') {
      this.props.addPrayer({ title, description, column });
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
        createPrayer={this.createPrayer}
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
    column: getPrayerColumn(state, props),
  };
};

const mapDispatchToProps = {
  getPrayers,
  addPrayer,
  toggleShowChecked,
};
export default connect(mapStateToProps, mapDispatchToProps)(ColumnScreen);
