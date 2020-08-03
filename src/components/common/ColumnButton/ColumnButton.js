import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Swipeout from 'react-native-swipeout';
import AddImput from '../AddInput';

const ColumnButton = ({
  onPress,
  onPressDelete,
  title,
  colId,
  editColumnTitle,
}) => {
  const [isEditTitle, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleIsEdit = () => {
    isEditTitle ? setIsEdit(false) : setIsEdit(true);
  };

  const editTitle = (titleText) => {
    setNewTitle(titleText);
  };

  const setTitle = () => {
    console.log('de');
    editColumnTitle(newTitle, colId);
  };

  const swipeOutBtn = [
    {
      text: 'delete',
      backgroundColor: '#AC5253',
      onPress: () => onPressDelete(colId),
    },
  ];
  return (
    <>
      {!isEditTitle ? (
        <Swipeout right={swipeOutBtn} style={styles.swipeBtn}>
          <TouchableOpacity
            onPress={onPress}
            style={styles.btnWrap}
            onLongPress={handleIsEdit}>
            <Text>{title}</Text>
          </TouchableOpacity>
        </Swipeout>
      ) : (
        <AddImput
          width={24}
          height={24}
          onPress={setTitle}
          onBlur={setTitle}
          title={newTitle}
          onChange={editTitle}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  btnWrap: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  swipeBtn: {
    backgroundColor: '#fff',
    height: 59,
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 5,
  },
});

export default ColumnButton;
