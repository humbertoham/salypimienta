import React, { useEffect } from "react";
import {
  Content,
  Wrapper,
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardOptionsNote,
  Message,
  Page,
  LogoN,
  Men,
} from "./MenuSec.styles";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import banner from "../../images/banner.jpg";
import EnchR from "../../images/Enchiladasrojas.jpg";
import Rappi from "../../images/rappi.svg";
import Ent from "../../images/Entomatadasconcarne.jpg";
import Mil from "../../images/Milanesaderes.jpg";
import Que from "../../images/Quecas.jpg";
import Tacos from "../../images/Tacosalypimienta_.jpg";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const MenuSec = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Content>
        <h1>Menú</h1>
        <p>Nos especializamos en antojitos mexicanos</p>
      </Content>
      <div className="container">
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Enchiladas verdes</CardHeading>
            <Page src={banner} />
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium reprehenderit cumque fugiat ratione quia deleniti
                adipisci numquam, dolorem ipsa pariatur dolor fugit. Accusantium
                omnis in, perspiciatis beatae at odio excepturi.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Enchiladas rojas</CardHeading>
            <Page src={EnchR} />
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium reprehenderit cumque fugiat ratione quia deleniti
                adipisci numquam, dolorem ipsa pariatur dolor fugit. Accusantium
                omnis in, perspiciatis beatae at odio excepturi.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Entomatadas con carne</CardHeading>
            <Page src={Ent} />
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium reprehenderit cumque fugiat ratione quia deleniti
                adipisci numquam, dolorem ipsa pariatur dolor fugit. Accusantium
                omnis in, perspiciatis beatae at odio excepturi.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Milanesa de res</CardHeading>
            <Page src={Mil} />
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium reprehenderit cumque fugiat ratione quia deleniti
                adipisci numquam, dolorem ipsa pariatur dolor fugit. Accusantium
                omnis in, perspiciatis beatae at odio excepturi.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Quecas</CardHeading>
            <Page src={Que} />
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium reprehenderit cumque fugiat ratione quia deleniti
                adipisci numquam, dolorem ipsa pariatur dolor fugit. Accusantium
                omnis in, perspiciatis beatae at odio excepturi.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <CardHeading>Tacos sal y pimienta</CardHeading>
            <Page src={Tacos} />
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium reprehenderit cumque fugiat ratione quia deleniti
                adipisci numquam, dolorem ipsa pariatur dolor fugit. Accusantium
                omnis in, perspiciatis beatae at odio excepturi.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
      </div>
      <Men href="/">
        Ver menú <FontAwesomeIcon icon={faChevronRight} size="1x" />
      </Men>
      <Message href="https://www.rappi.com.mx/restaurantes/1923743743-sal-y-pimienta-reynosa-reynosa">
        {" "}
        <LogoN src={Rappi} /> Pedir rappi{" "}
      </Message>
    </Wrapper>
  );
};

export default MenuSec;
