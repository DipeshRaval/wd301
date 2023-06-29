export type CommentData = {
  task_id: number;
  description : string;
  owner :Number,
  createdAt: string
};

export interface CommentsState {
  comments: CommentData[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export const initialState: CommentsState = {
  comments: [],
  isLoading: false,
  isError: false,
  errorMessage: ''
};

export type CommentsActions =
  | { type: 'FETCH_TASKS_COMMENTS_REQUEST' }
  | { type: 'FETCH_TASKS_COMMENTS_SUCCESS'; payload: CommentData[] }
  | { type: 'FETCH_TASKS_COMMENTS_FAILURE'; payload: string }
  | { type: 'ADD_COMMENT_REQUEST' }
  | { type: 'ADD_COMMENT_SUCCESS' }
  | { type: 'ADD_COMMENT_FAILURE'; payload: string }


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
