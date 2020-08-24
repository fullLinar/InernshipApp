import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../styles/styles';
import CustomButton from '../common/CustomButton';
import FormField from '../common/FormField';
import { Form, Field } from 'react-final-form';
import {
  validateRequiredField,
  validateEmail,
  composeValidators,
} from '../../utils/utils';

const Registration = ({
  name,
  email,
  pass,
  submitRegistrationData,
  navigation,
}) => {
  const onSubmit = (values) => {
    const registData = values;
    submitRegistrationData({ registData });
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <View style={styles.container}>
          <Text style={styles.subTitles}>Name:</Text>
          <Field
            name="name"
            component={FormField}
            validate={validateRequiredField}
            textContentType={'name'}
            autoCapitalize="sentences"
            value={name}
          />
          <Text style={styles.subTitles}>Email:</Text>
          <Field
            name="email"
            component={FormField}
            validate={composeValidators(validateRequiredField, validateEmail)}
            textContentType={'emailAddress'}
            value={email}
          />
          <Text style={styles.subTitles}>Password:</Text>
          <Field
            name="password"
            component={FormField}
            validate={validateRequiredField}
            textContentType={'password'}
            secureTextEntry={true}
            value={pass}
          />
          <CustomButton
            style={styles.button}
            title="Registration"
            onPress={handleSubmit}
          />
          <CustomButton
            title="Log In"
            onPress={() => navigation.navigate('LogIn')}
          />
        </View>
      )}
    />
  );
};

export default Registration;
