import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--white);
  padding-bottom: 64px;
`;

export const Content = styled.div`
  padding-top: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
  color: var(--white);
  text-align: center;
  p {
    font-size: 0.8rem;
    font-family: "Poppins";
  }
`;
export const Red = styled.a`
  font-size: 1.5rem;
  padding: 10px;
  color: var(--white);
  text-decoration: none;
`;
export const Text = styled.div`
  padding: 25px;

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
