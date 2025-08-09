"use client";

import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import { theme } from "@/styles/theme";
import { CartProvider } from "@/contexts/CartContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <CartProvider>
          {children}
        </CartProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
