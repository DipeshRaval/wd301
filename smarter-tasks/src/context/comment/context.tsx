import React, { createContext, useContext, useReducer } from "react";
import { CommentsDispatch, CommentsState } from "./types"

import { reducer, initialState } from "./reducer";
const CommentsStateContext = createContext<CommentsState>(initialState);

const CommentsDispatchContext = createContext<CommentsDispatch>(() => {});

export const CommentsProvider: React.FC<React.PropsWithChildren> = ({ children }) =>
{
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CommentsStateContext.Provider value={state}>
      <CommentsDispatchContext.Provider value={dispatch}>
        {children}
      </CommentsDispatchContext.Provider>
    </CommentsStateContext.Provider>
  );
};

export const useCommentsState = () => useContext(CommentsStateContext);

export const useCommentsDispatch = () => useContext(CommentsDispatchContext);
