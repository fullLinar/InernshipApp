import React from 'react';
import MyDesk from '../components/MyDesk/MyDesk';
import { connect } from 'react-redux';
import {
  getColumnsList,
  getIsFetching,
  getIsAddInput,
} from '../selectors/selectors';
import {
  setColumnsFromAPI,
  setColumnToAPI,
  deleteColumnFromAPI,
  editColumnTitle,
} from '../actions/columnActions';
class MyDeskScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };
  }
  componentDidMount() {
    this.props.setColumnsFromAPI();
  }

  setNewColumn = () => {
    if (this.state.title !== '') {
      this.props.setColumnToAPI(this.state);
    }
  };

  setColumnTitle = (titleText) => {
    this.setState({ title: titleText });
  };

  deleteColumn = async (colId) => {
    await this.props.deleteColumnFromAPI(colId);
  };

  editColumnTitle = (colTitle, descr, colId) => {
    let columnData = {
      title: colTitle,
      description: descr,
    };
    this.props.editColumnTitle(columnData, colId);
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
  };
};

const mapDispatchToProps = {
  setColumnsFromAPI,
  setColumnToAPI,
  deleteColumnFromAPI,
  editColumnTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyDeskScreen);
