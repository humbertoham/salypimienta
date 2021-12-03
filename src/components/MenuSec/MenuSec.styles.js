import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--white);
  padding-bottom: 64px;
`;

export const Content = styled.div`
  padding-top: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;

  text-align: center;
  h1 {
    font-family: "MyFont";
    font-size: 4rem;
    margin: 0;
    color: var(--brown);
    @media screen and (max-width: 720px) {
      font-size: var(--fontSuperBig);
    }
  }
  p {
    padding: 15px;
    font-weight: 600;
    font-size: var(--fontBig);
    @media screen and (max-width: 720px) {
      font-size: var(--fontMed);
    }
  }
`;
export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 0px 24px 24px;

  width: 300px;
  z-index: 1;
`;
export const Text = styled.div`
  margin: auto;
  width: 50%;
  padding: 10px;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--black);
    text-align: center;
    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }
  p {
    font-size: var(--fontMed);
    font-weight: 700;
    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;

export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;
export const CardHeading = styled.h1`
  text-align: center;
  color: var(--blue);
`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 0px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export const CardOptionsNote = styled.small`
  padding-top: 8px;
  display: block;

  width: 100%;
  font-size: var(--smallFont);
  text-align: center;
`;

export const Page = styled.img`
  display: block;
  height: auto;
  width: 100%;
  margin: auto;
  padding: 0px;
`;
export const Message = styled.a`
  background-image: radial-gradient(#ff8a00, #e52e71);
  background-image: radial-gradient(circle at top right, #ff8a00, red, #e52e71);
  display: block;
  margin: 20px auto;
  width: 300px;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: var(--white);

  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  text-decoration: none;
  text-align: center;
  font-family: "Poppins", sans-serif;
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;
export const LogoN = styled.img`
  width: 50px;
`;
export const Men = styled.a`
  font-weight: 700;
  display: block;
  margin: 20px auto;
  width: 300px;
  padding: 12px 0;
  font-size: 1rem;
  text-decoration: none;
  color: var(--black);
  text-align: center;
  font-family: "Poppins", sans-serif;
  :hover {
    text-decoration: underline;
  }
`;
