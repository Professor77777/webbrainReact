import React, { Component } from "react";
import { Container, TitleMovie, Wrapper, Image, Card } from "./PopmouviesStyle";
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
      centerPadding: "80px",
      slidesToShow: 4,
      speed: 500,
    };
    return (
      <Wrapper>
        <Container>
          <TitleMovie>Popular Movies</TitleMovie>
          <Slider style={{ width: "100%" }} {...settings}>
            <Card>
              <Image src={img1} />
            </Card>
            <Card>
              <Image src={img2} />
            </Card>
            <Card>
              <Image src={img3} />
            </Card>
            <Card>
              <Image src={img4} />
            </Card>
            <Card>
              <Image src={img5} />
            </Card>
            <Card>
              <Image src={img6} />
            </Card>
          </Slider>
        </Container>
      </Wrapper>
    );
  }
}
export default Popmovies;
