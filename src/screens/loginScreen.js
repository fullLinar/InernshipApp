import React from 'react';
import LogIn from '../components/LogIn';
import { connect } from 'react-redux';
import { submitLogIn } from '../actions/authActions';
class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  logIn = () => {
    this.props.submitLogIn(this.state);
  };

  onChangeEmail = (emailText) => {
    this.setState({ email: emailText });
  };

  onChangePassword = (passText) => {
    this.setState({ password: passText });
  };
  render() {
    return (
      <LogIn
        navigation={this.props.navigation}
        logIn={this.logIn}
        onChangeEmail={this.onChangeEmail}
        onChangePassword={this.onChangePassword}
        email={this.state.email}
        pass={this.state.password}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {
  submitLogIn,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
