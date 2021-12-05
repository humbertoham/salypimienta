import React from "react";
import { useEffect } from "react";
import {
  Container,
  Wrapper,
  Text,
  Logo,
  LogoN,
  Message,
  LogoM,
} from "./Banner.styles";
import image from "../../images/banner.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import logosal from "../../images/logosal.svg";
const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Container imgUrl={image}>
        <Text data-aos="fade-up">
          <Logo href="/">
            <LogoN src={logosal} />
          </Logo>
          <Message href="https://www.rappi.com.mx/restaurantes/1923743743-sal-y-pimienta-reynosa-reynosa">
            {" "}
            Ordena ya{" "}
          </Message>
        </Text>
      </Container>
    </Wrapper>
  );
};

export default Banner;
