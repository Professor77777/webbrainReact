import styled from "styled-components";
const NavbarWrapper = styled.div`
  max-width: 1550px;
  background-color: grey;
`;
const NavContainer = styled.div`
  width: 90%;
  height: 10vh;
  margin: auto;

  display: flex;
  justify-content: space-between;
  color: #fff;
`;
const Logo = styled.div`
  align-items: center;
  padding: 20px 5px;

  @media (max-width: 1000px) {
    font-size: 18px;
  }
`;
const NavItems = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 20px;
`;
const Child = styled.li`
  list-style-type: none;
`;
const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const Btn = styled.button`
  padding: 5px 10px;
  margin-right:${(props) => (props.mr ? props.mr : "0px")}
  margin-top:${(props) => (props.mt ? props.mt : "0px")}
  border: none;
  color: ${(props) => (props.bg ? props.bg : "white")};
  background: ${(props) => (props.rang ? props.rang : "black")};

  :active {
    transform: scale(1.2);
  }
  ${(props) => console.log(props)}
`;
export { NavbarWrapper, NavContainer, NavItems, Btn, Child, Logo, NavRight };
