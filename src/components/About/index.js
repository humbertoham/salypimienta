import React, { useEffect } from "react";
import {
  Content,
  Wrapper,
  Text,
  Box,
  Map,
  MapContainer,
  MapC,
  Center,
} from "./About.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import local from "../../images/local.jpeg";

import Aos from "aos";
import "aos/dist/aos.css";
import {
  faHandshake,
  faLock,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
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
    </Wrapper>
  );
};

export default About;
