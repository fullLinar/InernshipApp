import React from 'react';
import LogIn from '../components/LogIn';
import { connect } from 'react-redux';
import { onChangeAuth } from '../actions/authActions';

class LoginScreen extends React.Component {
  logIn = () => {
    this.props.onChangeAuth();
  };
  render() {
    return <LogIn navigation={this.props.navigation} logIn={this.logIn} />;
  }
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {
  onChangeAuth,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
