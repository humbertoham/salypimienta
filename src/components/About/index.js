import React, { useEffect } from "react";
import {
  Content,
  Wrapper,
  Text,
  Map,
  MapC,
  Center,
  Message,
  Box,
} from "./About.styles";

import local from "../../images/local.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import "aos/dist/aos.css";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper id="about">
      <Content data-aos="fade-right">
        <MapC className="right" data-aos="fade-up">
          <Map src={local} />
        </MapC>
        <Text>
          <h1>¿Quiénes somos?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium reprehenderit cumque fugiat ratione quia deleniti
            adipisci numquam, dolorem ipsa pariatur dolor fugit. Accusantium
            omnis in, perspiciatis beatae at odio excepturi.
          </p>
        </Text>
      </Content>
      <Center />
      <Content data-aos="fade-right">
        <Text>
          <h1>Misión</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium reprehenderit cumque fugiat ratione quia deleniti
            adipisci numquam, dolorem ipsa pariatur dolor fugit. Accusantium
            omnis in, perspiciatis beatae at odio excepturi.
          </p>
        </Text>
      </Content>
      <Center />
      <Content data-aos="fade-right">
        <Text>
          <h1>Servicios</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium reprehenderit cumque fugiat ratione quia deleniti
            adipisci numquam, dolorem ipsa pariatur dolor fugit. Accusantium
            omnis in, perspiciatis beatae at odio excepturi.
          </p>
        </Text>
      </Content>
      <Center />
      <Content id="contact" data-aos="fade-right">
        <Text>
          <h1>Contáctanos</h1>
          <p>Tel. 899 924 0100</p>
          <p>Correo: salypimienta2go@gmail.com</p>
          <p>José María Morelos 1920, Rodríguez, 88631 Reynosa, Tamps.</p>
          <Message href="8999240100">
            {" "}
            <FontAwesomeIcon className="icon" icon={faPhone} /> Llamar
          </Message>
        </Text>
        <Box>
          {" "}
          <iframe
            className="google"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14335.809084939221!2d-98.289895!3d26.0678162!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3d9018133c788bbc!2sSal%20Y%20Pimienta!5e0!3m2!1sen!2smx!4v1638723830301!5m2!1sen!2smx"
            width="100%"
            height="400"
          ></iframe>
        </Box>
      </Content>
    </Wrapper>
  );
};

export default About;
