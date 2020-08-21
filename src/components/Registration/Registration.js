import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from '../../styles/styles';
import CustomButton from '../common/CustomButton';
import { Form, Field } from 'react-final-form';

const Registration = ({
  name,
  email,
  pass,
  submitRegistrationData,
  navigation,
}) => {
  const onSubmit = (values) => {
    submitRegistrationData(values);
  };

  const renderNameInput = ({ input, meta }) => {
    return (
      <View>
        <TextInput style={styles.textInput} {...input} />
        {meta.error && meta.touched && <Text>{meta.error}</Text>}
      </View>
    );
  };

  const renderEmailInput = ({ input, meta }) => {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          {...input}
          textContentType={'emailAddress'}
          autoCapitalize={'none'}
        />
        {meta.error && meta.touched && <Text>{meta.error}</Text>}
      </View>
    );
  };

  const renderPasswordInput = ({ input, meta }) => {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          {...input}
          textContentType={'password'}
          secureTextEntry={true}
        />
        {meta.error && meta.touched && <Text>{meta.error}</Text>}
      </View>
    );
  };

  const required = (value) => {
    if (!value || value === '') {
      return 'Заполните поле!';
    } else {
      return undefined;
    }
  };

  const validateEmail = (value) => {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(value) === false) {
      return 'Введите корректный e-mail';
    } else {
      return undefined;
    }
  };

  const composeValidators = (...validators) => (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined,
    );

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <View style={styles.container}>
          <Text style={styles.subTitles}>Name:</Text>
          <Field
            name="name"
            component={renderNameInput}
            validate={required}
            value={name}
          />
          <Text style={styles.subTitles}>Email:</Text>
          <Field
            name="email"
            component={renderEmailInput}
            validate={composeValidators(required, validateEmail)}
            value={email}
          />
          <Text style={styles.subTitles}>Password:</Text>
          <Field
            name="password"
            component={renderPasswordInput}
            validate={required}
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
