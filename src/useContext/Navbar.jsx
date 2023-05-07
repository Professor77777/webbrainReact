import React, { useContext } from "react";
import { StudentsContext } from "./useContext";
import { ProductsContext } from "./ProductsContext";
import { useUsersContext } from "./UsersContext";
const Navbar = () => {
  const { student, setStudent } = useContext(StudentsContext);
  const { computers, setComputers } = useContext(ProductsContext);
  console.log(computers);
  const { state, dispatch } = useUsersContext();
  console.log(state, "state");
  const onChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      Navbar name:{student.name}
      {student.surname} cart({computers.length})
      <input type="text" onChange={onChange} name="name" />
      <input type="text" onChange={onChange} name="surname" />
    </div>
  );
};
export default Navbar;
