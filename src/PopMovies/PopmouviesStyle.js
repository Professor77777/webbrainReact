import styled from "styled-components";

export const Wrapper = styled.div`
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
  flex-direction: column;
  justify-content: space-between;
  // align-items: center;
`;
export const TitleMovie = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  //   border: 0.5px solid #ffffff;
  margin-bottom: 20px;
`;

export const Card = styled.div`
  width: 184px;
  height: 256px;
  border-radius: 16px;
  // border: 2px solid green;
  display: flex;
  gap: 10px;
  padding: auto;
`;
export const Image = styled.img`
  width: 90%;
  height: 90%;
  // border: 2px solid red;
  margin: 8px auto;

  :hover {
    width: 95%;
    height: 95%;
  }
`;
