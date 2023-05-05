import React, { useContext, useState } from "react";
import { StudentsContext } from "./useContext";
const Footer = () => {
  const { student, setStudent } = useContext(StudentsContext);

  return (
    <div>
      Footer: {student.name}
      {student.surname}
    </div>
  );
};
export default Footer;
