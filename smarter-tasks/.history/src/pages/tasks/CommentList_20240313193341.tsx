import React from 'react'
import { useMembersState } from '../../context/members/context';
import { useCommentsState } from '../../context/comment/context';
import { CommentData } from '../../context/comment/types';
import { useTranslation } from "react-i18next";

export default function CommentList() {
  const commentState = useCommentsState();
  const memberState = useMembersState();
  const {t, i18n:{language}} = useTranslation()
  
  const dateFormatter = new Intl.DateTimeFormat(`${language}-${language.toUpperCase()}`, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  const { comments, isLoading, isError, errorMessage } = commentState;

  if (comments.length === 0 && isLoading) {
    return <p className='mt-3 font-bold text-yellow-400'>{t('loading')}</p>;
  }

  if (isError) {
    return <p className='mt-3 text-pink-500'>{errorMessage}</p>;
  }

  const geOwnerComment = (owner : any) => {
    const assignee = memberState?.members?.filter(
      (member) => member.id === owner
    )?.[0];
    return assignee?.name;
  }
  
  const getFormatedTimeDate = (date:string) => {
    const newDate = new Date(date)

    
    const formatDate = newDate.toDateString();

    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    const newformat = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    const formatedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${newformat}`

    return `${formatDate} ${formatedTime}`
  }

  return (
    <div className='mt-3'>
      <h2 className='font-bold'>{t('commentText')}</h2>
      {commentState.comments.map((comment : CommentData)=>{
        return(
          <div className='comment my-3 bg-slate-400 rounded p-3'>
            <div className='flex justify-between'>
            <h2 className='font-semibold'>{geOwnerComment(comment.owner)} :</h2>
            <p className='text-sm text-gray-700 font-semibold'>{getFormatedTimeDate(comment.createdAt)}</p>
            </div>
            <p>{comment.description}</p>
          </div>
        )
      })}
    </div>
  )
}
