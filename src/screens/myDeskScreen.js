import React from 'react';
import MyDesk from '../components/MyDesk/MyDesk';
import { connect } from 'react-redux';
import {
  getToken,
  getColumnsList,
  getIsFetching,
  getIsAddInput,
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
    const columnData = {
      title: this.props.columnTitle,
      description: 'some descr',
    };
    this.props.setColumnToAPI(columnData, this.props.token);
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
    columnTitle: state.columnsData.columnTitle,
    columnDescr: state.columnsData.columnDescription,
  };
};

const mapDispatchToProps = {
  setColumnsFromAPI,
  setColumnToAPI,
  setColumnTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyDeskScreen);
