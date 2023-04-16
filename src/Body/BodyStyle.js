import styled from "styled-components";

import bg from "../Assets/images/godzilla.png";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
      91.28deg,
      rgba(0, 0, 0, 0.25) 25%,
      rgba(0, 0, 0, 0) 82.23%
    ),
    url(${bg});
  backgroud-repeat: none;
  background-size: cover;
`;
