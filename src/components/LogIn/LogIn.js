import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../../styles/styles';
import CustomButton from '../common/CustomButton';

const LogIn = ({
  email,
  pass,
  onChangeEmail,
  onChangePassword,
  navigation,
  logIn,
}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.subTitles}>Email:</Text>
        <TextInput
          style={styles.textInput}
          textContentType={'emailAddress'}
          value={email}
          onChangeText={(emailText) => onChangeEmail(emailText)}
          autoCorrect={false}
          autoCapitalize={'none'}
        />
        <Text style={styles.subTitles}>Password:</Text>
        <TextInput
          style={styles.textInput}
          textContentType={'password'}
          secureTextEntry={true}
          value={pass}
          onChangeText={(passText) => onChangePassword(passText)}
        />
        <CustomButton title="Log In" onPress={() => logIn()} />
        <CustomButton
          title="Registration"
          onPress={() => navigation.goBack()}
        />
      </View>
    </>
  );
};

export default LogIn;
