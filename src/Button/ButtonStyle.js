import styled from "styled-components";
import { FaPlay } from "react-icons/fa";

export const getType = (props) => {
  switch (props.type) {
    case "primary": {
      return {
        background: "#FA4776",
        "border-radius": "41px",
        padding: " 15px 25px",
      };
    }
    case "secondary": {
      return {
        border: "1px solid #FFFFFF",
        "border-radius": "41px",
        background: "transparent",
        padding: " 10px 25px",
      };
    }
    default: {
      break;
    }
  }
};
export const Container = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  //   line-height: 25px;
  letter-spacing: 0.03em;
  background: none;
  color: #ffffff;
  border: none;
  display: flex;
  gap: 7px;
  align-items: center;
  justify-content: center;
  ${getType};

  :active {
    transform: scale(0.98);
  }
`;
export const PlayIcon = styled(FaPlay)`
  width: 15px;
  height: 15px;
`;
