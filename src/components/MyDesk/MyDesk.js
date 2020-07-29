import React from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';
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
          })
        }
      />
    );
  };
  return (
    <View style={{ backgroundColor: '#fff', padding: 15, flex: 1 }}>
      {props.isAddInput ? (
        <AddInput
          setColumnTitle={props.setColumnTitle}
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

export default MyDesk;
