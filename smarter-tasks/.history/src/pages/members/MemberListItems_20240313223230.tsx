import React from "react";
import { TrashIcon } from '@heroicons/react/24/outline'
import { useMembersDispatch, useMembersState } from "../../context/members/context";
import { deleteMember } from "../../context/members/actions";
import { useTranslation } from "react-i18next";

export default function ProjectListItems() {
  let state: any = useMembersState();
  const { members, isLoading, isError, errorMessage } = state
  const {t} = useTranslation()

  const dispatchMembers = useMembersDispatch();

  if (members.length === 0 && isLoading) {
    return <span>{t('loading')}</span>;
  }

  if (members.length === 0) {
    throw Error("Error!!! members are not created Yet.");
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  const deleteMemberHandler =async (id : number) => {
    console.log(id);
    const response =await deleteMember(dispatchMembers,id);
    console.log(response);

  };

  return (
    <>
      {members.map((member: any) => (
        <div key={`${member.id}-${member.name}`} className="block member p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="flex justify-between">
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white"><span className="font-bold">{t('name')} : </span>{member.name}</h5>
          <button onClick={()=> { deleteMemberHandler(member.id) }}>
            <TrashIcon className="h-8 w-8 text-red-600 hover:bg-red-500 hover:text-white border-red-600 border-2 hover:border-red-700 p-1 rounded-md transition duration-1200" aria-hidden="true" />
          </button>
          </div>
          {/* <p className="mb-2 font-medium tracking-tight text-gray-900 dark:text-white"><span className="font-bold">Email : </span>{member.email}</p> */}
        </div>
      ))}
    </>
  );
}
