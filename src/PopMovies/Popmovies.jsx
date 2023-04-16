import React, { Component } from "react";
import {
  Container,
  Movie,
  Image,
  TitleMovie,
  Wrapper,
} from "./PopmouviesStyle";
import Slider from "react-slick";
import img1 from "../Assets/images/Rectangle 6.png";
import img2 from "../Assets/images/Rectangle 7.png";
import img3 from "../Assets/images/Rectangle 8.png";
import img4 from "../Assets/images/Rectangle 9.png";
import img5 from "../Assets/images/Rectangle 11.png";
import img6 from "../Assets/images/Rectangle 12.png";
class Popmovies extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      color: "white",
    };
    return (
      <Wrapper>
        <Container>
          <TitleMovie>Popular Movies</TitleMovie>
          <Slider style={{ width: "100%", color: "white" }} {...settings}>
            <Movie>
              <Image />
            </Movie>
            <Movie>
              <h1>2</h1>
            </Movie>
            <Movie>
              <h1>3</h1>
            </Movie>
            <Movie>
              <h1>4</h1>
            </Movie>
            <Movie>
              <h1>5</h1>
            </Movie>
            <Movie>
              <h1>6</h1>
            </Movie>
          </Slider>
        </Container>
      </Wrapper>
    );
  }
}
export default Popmovies;
