import React, { useContext } from "react";
import { StudentsContext } from "./useContext";
const Body = () => {
  const { student, setStudent } = useContext(StudentsContext);
  const onChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      Body: {student.name}
      {student.surname}
      <input
        type="text"
        placeholder="enter your name"
        onChange={onChange}
        name="name"
      />
      <input
        type="text"
        placeholder="enter your surname"
        onChange={onChange}
        name="surname"
      />
    </div>
  );
};
export default Body;
