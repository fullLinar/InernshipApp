export const FETCH_COMMENTS = 'FETCH-COMMENTS';
export const FETCH_ADDED_COMMENT = 'FETCH-ADDED-COMMENT';
export const FETCH_EDITED_COMMENT = 'FETCH-EDITED-COMMENT';
export const FETCH_DELETED_COMMENT = 'FETCH-DELETED-COMMENT';

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
  [FETCH_ADDED_COMMENT]: (state, action) => {
    return {
      ...state,
      comments: [...state.comments, action.payload.comment],
    };
  },
  [FETCH_EDITED_COMMENT]: (state, action) => {
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
  [FETCH_DELETED_COMMENT]: (state, action) => {
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
