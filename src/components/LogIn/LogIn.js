import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../../styles/styles';
import CustomButton from '../CustomButton/CustomButton';

const LogIn = ({ navigation, logIn }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.subTitles}>Email:</Text>
        <TextInput style={styles.textInput} textContentType={'emailAddress'} />
        <Text style={styles.subTitles}>Password</Text>
        <TextInput
          style={styles.textInput}
          textContentType={'password'}
          secureTextEntry={true}
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
