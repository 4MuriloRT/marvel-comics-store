"use client";

import { FunctionComponent } from "react";
import styled from "styled-components";
import Image from "next/image";

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.large};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
  transition: padding 0.3s ease;

  &:hover{
    padding-top: ${({theme}) => theme.spacing.large};
    padding-bottom: ${({ theme }) => theme.spacing.large};
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const StoreName = styled.h1`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.colors.background};
`;


const Navbar: FunctionComponent = () => {
  return (
    <header>
      <NavWrapper>
        <LogoWrapper>
          <Image
            src="/marvel-logo.png"
            alt="Logo da Marvel"
            width={130}
            height={80}
            priority
          />
          <StoreName>Comic Central</StoreName>
        </LogoWrapper>
      </NavWrapper>
    </header>
  );
};

export default Navbar;