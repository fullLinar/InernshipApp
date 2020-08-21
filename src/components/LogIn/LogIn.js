import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../../styles/styles';
import CustomButton from '../common/CustomButton';
import { Form, Field } from 'react-final-form';

const LogIn = ({ navigation, logIn, email, pass }) => {
  const onSubmit = (value) => {
    logIn(value);
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
