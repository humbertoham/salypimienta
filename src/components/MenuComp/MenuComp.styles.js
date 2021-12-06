import styled from "styled-components";

export const Wrapper = styled.div`
  height: 1000px;
  background: var(--blue);
  @media (max-width: 768px) {
    height: 500px;
  }
`;

export const Content = styled.div``;

export const Text = styled.div`
  margin: auto;
  padding: 10px;

  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: var(--fontSuperBig);
    text-align: center;
    color: var(--white);
    @media (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;
export const MapContainer = styled.div`
  padding: 25px;
  height: auto;
  width: auto;
  margin: auto;
  @media screen and (max-width: 720px) {
    padding: 0;
    float: none;
  }
`;
export const Map = styled.img`
  display: block;
  height: auto;
  width: 100%;
  padding: 0 30px;
  margin: auto;
  @media screen and (max-width: 720px) {
    padding: 0;
  }
`;
export const Men = styled.a`
  font-weight: 700;
  display: block;

  width: 300px;
  padding: 40px;
  font-size: var(--fontMed);
  text-decoration: none;
  color: var(--black);
  text-align: left;
  font-family: "Poppins", sans-serif;
  :hover {
    text-decoration: underline;
  }
`;
