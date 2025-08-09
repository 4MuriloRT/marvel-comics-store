"use client";

import { FunctionComponent } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";

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

const CartLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -12px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
`;

const Navbar: FunctionComponent = () => {
  const { totalItems } = useCart();

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
      <CartLink href="/cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        {totalItems > 0 && <CartCount>{totalItems}</CartCount>}
      </CartLink>
    </NavWrapper>
  );
};

export default Navbar;
