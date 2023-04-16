import styled from "styled-components";
import { ReactComponent as logo } from "../Assets/icons/logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineNotificationsActive } from "react-icons/md";

export const Wrapper = styled.header`
  width: 100%;
  // background-color: red;
`;
export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  // background: green;
  padding: 15px 80px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Column = styled.div`
  // flex: 1;
  // border: 1px solid black;
`;
export const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const Li = styled.li`
  list-style-type: none;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.03em;

  color: #ffffff;
`;
export const Logo = styled(logo)``;
export const Search = styled(AiOutlineSearch)`
  width: 30px;
  height: 30px;
  fill: white;
`;
export const Notification = styled(MdOutlineNotificationsActive)`
  width: 30px;
  height: 30px;
  fill: white;
`;
