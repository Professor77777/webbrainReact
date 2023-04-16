import React, { Component } from "react";
import {
  Wrapper,
  Container,
  Title,
  Subtitle,
  Description,
  Btns,
} from "./HeroStyle";
import Button from "../Button/Button";
import { PlayIcon } from "../Button/ButtonStyle";

import { Rate } from "antd";

class Hero extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Title>STAR WARS</Title>
          <Subtitle>THE RISE OF SKYWALKER</Subtitle>
          <Description>
            The surviving members of the resistance face the First Order once
            again, and the legendary conflict between the Jedi and the Sith
            reaches its peak bringing the Skywalker saga to its end.
          </Description>
          <Rate style={{ margin: "27px 0" }} allowHalf defaultValue={4} />
          <Btns>
            <Button type="primary" icon={<PlayIcon />}>
              Watch now
            </Button>
            <Button type="secondary">Trailer</Button>
          </Btns>
        </Container>
      </Wrapper>
    );
  }
}
export default Hero;
