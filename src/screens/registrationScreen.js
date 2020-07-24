import React from 'react';
import Registration from '../components/Registration';
import axios from 'axios';

class RegistrationScreen extends React.Component {
  submitRegistrationData = () => {
    const authData = {
      email: 'a_linar94@mail.ru',
      password: 'testpass',
      name: 'Linar',
    };
    axios
      .post('https://trello-purrweb.herokuapp.com/auth/sign-up', authData)
      .then((response) => console.log(response));
  };
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
