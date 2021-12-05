import React, { useEffect } from "react";
import { Container, Wrapper, Text, Message, LogoN } from "./Seperator.styles";
import image from "../../images/Enchiladassuizas.jpg";
import Rappi from "../../images/rappi.svg";
import Aos from "aos";
import "aos/dist/aos.css";
const Separator = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Container imgUrl={image}>
        <Text>
          <h1>Puedes ordernar ya!</h1>
          <Message href="https://www.rappi.com.mx/restaurantes/1923743743-sal-y-pimienta-reynosa-reynosa">
            {" "}
            <LogoN src={Rappi} /> Pedir rappi{" "}
          </Message>
        </Text>
      </Container>
    </Wrapper>
  );
};

export default Separator;
