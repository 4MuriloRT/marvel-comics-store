"use client";

import { FunctionComponent } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.small}
    ${({ theme }) => theme.spacing.large};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
  transition: padding 0.3s ease;

  &:hover {
    padding-top: ${({ theme }) => theme.spacing.large};
    padding-bottom: ${({ theme }) => theme.spacing.large};
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
  text-decoration: none;
`;

const StoreName = styled.span`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.colors.background};
`;

const Navbar: FunctionComponent = () => {
  return (
    <NavWrapper>
      <LogoLink href="/">
        <Image
          src="/marvel-logo.png"
          alt="Logo da Marvel"
          width={130}
          height={80}
          priority
        />
        <StoreName>Comic Central</StoreName>
      </LogoLink>
    </NavWrapper>
  );
};

export default Navbar;