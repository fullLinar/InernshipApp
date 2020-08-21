import React from 'react';
import Registration from '../components/Registration';
import { connect } from 'react-redux';
import { submitRegistration } from '../actions/authActions';
class RegistrationScreen extends React.Component {
  render() {
    return (
      <Registration
        navigation={this.props.navigation}
        submitRegistrationData={this.props.submitRegistration}
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
