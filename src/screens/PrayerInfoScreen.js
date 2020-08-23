import React from 'react';
import PrayerInfo from '../components/PrayerInfo';
import { connect } from 'react-redux';
import {
  getComments,
  addComment,
  deleteComment,
  editComment,
} from '../actions/commentsAction';
import {
  getPrayerCommentsId,
  getCommentsList,
  getProfileName,
  getIsFetching,
} from '../selectors/selectors';

class PrayerInfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.prayerId = this.props.route.params.prayerId;
    this.state = {
      body: '',
      created: `${this.prayerId}`,
    };
  }

  componentDidMount() {
    this.props.getComments();
  }

  onChangeCommentBody = (bodyText) => {
    this.setState({ body: bodyText });
  };

  addComment = async () => {
    const { body, created } = this.state;
    const commentBody = { body, created };
    const { addComment } = this.props;
    if (body !== '') {
      await addComment({ commentBody, prayerId: this.prayerId });
      this.setState({ body: '' });
    }
  };

  editCommentBody = ({ newText, commentId }) => {
    const commentBody = {
      body: newText,
      created: `${this.prayerId}`,
    };
    this.props.editComment({ commentBody, commentId });
  };

  render() {
    return (
      <PrayerInfo
        profileName={this.props.profileName}
        date={this.props.route.params.date}
        comments={this.props.comments}
        commentsIds={this.props.prayerCommentsId}
        onChangeCommentBody={this.onChangeCommentBody}
        editCommentBody={this.editCommentBody}
        commentBody={this.state.body}
        addComment={this.addComment}
        deleteComment={this.props.deleteComment}
        isFetching={this.props.isFetching}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    comments: getCommentsList(state),
    prayerCommentsId: getPrayerCommentsId(state, props),
    profileName: getProfileName(state),
    isFetching: getIsFetching(state),
  };
};

const mapDispatchToProps = {
  getComments,
  addComment,
  deleteComment,
  editComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrayerInfoScreen);
