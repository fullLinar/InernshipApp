import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ColumnButton from '../common/ColumnButton/ColumnButton';
import AddInput from '../common/AddInput';
import Preloader from '../Preloader/Preloader';
const MyDesk = (props) => {
  const columns = props.columns.map((column) => column);
  const renderColumns = ({ item }) => {
    return (
      <ColumnButton
        title={item.title}
        onPress={() =>
          props.navigation.navigate('Column', {
            title: item.title,
            colId: item.id,
          })
        }
        colId={item.id}
        descr={item.description}
        onPressDelete={props.deleteColumn}
        editColumnTitle={props.editColumnTitle}
      />
    );
  };
  return (
    <View style={styles.container}>
      {props.isAddInput ? (
        <AddInput
          onChange={props.setColumnTitle}
          onPress={props.setNewColumn}
          width={24}
          height={24}
        />
      ) : (
        <></>
      )}
      {!props.isFetching ? (
        <FlatList
          data={columns}
          renderItem={renderColumns}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Preloader />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    flex: 1,
  },
});

export default MyDesk;
