import { API_ENDPOINT } from "../../config/constants";
import { CommentsDispatch, CommentListAvailableAction } from "./types"

// get comments
export const fetchComments = async (
  dispatch: CommentsDispatch,
  projectID: string,
  taskID: string,
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: CommentListAvailableAction.FETCH_TASKS_COMMENTS_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to get comments");
    }

    // extract the response body as JSON data
    const data = await response.json();
    dispatch({
      type: CommentListAvailableAction.FETCH_TASKS_COMMENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentListAvailableAction.FETCH_TASKS_COMMENTS_FAILURE,
      payload: "Unable to load comments",
    });
  }
};

//create a comment
export const addComment = async (
  dispatch: CommentsDispatch,
  projectID: string,
  taskID: string,
  arg : any
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    // The following action will toggle `isLoading` to `true`
    dispatch({ type: CommentListAvailableAction.ADD_COMMENT_REQUEST });

    // Invoke the backend server with POST request and create a task.
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(arg),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create comment");
    }

    // Turn `isLoading` to `false`
    dispatch({ type: CommentListAvailableAction.ADD_COMMENT_SUCCESS ,});
    fetchComments(dispatch, projectID,taskID);
  } catch (error) {
    console.error("Operation failed:", error);
    // Update error status in the state.
    dispatch({
      type: CommentListAvailableAction.ADD_COMMENT_FAILURE,
      payload: "Unable to create comment",
    });
  }
};
