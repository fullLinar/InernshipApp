import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from '../../styles/styles';
import CustomButton from '../common/CustomButton';

const Registration = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subTitles}>Name:</Text>
      <TextInput
        style={styles.textInput}
        value={props.name}
        onChangeText={(nameText) => props.onChangeName(nameText)}
      />
      <Text style={styles.subTitles}>Email:</Text>
      <TextInput
        style={styles.textInput}
        textContentType={'emailAddress'}
        autoCapitalize={'none'}
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
      <CustomButton
        style={styles.button}
        title="Registration"
        onPress={() => props.submitRegistrationData()}
      />
      <CustomButton
        title="Log In"
        onPress={() => props.navigation.navigate('LogIn')}
      />
    </View>
  );
};

export default Registration;
