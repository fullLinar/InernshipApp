import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../../styles/styles';
import CustomButton from '../common/CustomButton';

const LogIn = (props) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.subTitles}>Email:</Text>
        <TextInput
          style={styles.textInput}
          textContentType={'emailAddress'}
          value={props.email}
          onChangeText={(emailText) => props.onChangeEmail(emailText)}
        />
        <Text style={styles.subTitles}>Password:</Text>
        <TextInput
          style={styles.textInput}
          textContentType={'password'}
          secureTextEntry={true}
          value={props.pass}
          onChangeText={(passText) => props.onChangePassword(passText)}
        />
        <CustomButton title="Log In" onPress={() => props.logIn()} />
        <CustomButton
          title="Registration"
          onPress={() => props.navigation.goBack()}
        />
      </View>
    </>
  );
};

export default LogIn;
