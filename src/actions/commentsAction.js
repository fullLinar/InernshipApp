import {
  FETCH_COMMENTS,
  FETCH_ADDED_COMMENT,
  FETCH_EDITED_COMMENT,
  FETCH_DELETED_COMMENT,
} from '../reducers/commentsReducer';
import { SET_COMMENT_ID } from '../reducers/prayersReducer';
import { toggleIsFetching } from './columnActions';
import ApiServices from '../utils/ApiService';
import { retrieveToken } from '../utils/utils';

const fetchComments = (comments) => {
  return {
    type: FETCH_COMMENTS,
    payload: { comments },
  };
};

const fetchAddedComment = (comment) => {
  return {
    type: FETCH_ADDED_COMMENT,
    payload: { comment },
  };
};

const fetchEditedComment = (commentId, commentBody) => {
  return {
    type: FETCH_EDITED_COMMENT,
    payload: {
      commentId,
      commentBody,
    },
  };
};

const fetchDeletedComment = (commentId) => {
  return {
    type: FETCH_DELETED_COMMENT,
    payload: {
      commentId,
    },
  };
};

const setCommentId = (prayerId, commentId) => {
  return {
    type: SET_COMMENT_ID,
    payload: {
      prayerId,
      commentId,
    },
  };
};
//-----------------------Thunks--------------------------

export const getComments = () => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();
    const { data } = await ApiServices.getComments(token);
    try {
      dispatch(fetchComments(data));
      dispatch(toggleIsFetching(false));
    } catch (err) {
      throw err;
    }
  };
};

export const addComment = (commentBody, prayerId) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();
    const { data } = await ApiServices.setComment(commentBody, prayerId, token);
    try {
      dispatch(fetchAddedComment(data));
      dispatch(setCommentId(prayerId, data.id));
      dispatch(toggleIsFetching(false));
    } catch (err) {
      throw err;
    }
  };
};

export const editComment = (commentBody, commentId) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();
    const { data } = await ApiServices.editComment(
      commentBody,
      commentId,
      token,
    );
    try {
      dispatch(fetchEditedComment(data.id, data.body));
      dispatch(toggleIsFetching(false));
    } catch (err) {
      throw err;
    }
  };
};

export const deleteComment = (commentId) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();
    await ApiServices.deleteComment(commentId, token);
    try {
      dispatch(fetchDeletedComment(commentId));
      dispatch(toggleIsFetching(false));
    } catch (err) {
      throw err;
    }
  };
};
