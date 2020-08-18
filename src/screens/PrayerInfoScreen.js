import React from 'react';
import PrayerInfo from '../components/PrayerInfo';
import { connect } from 'react-redux';
import {
  getCommentsFromApi,
  setNewCommentToApi,
} from '../actions/commentsAction';
import { getPrayerCommetsId, getComments } from '../selectors/selectors';

class PrayerInfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      created: `${this.props.route.params.prayerId}`,
    };
  }
  componentDidMount() {
    this.props.getCommentsFromApi();
  }

  onCHangeCommentBody = (bodyText) => {
    this.setState({ body: bodyText });
  };

  addComment = async () => {
    const prayerId = this.props.route.params.prayerId;
    await this.props.setNewCommentToApi(this.state, prayerId);
    this.setState({ body: '' });
  };

  render() {
    return (
      <PrayerInfo
        date={this.props.route.params.date}
        comments={this.props.comments}
        commentsIds={this.props.prayerCommentsId}
        onCHangeCommentBody={this.onCHangeCommentBody}
        commentBody={this.state.body}
        addComment={this.addComment}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    comments: getComments(state),
    prayerCommentsId: getPrayerCommetsId(state, props),
  };
};

const mapDispatchToProps = {
  getCommentsFromApi,
  setNewCommentToApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrayerInfoScreen);
