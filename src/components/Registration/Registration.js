import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from '../../styles/styles';
import CustomButton from '../CustomButton/CustomButton';

const Registration = ({ navigation, submitRegistrationData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subTitles}>Name:</Text>
      <TextInput style={styles.textInput} />
      <Text style={styles.subTitles}>Email:</Text>
      <TextInput style={styles.textInput} textContentType={'emailAddress'} />
      <Text style={styles.subTitles}>Password:</Text>
      <TextInput
        style={styles.textInput}
        extContentType={'password'}
        secureTextEntry={true}
      />
      <CustomButton
        style={styles.button}
        title="Registration"
        onPress={() => submitRegistrationData()}
      />
      <CustomButton
        title="Log In"
        onPress={() => navigation.navigate('LogIn')}
      />
    </View>
  );
};

export default Registration;
