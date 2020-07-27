import React from 'react';
import LogIn from '../components/LogIn';
import { connect } from 'react-redux';
import { setEmail, setPassword, submitLogIn } from '../actions/authActions';
import { getLogInData } from '../selectors/selectors';
class LoginScreen extends React.Component {
  logIn = () => {
    this.props.submitLogIn(this.props.logInData);
  };

  onChangeEmail = (emailText) => {
    this.props.setEmail({ emailText });
  };

  onChangePassword = (passText) => {
    this.props.setPassword({ passText });
  };
  render() {
    return (
      <LogIn
        navigation={this.props.navigation}
        logIn={this.logIn}
        onChangeEmail={this.onChangeEmail}
        onChangePassword={this.onChangePassword}
        email={this.props.logInData.email}
        pass={this.props.logInData.password}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    logInData: getLogInData(state),
  };
};
const mapDispatchToProps = {
  submitLogIn,
  setEmail,
  setPassword,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
