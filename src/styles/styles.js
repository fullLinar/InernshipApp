import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
  },
  subTitles: {
    fontSize: 25,
    marginBottom: 5,
  },
  textInput: {
    height: 50,
    width: 345,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    marginBottom: 5,
    paddingHorizontal: 10,
    textTransform: 'none',
  },
  buttonContainer: {
    height: 30,
    width: 290,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BFB393',
    borderRadius: 15,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 12,
    color: '#fff',
  },
});
