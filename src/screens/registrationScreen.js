import React from 'react';
import Registration from '../components/Registration';
import { connect } from 'react-redux';
import {
  setName,
  setEmail,
  setPassword,
  submitRegistration,
} from '../actions/authActions';
import { getRegistData } from '../selectors/selectors';
class RegistrationScreen extends React.Component {
  submitRegistrationData = () => {
    this.props.submitRegistration(this.props.registData);
  };

  onChangeName = (nameText) => {
    this.props.setName({ nameText });
  };

  onChangeEmail = (emailText) => {
    this.props.setEmail({ emailText });
  };

  onChangePassword = (passText) => {
    this.props.setPassword({ passText });
  };
  render() {
    return (
      <Registration
        navigation={this.props.navigation}
        submitRegistrationData={this.submitRegistrationData}
        onChangeName={this.onChangeName}
        onChangeEmail={this.onChangeEmail}
        onChangePassword={this.onChangePassword}
        email={this.props.registData.email}
        pass={this.props.registData.password}
        name={this.props.registData.name}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    registData: getRegistData(state),
  };
};

const mapDispatchToProps = {
  setName,
  setEmail,
  setPassword,
  submitRegistration,
};
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationScreen);
