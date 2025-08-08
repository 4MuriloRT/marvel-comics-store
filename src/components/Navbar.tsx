"use client";

import { FunctionComponent } from "react";
import styled from "styled-components";

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
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