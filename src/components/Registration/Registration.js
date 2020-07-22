import React from 'react';
import {Wview, Text, TextInput, Button, StyleSheet, View} from 'react-native';
import {styles} from '../../styles/styles';
import CustomButton from '../CustomButton/CustomButton';

const Registrattion = ({navigation}) => {
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
        onPress={() => console.log('regist')}
      />
      <CustomButton
        title="Log In"
        onPress={() => navigation.navigate('LogIn')}
      />
    </View>
  );
};

export default Registrattion;
