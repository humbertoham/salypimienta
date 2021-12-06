import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 75px 75px 75px 75px;
  box-sizing: border-box;

  @media screen and (max-width: 720px) {
    padding: 0px 40px 75px 40px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 720px) {
    display: block;
  }
  ::after {
    content: "";
    display: table;
    clear: both;
  }
`;
export const Box = styled.div`
  margin: 25px;
  text-align: center;

  padding: 25px;
  @media screen and (max-width: 720px) {
    width: auto;
    float: none;
    padding: 0px;
  }
`;

export const Text = styled.div`
  float: left;
  width: 66.66666%;
  margin: auto;
  padding: 25px;
  max-width: 500px;
  animation: slide-top 1s;
  @keyframes slide-top {
    0% {
      -webkit-transform: translateY(100px);
      transform: translateY(100px);
    }
    100% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
    }
  }

  h1 {
    font-family: "MyFont";
    font-size: 4rem;
    color: var(--blue);
    text-align: center;
    @media screen and (max-width: 720px) {
      font-size: var(--fontSuperBig);
    }
  }
  p {
    color: var(--black);
    font-size: var(--fontBig);
    flex-wrap: nowrap;

    @media screen and (max-width: 720px) {
      font-size: var(--fontMed);
      text-align: left;
    }
  }

  @media screen and (max-width: 720px) {
    padding: 25px 0px 0px 0px;
    width: auto;
    float: none;
  }
`;
export const MapContainer = styled.div`
  padding: 25px;
  height: auto;
  width: 500px;
  margin: auto;
  @media screen and (max-width: 720px) {
    padding: 0;
    width: auto;
    float: none;
  }
  p {
    text-align: center;
    color: var(--yellow);
    font-size: var(--fontSmall);
    flex-wrap: nowrap;
  }
`;
export const Map = styled.img`
  display: block;
  height: auto;
  width: 100%;
  padding: 30px;
  margin: auto;
  @media screen and (max-width: 720px) {
    padding: 0;
    padding-top: 30px;
  }
`;

export const MapC = styled.div`
  padding: 25px;
  height: auto;
  width: 700px;
  margin: auto;
  @media screen and (max-width: 720px) {
    padding: 0;
    width: auto;
    float: none;
  }
`;
export const Center = styled.hr`
  border: 0;
  height: 1px;
  width: 200px;
  position: relative;
  margin: 30px auto;
  background: var(--blue);

  &:before {
    content: "";
    width: 6px;
    height: 6px;
    background: var(--blue);
    display: inline-block;
    border: 2px solid var(--blue);
    border-radius: 100%;
    position: absolute;
    top: -4px;
    left: 50%;
    margin: 0 0 0 -3px;
  }
`;
export const Message = styled.a`
  display: block;
  margin: 20px auto;
  width: 250px;
  padding: 12px 0;
  font-family: inherit;
  font-size: var(--fontMed);
  font-weight: 700;
  color: var(--blue);
  border: 2px solid var(--blue);
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  text-decoration: none;
  text-align: center;
  font-family: "Poppins", sans-serif;
  &:hover {
    background-color: var(--blue);
    color: var(--white);
  }
  @media (max-width: 768px) {
    font-size: var(--fontSmall);
    width: 200px;
  }
`;
