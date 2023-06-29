import { CommentsState, CommentsActions } from "./types"

export const initialState: CommentsState = {
  comments: [],
  isLoading: false,
  isError: false,
  errorMessage: ''
};


export const reducer = (state: CommentsState = initialState, action: CommentsActions): CommentsState => {
  switch (action.type) {
    case "FETCH_TASKS_COMMENTS_REQUEST":
      return {
        ...state,
        isLoading: true
      };
    case "FETCH_TASKS_COMMENTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        comments: action.payload,
      };
    case "FETCH_TASKS_COMMENTS_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload
      };
    case "ADD_COMMENT_REQUEST":
      return {
        ...state,
        isLoading: true
      };
    case 'ADD_COMMENT_SUCCESS':
      return { ...state,isLoading:false };
    case "ADD_COMMENT_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}
