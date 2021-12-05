import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--white);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 800px;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 3;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    height: 600px;
  }

  a {
    font-size: var(--fontBig);
    font-family: "Poppins";
    padding: 2rem 0;
    font-weight: 600;
    color: var(--black);
    text-decoration: none;
    transition: color 0.2s linear;
    text-align: center;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
    }

    &:hover {
      color: var(--brown);
    }
  }
`;
