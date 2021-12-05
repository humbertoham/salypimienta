import styled from "styled-components";
export const Wrapper = styled.div``;

export const Container = styled.div`
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;

  /* Set a specific height */
  min-height: 600px;

  /* Create the parallax scrolling effect */
  background-position: center;

  position: relative;
  z-index: 0;

  &:before {
    background: rgba(0, 0, 0, 0.6);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`;
export const Text = styled.div`
  float: right;
  padding: 25px;
  max-width: 500px;
  margin: 0;
  position: relative;
  top: 25%;
  -ms-transform: translateY(25%);
  transform: translateY(25%);

  h1 {
    font-family: "Poppins";
    font-size: 4rem;
    color: var(--white);
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
  @media (max-width: 768px) {
    top: 75%;
    -ms-transform: translateY(75%);
    transform: translateY(75%);
  }
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
