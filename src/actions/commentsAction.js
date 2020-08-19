import {
  FETCH_COMMENTS,
  SET_NEW_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
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

const setNewComment = (comment) => {
  return {
    type: SET_NEW_COMMENT,
    payload: { comment },
  };
};

const editComment = (commentId, commentBody) => {
  return {
    type: EDIT_COMMENT,
    payload: {
      commentId,
      commentBody,
    },
  };
};

const dleteComment = (commentId) => {
  return {
    type: DELETE_COMMENT,
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

export const getCommentsFromApi = () => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();

    ApiServices.getComments(token).then(({ data }) => {
      if (data) {
        dispatch(fetchComments(data));
        dispatch(toggleIsFetching(false));
      }
    });
  };
};

export const setNewCommentToApi = (commentBody, prayerId) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();
    ApiServices.setComment(commentBody, prayerId, token)
      .then(({ data }) => {
        if (data) {
          dispatch(setNewComment(data));
          dispatch(setCommentId(prayerId, data.id));
          dispatch(toggleIsFetching(false));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(toggleIsFetching(false));
      });
  };
};

export const setCommentNewTitle = (commentBody, commentId) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();
    ApiServices.editComment(commentBody, commentId, token).then(({ data }) => {
      if (data.id) {
        dispatch(editComment(data.id, data.body));
        dispatch(toggleIsFetching(false));
      }
    });
  };
};

export const deleteCommentFromApi = (commentId) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();
    ApiServices.deleteComment(commentId, token).then(({ data }) => {
      if (data.raw) {
        dispatch(dleteComment(commentId));
        dispatch(toggleIsFetching(false));
      }
    });
  };
};
