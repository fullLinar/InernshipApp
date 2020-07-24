import React from 'react';
import LogIn from '../components/LogIn';
import { connect } from 'react-redux';
import { onChangeAuth } from '../actions/authActions';
import axios from 'axios';

class LoginScreen extends React.Component {
  logIn = () => {
    const authData = {
      email: 'a_linar94@mail.ru',
      password: 'testpass',
    };
    const token =
      '64f40201de9dd40595ebddd84f74984802a9f0be3fb4ea8a2ba6c43cf42e8c8c';
    axios
      .get('https://trello-purrweb.herokuapp.com/cards', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => console.log(response.data));
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
