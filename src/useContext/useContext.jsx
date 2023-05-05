import React, { createContext, useState } from "react";

export const StudentsContext = createContext();
function StudentsContextProvider({ children }) {
  const [student, setStudent] = useState({ name: "Jack", surname: "Donald" });
  return (
    <StudentsContext.Provider value={{ student, setStudent }}>
      {children}
    </StudentsContext.Provider>
  );
}
export default StudentsContextProvider;
