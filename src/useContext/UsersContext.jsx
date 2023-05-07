import React, { createContext, useContext, useReducer } from "react";

const UserContext = createContext();
export const useUsersContext = () => useContext(UserContext);

const INITIAL_STATE = {
  users: [
    { id: 1, name: "Jack" },
    { id: 2, name: "John" },
    { id: 3, name: "Mark" },
  ],
};
const reducer = (state, action) => {};

function UsersContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <UserContext.Provider value={(state, dispatch)}>
      {children}
    </UserContext.Provider>
  );
}
export default UsersContextProvider;
