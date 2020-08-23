import React from 'react';
import MyDesk from '../components/MyDesk/MyDesk';
import { connect } from 'react-redux';
import {
  getColumnsList,
  getIsFetching,
  getIsAddInput,
} from '../selectors/selectors';
import {
  getColumns,
  addColumn,
  deleteColumn,
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
    this.props.getColumns();
  }

  createColumn = () => {
    const { title, description } = this.state;
    const columnData = { title, description };
    const { addColumn } = this.props;

    if (title !== '') {
      addColumn({ columnData });
    }
  };

  setColumnTitle = (titleText) => {
    this.setState({ title: titleText });
  };

  editColumnTitle = ({ newTitle, descr, colId }) => {
    let columnData = {
      title: newTitle,
      description: descr,
    };
    const { editColumnTitle } = this.props;
    editColumnTitle({ columnData, colId });
  };
  render() {
    return (
      <MyDesk
        isFetching={this.props.isFetching}
        columns={this.props.columns}
        isAddInput={this.props.isAddInput}
        createColumn={this.createColumn}
        setColumnTitle={this.setColumnTitle}
        navigation={this.props.navigation}
        deleteColumn={this.props.deleteColumn}
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
  getColumns,
  addColumn,
  deleteColumn,
  editColumnTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyDeskScreen);
