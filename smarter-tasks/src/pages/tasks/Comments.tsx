import React from 'react'
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCommentsDispatch } from '../../context/comments/context';
import { CommentData } from '../../context/comments/reducer';
import { addComment } from '../../context/comments/action';
import CommentList from './CommentList';

type CommentDataPayload = Omit<CommentData, "task_id" | "owner" >;

export default function Comments() {
  const { projectID, taskID } = useParams();
  const commentDispatch = useCommentsDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentDataPayload>({
  });

  const onSubmit: SubmitHandler<CommentDataPayload> = async (data) => {
    const { description } = data
    await addComment(commentDispatch, `${projectID}`, `${taskID}`, {description})
  };

  return (
    <div className="mt-2">
      <h2><strong>Add Comments</strong></h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          required
          placeholder="Enter comment in this task"
          id="commentBox"
          {...register("description", { required: true })}
          className="w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        />

        <button
          type="submit"
          id='addCommentBtn'
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Add Commment
        </button>
      </form>

      <CommentList />
    </div>
  )
}
