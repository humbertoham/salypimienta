import styled from "styled-components";
export const Wrapper = styled.div``;

export const Container = styled.div`
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-attachment: fixed;
  /* Set a specific height */
  min-height: 800px;

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
  @media (max-width: 768px) {
    background-attachment: unset;
  }
`;

export const Text = styled.div`
  font-family: "Montserrat", sans-serif;
  z-index: 1;
  padding-top: 250px;
  text-align: center;
  margin: auto;
  color: var(--white);
  font-size: var(--fontSuperBig);
  @media (max-width: 768px) {
    padding-top: 150px;
    font-size: var(--fontBig);
  }
`;
export const Logo = styled.a`
  @media (max-width: 768px) {
    padding: 20px;
  }
`;
export const LogoN = styled.img`
  width: 300px;

  @media screen and (max-width: 500px) {
    width: 200px;
  }
`;
export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    z-index: 3;
  }
`;
export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 3px;
    width: 25px;
    border-radius: 50%;
    background: var(--blue);
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
export const MenuLink = styled.a`
  margin: 18px;
  margin-top: 25px;
  padding: 0.5rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: var(--blue);
  transition: all 0.3s ease-in;
  font-size: var(--fontMed);
  &:hover {
    text-decoration: underline;
  }
`;
export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;
export const Message = styled.a`
  display: block;
  margin: 80px auto;
  width: 250px;
  padding: 12px 0;
  font-family: inherit;
  font-size: var(--fontMed);
  font-weight: 700;
  color: var(--white);
  border: 3px solid var(--white);
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  text-decoration: none;
  text-align: center;
  font-family: "Poppins", sans-serif;
  &:hover {
    background-color: var(--white);
    color: var(--black);
  }
`;
