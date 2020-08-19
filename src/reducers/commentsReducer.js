export const FETCH_COMMENTS = 'FETCH-COMMENTS';
export const SET_NEW_COMMENT = 'SET-NEW-COMMENT';
export const EDIT_COMMENT = 'EDIT-COMMENT';
export const DELETE_COMMENT = 'DELETE-COMMENT';

const initialState = {
  comments: [],
};

const actionMap = {
  [FETCH_COMMENTS]: (state, action) => {
    return {
      ...state,
      comments: action.payload.comments,
    };
  },
  [SET_NEW_COMMENT]: (state, action) => {
    return {
      ...state,
      comments: [...state.comments, action.payload.comment],
    };
  },
  [EDIT_COMMENT]: (state, action) => {
    return {
      ...state,
      comments: state.comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            body: action.payload.commentBody,
          };
        } else {
          return comment;
        }
      }),
    };
  },
  [DELETE_COMMENT]: (state, action) => {
    return {
      ...state,
      comments: state.comments.filter(
        (comment) => comment.id !== action.payload.commentId,
      ),
    };
  },
};

export default function commentsReducer(state = initialState, action) {
  const reduceFn = actionMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}
