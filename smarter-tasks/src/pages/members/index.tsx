import React, { Suspense } from "react";
import { MembersProvider } from "../../context/members/context";
const MemberList = React.lazy(()=>import("./MemberList"));
import NewMember from "./NewMember";
import ErrorBoundary from "../../components/ErrorBoundary";

const Members = () => {
  return (
    <MembersProvider>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight">Members</h2>
        <NewMember />
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <MemberList />
        </Suspense>
      </ErrorBoundary>
    </MembersProvider>

  )
}
export default Members;
