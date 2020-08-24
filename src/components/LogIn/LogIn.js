import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/styles';
import CustomButton from '../common/CustomButton';
import FormField from '../common/FormField';
import { Form, Field } from 'react-final-form';
import {
  validateRequiredField,
  validateEmail,
  composeValidators,
} from '../../utils/utils';

const LogIn = ({ navigation, logIn, email, pass }) => {
  const onSubmit = (value) => {
    const logInData = value;
    logIn({ logInData });
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <View style={styles.container}>
          <Text style={styles.subTitles}>Email:</Text>
          <Field
            name="email"
            component={FormField}
            validate={composeValidators(validateRequiredField, validateEmail)}
            textContentType={'emailAddress'}
            value={email}
            onKeyPress={handleSubmit}
          />
          <Text style={styles.subTitles}>Password:</Text>
          <Field
            name="password"
            component={FormField}
            validate={validateRequiredField}
            textContentType={'password'}
            secureTextEntry={true}
            value={pass}
            onKeyPress={handleSubmit}
          />
          <CustomButton title="Log In" onPress={handleSubmit} />
          <CustomButton
            title="Registration"
            onPress={() => navigation.goBack()}
          />
        </View>
      )}
    />
  );
};

export default LogIn;
