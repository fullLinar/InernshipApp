import React from 'react';
import MyDesk from '../components/MyDesk/MyDesk';
import { connect } from 'react-redux';
import {
  getToken,
  getColumnsList,
  getIsFetching,
  getIsAddInput,
  getColumnData,
} from '../selectors/selectors';
import {
  setColumnsFromAPI,
  setColumnToAPI,
  setColumnTitle,
} from '../actions/columnActions';
class MyDeskScreen extends React.Component {
  componentDidMount() {
    this.props.setColumnsFromAPI(this.props.token);
  }
  setNewColumn = () => {
    const { newColumnData, token } = this.props;
    if (newColumnData.title !== '') {
      this.props.setColumnToAPI(newColumnData, token);
    }
  };
  setColumnTitle = (titleText) => {
    this.props.setColumnTitle(titleText);
  };
  render() {
    return (
      <MyDesk
        isFetching={this.props.isFetching}
        columns={this.props.columns}
        isAddInput={this.props.isAddInput}
        setNewColumn={this.setNewColumn}
        setColumnTitle={this.setColumnTitle}
        navigation={this.props.navigation}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: getToken(state),
    columns: getColumnsList(state),
    isFetching: getIsFetching(state),
    isAddInput: getIsAddInput(state),
    newColumnData: getColumnData(state),
  };
};

const mapDispatchToProps = {
  setColumnsFromAPI,
  setColumnToAPI,
  setColumnTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyDeskScreen);
