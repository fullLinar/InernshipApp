import React from 'react';
import Registration from '../components/Registration';

class RegistrationScreen extends React.Component {
  submitRegistrationData = () => {};
  render() {
    return (
      <Registration
        navigation={this.props.navigation}
        submitRegistrationData={this.submitRegistrationData}
      />
    );
  }
}

export default RegistrationScreen;
