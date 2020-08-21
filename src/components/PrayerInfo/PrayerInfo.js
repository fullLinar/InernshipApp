import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import PlusIcon from '../SvgIcons/PlusIcon';
import moment from 'moment';
import { TextInput } from 'react-native-gesture-handler';
import CommentIcon from '../SvgIcons/CommentIcon';
import Comment from '../Comment/Comment';
import Preloader from '../Preloader/Preloader';

const PrayerInfo = ({
  commentsIds,
  comments,
  profileName,
  deleteComment,
  editCommentBody,
  date,
  onChangeCommentBody,
  addComment,
  commentBody,
  isFetching,
}) => {
  const renderComments = () => {
    if (commentsIds) {
      return commentsIds.map((comId) => {
        return comments.map((comment) => {
          if (comment.id === comId) {
            return (
              <Comment
                profileName={profileName}
                body={comment.body}
                created={comment.created}
                key={comment.id}
                commentId={comment.id}
                deleteComment={deleteComment}
                editCommentBody={editCommentBody}
              />
            );
          }
        });
      });
    }
  };

  if (isFetching) {
    return <Preloader />;
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.lastPrayed}>
          {moment(date, 'MMM DD YYYY hh:mm').fromNow()}
        </Text>
      </View>
      <View style={styles.infoGrid}>
        <View style={styles.infoGridItem}>
          <Text style={styles.infoGridDate}>{date}</Text>
          <Text style={styles.infoGridText}>Date Added</Text>
          <Text style={(styles.infoGridText, styles.infoGridLink)}>
            Opened for 4 days
          </Text>
        </View>
        <View style={styles.infoGridItem}>
          <Text style={styles.infoGridItemCount}>123</Text>
          <Text style={styles.infoGridText}>Times Prayed Total</Text>
        </View>
        <View style={styles.infoGridItem}>
          <Text style={styles.infoGridItemCount}>63</Text>
          <Text style={styles.infoGridText}>Times Prayed by Me</Text>
        </View>
        <View style={styles.infoGridItem}>
          <Text style={styles.infoGridItemCount}>60</Text>
          <Text style={styles.infoGridText}>Times Prayed by Others</Text>
        </View>
      </View>
      <View style={styles.membersWrap}>
        <Text style={styles.subtitle}>members</Text>
        <View style={styles.memberItems}>
          <View style={styles.addMemberBtn}>
            <PlusIcon fill="#fff" />
          </View>
        </View>
      </View>
      <View style={styles.commentsWrap}>
        <Text style={styles.subtitle}>comments</Text>
      </View>
      <View>{renderComments()}</View>
      <View style={styles.commentInputWrap}>
        <CommentIcon />
        <TextInput
          style={styles.commentInput}
          multiline={true}
          autoCorrect={false}
          placeholder={'Add a comment...'}
          onChangeText={(bodyText) => onChangeCommentBody(bodyText)}
          value={commentBody}
          onBlur={addComment}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  lastPrayed: {
    fontSize: 17,
    padding: 15,
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  infoGridItem: {
    width: '50%',
    minHeight: 108,
    paddingHorizontal: 15,
    paddingVertical: 26,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  infoGridDate: {
    fontSize: 22,
    color: '#BFB393',
    marginBottom: 6,
  },
  infoGridItemCount: {
    fontSize: 37,
    color: '#BFB393',
  },
  infoGridText: {
    fontSize: 13,
  },
  infoGridLink: {
    color: '#72A8BC',
  },
  membersWrap: {
    paddingHorizontal: 15,
    marginBottom: 28,
  },
  subtitle: {
    textTransform: 'uppercase',
    fontSize: 13,
    marginBottom: 15,
    color: '#72A8BC',
  },
  memberItems: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  addMemberBtn: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BFB393',
    borderRadius: 30,
    margin: 3,
  },
  commentsWrap: {
    paddingHorizontal: 15,
  },
  commentInputWrap: {
    height: 56,
    paddingHorizontal: 18,
    marginBottom: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
  commentInput: {
    width: '90%',
    fontSize: 17,
    paddingHorizontal: 0,
    marginLeft: 12,
  },
});

export default PrayerInfo;
