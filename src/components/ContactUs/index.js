import React from "react";
import { Content, Wrapper, Text } from "./ContactUs.styles";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Contact = () => (
  <Wrapper id="contact">
    <Content>
      <Text>
        <h1>Contáctanos</h1>
      </Text>
      <iframe
        className="google"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14335.809084939221!2d-98.289895!3d26.0678162!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3d9018133c788bbc!2sSal%20Y%20Pimienta!5e0!3m2!1sen!2smx!4v1638723830301!5m2!1sen!2smx"
        width="100%"
        height="400"
      ></iframe>
    </Content>
  </Wrapper>
);

export default Contact;
