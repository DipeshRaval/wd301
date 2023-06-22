import React, { createContext, useContext, useReducer } from "react";

import { reducer, initialState, MembersState, ProjectsActions } from "./reducer";
const MembersStateContext = createContext<MembersState | undefined>(undefined);

type MembersDispatch = React.Dispatch<ProjectsActions>;
const MembersDispatchContext = createContext<MembersDispatch | undefined>(undefined);

export const MembersProvider: React.FC<React.PropsWithChildren> = ({ children }) =>
{

  const [stateMember, dispatchMembers] = useReducer(reducer, initialState);

  return (
    <MembersStateContext.Provider value={stateMember}>
      <MembersDispatchContext.Provider value={dispatchMembers}>
        {children}
      </MembersDispatchContext.Provider>
    </MembersStateContext.Provider>
  );
};

export const useMembersState = () => useContext(MembersStateContext);
export const useMembersDispatch = () => useContext(MembersDispatchContext);
