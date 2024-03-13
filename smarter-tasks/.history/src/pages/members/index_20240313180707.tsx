import React, { Suspense } from "react";
import { MembersProvider } from "../../context/members/context";
const MemberList = React.lazy(()=>import("./MemberList"));
import NewMember from "./NewMember";
import ErrorBoundary from "../../components/ErrorBoundary";
import { useTranslation } from "react-i18next";

const Members = () => {
  const {t} = useTranslation()

  return (
      <>
        <div className="flex justify-between">
          <h2 className="text-2xl font-medium tracking-tight">{t('Members')}</h2>
          <NewMember />
        </div>
        <ErrorBoundary>
          <Suspense fallback={<div className="suspense-loading">{t('loading')}</div>}>
            <MemberList />
          </Suspense>
        </ErrorBoundary>
      </>
  )
}
export default Members;
