import React from "react";
import { Content, Wrapper, Red } from "./Foot.styles";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Foot = () => (
  <Wrapper>
    <Content>
      <Red href="https://www.facebook.com/SalyPimienta2go">
        <FontAwesomeIcon icon={faFacebookF} />
      </Red>
      <Red href="https://www.instagram.com/salypimientareynosa/">
        <FontAwesomeIcon icon={faInstagram} />
      </Red>
      <p>© Copyright 2021 Sal & Pimienta</p>
    </Content>
  </Wrapper>
);

export default Foot;
