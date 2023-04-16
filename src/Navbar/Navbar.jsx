import React, { Component } from "react";
import {
  Container,
  Wrapper,
  Logo,
  Column,
  Search,
  Ul,
  Li,
  Notification,
} from "./NavbarStyle";
import Button from "../Button/Button";

class Navbar extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Column>
            <nav>
              <Ul>
                <Li>Movies</Li>
                <Li>TV shows</Li>
                <Li>Documentaries</Li>
              </Ul>
            </nav>
          </Column>
          <Column>
            <Ul>
              <Logo></Logo>
            </Ul>
          </Column>
          <Column>
            <Ul>
              <Search />
              <Notification />
              {/* <Button type="primary" icon={<PlayIcon />}>
                Sign In
              </Button>
              <Button type="secondary">Sign In</Button> */}
              <Button>Sign In</Button>
            </Ul>
          </Column>
        </Container>
      </Wrapper>
    );
  }
}
export default Navbar;
