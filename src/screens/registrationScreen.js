import React from 'react';
import Registration from '../components/Registration';
import { connect } from 'react-redux';
import { submitRegistration } from '../actions/authActions';
class RegistrationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }
  submitRegistrationData = () => {
    this.props.submitRegistration(this.state);
  };

  onChangeName = (nameText) => {
    this.setState({ name: nameText });
  };

  onChangeEmail = (emailText) => {
    this.setState({ email: emailText });
  };

  onChangePassword = (passText) => {
    this.setState({ password: passText });
  };
  render() {
    return (
      <Registration
        navigation={this.props.navigation}
        submitRegistrationData={this.submitRegistrationData}
        onChangeName={this.onChangeName}
        onChangeEmail={this.onChangeEmail}
        onChangePassword={this.onChangePassword}
        email={this.state.email}
        pass={this.state.password}
        name={this.state.name}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  submitRegistration,
};
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationScreen);
