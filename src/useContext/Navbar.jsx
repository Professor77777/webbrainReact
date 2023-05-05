import React, { useContext } from "react";
import { StudentsContext } from "./useContext";
const Navbar = () => {
  const { student, setStudent } = useContext(StudentsContext);
  console.log(student);
  return (
    <div>
      Navbar name:{student.name}
      {student.surname}
    </div>
  );
};
export default Navbar;
