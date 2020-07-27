import React from 'react';
import MyDesk from '../components/MyDesk/MyDesk';
import { connect } from 'react-redux';
import { getToken } from '../selectors/selectors';
import { setColumnsFromAPI } from '../actions/deskActions';
class myDeskScreen extends React.Component {
  componentDidMount() {
    this.props.setColumnsFromAPI(this.props.token);
    console.log(this.props.columns);
  }
  componentDidUpdate() {}
  render() {
    return <MyDesk isFetching={this.props.isFetching} />;
  }
}

const mapStateToProps = (state) => {
  return {
    token: getToken(state),
    columns: state.deskData.columns,
    isFetching: state.deskData.isFetching,
  };
};

const mapDispatchToProps = {
  setColumnsFromAPI,
};

export default connect(mapStateToProps, mapDispatchToProps)(myDeskScreen);
