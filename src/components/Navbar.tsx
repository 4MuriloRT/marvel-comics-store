"use client";

import { FunctionComponent } from "react";
import styled from "styled-components";

const NavWrapper = styled.nav`
    display: flex,
    justify-content: space-between;
    aling-items: center;
    background: #282c34;
    padding: 1rem 2rem;
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
`;

interface NavbarProps {
  name: string;
}

const Navbar: FunctionComponent<NavbarProps> = ({ name }) => {
  return (
    <header>
      <NavWrapper>
        <Logo>{name}</Logo>
      </NavWrapper>
    </header>
  );
};

export default Navbar;
