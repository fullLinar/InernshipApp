import React from 'react';
import LogIn from '../components/LogIn/LogIn';

class LoginScreen extends React.Component {
  render() {
    return <LogIn navigation={this.props.navigation} />;
  }
}

export default LoginScreen;
