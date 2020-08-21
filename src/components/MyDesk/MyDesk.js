import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ColumnButton from '../common/ColumnButton/ColumnButton';
import AddInput from '../common/AddInput';
import Preloader from '../Preloader/Preloader';
const MyDesk = ({
  columns,
  navigation,
  deleteColumn,
  editColumnTitle,
  setColumnTitle,
  createColumn,
  isFetching,
  isAddInput,
}) => {
  const renderColumns = ({ item }) => {
    return (
      <ColumnButton
        title={item.title}
        onPress={() =>
          navigation.navigate('Column', {
            title: item.title,
            colId: item.id,
          })
        }
        colId={item.id}
        descr={item.description}
        onPressDelete={deleteColumn}
        editColumnTitle={editColumnTitle}
      />
    );
  };

  if (isFetching) {
    return <Preloader />;
  }

  return (
    <View style={styles.container}>
      {isAddInput ? (
        <AddInput
          onChange={setColumnTitle}
          onPress={createColumn}
          width={24}
          height={24}
        />
      ) : (
        <></>
      )}
      <FlatList
        data={columns}
        renderItem={renderColumns}
        keyExtractor={(item) => item.id.toString()}
      />
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
