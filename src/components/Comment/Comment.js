import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';
import Swipeout from 'react-native-swipeout';
import AddInput from '../common/AddInput';

const Comment = ({
  body,
  created,
  editCommentBody,
  commentId,
  deleteComment,
  profileName,
}) => {
  const [isEditComment, setIsEdit] = useState(false);
  const [newText, setCommentText] = useState(body);

  const handleIsEdit = () => {
    isEditComment ? setIsEdit(false) : setIsEdit(true);
  };

  const editCommentText = (commentText) => {
    setCommentText(commentText);
  };

  const setCommentBody = () => {
    editCommentBody({ newText, commentId });
    handleIsEdit();
  };

  const swipeOutBtn = [
    {
      text: 'delete',
      backgroundColor: '#AC5253',
      onPress: () => deleteComment({ commentId }),
    },
  ];

  if (isEditComment) {
    return (
      <AddInput
        width={24}
        height={24}
        containerHeight={79}
        onBlur={setCommentBody}
        onPress={setCommentBody}
        onChange={editCommentText}
        title={newText}
      />
    );
  }
  return (
    <Swipeout right={swipeOutBtn} style={styles.swipeOut}>
      <View style={styles.container}>
        <View style={styles.avatar}></View>
        <View>
          <View style={styles.commentHead}>
            <Text style={styles.authorName}>{profileName}</Text>
            <Text style={styles.commentCreated}>
              {moment(created).fromNow()}
            </Text>
          </View>
          <TouchableOpacity onLongPress={() => handleIsEdit()}>
            <Text style={styles.commentBody}>{body}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Swipeout>
  );
};

const styles = StyleSheet.create({
  swipeOut: {
    backgroundColor: '#fff',
  },
  container: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderTopWidth: 1,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
  },
  avatar: {
    width: 46,
    height: 46,
    backgroundColor: '#BFB393',
    borderRadius: 40,
    marginRight: 9,
  },
  commentHead: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  authorName: {
    fontSize: 17,
    color: '#514D47',
    marginRight: 6,
    fontWeight: 'bold',
  },
  commentCreated: {
    fontSize: 13,
    color: '#9C9C9C',
    paddingBottom: 1,
  },
  commentBody: {
    fontSize: 17,
    color: '#514D47',
    paddingLeft: 3,
  },
});

export default Comment;
