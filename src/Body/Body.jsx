import React, { Component } from "react";
import { Container } from "./BodyStyle";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Popmovies from "../PopMovies/Popmovies";

class Body extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <Hero />
        <Popmovies />
      </Container>
    );
  }
}
export default Body;
