import React from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';
import ColumnButton from '../common/ColumnButton/ColumnButton';
import AddInput from '../common/AddInput';
const MyDesk = (props) => {
  const columns = props.columns.map((column) => column);

  const renderColumns = ({ item, onPress }) => {
    return <ColumnButton title={item.title} onPress={() => onPress} />;
  };
  return (
    <View style={{ backgroundColor: '#fff', padding: 15, flex: 1 }}>
      {props.isAddInput ? (
        <AddInput setColumnTitle={props.setColumnTitle} />
      ) : (
        <></>
      )}
      {!props.isFetching ? (
        <FlatList
          data={columns}
          renderItem={renderColumns}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text>is fetching</Text>
      )}
      <Button title="add col" onPress={props.setNewColumn} />
    </View>
  );
};

export default MyDesk;
