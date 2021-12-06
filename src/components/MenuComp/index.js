import React from "react";
import {
  Wrapper,
  Content,
  Text,
  Map,
  MapContainer,
  Men,
} from "./MenuComp.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const MenuComp = () => {
  return (
    <Wrapper>
      <Content>
        <Men href="/">
          <FontAwesomeIcon icon={faChevronLeft} size="1x" /> Volver
        </Men>
        <Text>
          <h1>Menu </h1>
        </Text>
        <MapContainer></MapContainer>
      </Content>
    </Wrapper>
  );
};

export default MenuComp;
