import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

const Comment = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}></View>
      <View>
        <View style={styles.commentHead}>
          <Text style={styles.authorName}> Author Name</Text>
          <Text style={styles.commentCreated}>
            {moment(props.created).fromNow()}
          </Text>
        </View>
        <View>
          <Text style={styles.commentBody}>{props.body}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
