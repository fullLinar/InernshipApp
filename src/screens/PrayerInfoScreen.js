import React from 'react';
import PrayerInfo from '../components/PrayerInfo';
import { connect } from 'react-redux';
import {
  getCommentsFromApi,
  setNewCommentToApi,
  deleteCommentFromApi,
  setCommentNewTitle,
} from '../actions/commentsAction';
import {
  getPrayerCommetsId,
  getComments,
  getProfileName,
  getIsFetching,
} from '../selectors/selectors';

class PrayerInfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      created: `${this.props.route.params.prayerId}`,
    };
  }

  onCHangeCommentBody = (bodyText) => {
    this.setState({ body: bodyText });
  };

  addComment = async () => {
    const prayerId = this.props.route.params.prayerId;
    if (this.state.body !== '') {
      await this.props.setNewCommentToApi(this.state, prayerId);
      this.setState({ body: '' });
    }
  };

  deleteComment = (commentId) => {
    this.props.deleteCommentFromApi(commentId);
  };

  editCommentBody = (commentText, commentId) => {
    const commentBody = {
      body: commentText,
      created: `${this.props.route.params.prayerId}`,
    };
    this.props.setCommentNewTitle(commentBody, commentId);
  };

  render() {
    return (
      <PrayerInfo
        profileName={this.props.profileName}
        date={this.props.route.params.date}
        comments={this.props.comments}
        commentsIds={this.props.prayerCommentsId}
        onCHangeCommentBody={this.onCHangeCommentBody}
        editCommentBody={this.editCommentBody}
        commentBody={this.state.body}
        addComment={this.addComment}
        deleteComment={this.deleteComment}
        isFetching={this.props.isFetching}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    comments: getComments(state),
    prayerCommentsId: getPrayerCommetsId(state, props),
    profileName: getProfileName(state),
    isFetching: getIsFetching(state),
  };
};

const mapDispatchToProps = {
  getCommentsFromApi,
  setNewCommentToApi,
  deleteCommentFromApi,
  setCommentNewTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrayerInfoScreen);
