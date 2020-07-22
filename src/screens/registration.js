import React from 'react';
import Registration from '../components/Registration/Registration';

class RegistrationScreen extends React.Component {
  render() {
    return <Registration navigation={this.props.navigation} />;
  }
}

export default RegistrationScreen;
