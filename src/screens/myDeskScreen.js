import React from 'react';
import MyDesk from '../components/MyDesk/MyDesk';
import { connect } from 'react-redux';
import {
  getColumnsList,
  getIsFetching,
  getIsAddInput,
  getColumnData,
} from '../selectors/selectors';
import {
  setColumnsFromAPI,
  setColumnToAPI,
  setColumnTitle,
  deleteColumnFromAPI,
  editColumnTitle,
} from '../actions/columnActions';
class MyDeskScreen extends React.Component {
  componentDidMount() {
    this.props.setColumnsFromAPI();
  }

  setNewColumn = () => {
    const { newColumnData } = this.props;
    if (newColumnData.title !== '') {
      this.props.setColumnToAPI(newColumnData);
    }
  };

  setColumnTitle = (titleText) => {
    this.props.setColumnTitle(titleText);
  };

  deleteColumn = (colId) => {
    this.props.deleteColumnFromAPI(colId);
    this.props.setColumnsFromAPI();
  };

  editColumnTitle = (colTitle, colId) => {
    let columnData = {
      title: colTitle,
      description: '',
    };
    this.props.editColumnTitle(columnData, colId);
    this.props.setColumnsFromAPI();
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
        deleteColumn={this.deleteColumn}
        editColumnTitle={this.editColumnTitle}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    columns: getColumnsList(state),
    isFetching: getIsFetching(state),
    isAddInput: getIsAddInput(state),
    newColumnData: getColumnData(state),
  };
};

const mapDispatchToProps = {
  setColumnsFromAPI,
  setColumnToAPI,
  deleteColumnFromAPI,
  setColumnTitle,
  editColumnTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyDeskScreen);
