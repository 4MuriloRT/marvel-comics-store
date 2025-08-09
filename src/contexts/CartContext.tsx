"use client";

import { createContext, useState, useContext, ReactNode, useMemo } from "react";
import { Comic } from "@/types";

export interface CartItem extends Comic {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (comic: Comic) => void;
  removeFromCart: (comicId: number) => void;
  increaseQuantity: (comicId: number) => void;
  decreaseQuantity: (comicId: number) => void;
  applyCoupon: (coupon: string) => boolean;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  discount: number;
  total: number;
  appliedCoupon: string | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const validCoupons = {
  COMMON10: { type: "common", discount: 0.1 },
  RARE15: { type: "rare", discount: 0.15 },
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  const addToCart = (comic: Comic) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === comic.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === comic.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...comic, quantity: 1 }];
    });
  };

  const removeFromCart = (comicId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== comicId)
    );
  };

  const increaseQuantity = (comicId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === comicId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (comicId: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === comicId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const applyCoupon = (couponCode: string): boolean => {
    const couponKey = couponCode.toUpperCase() as keyof typeof validCoupons;
    if (validCoupons[couponKey]) {
      setAppliedCoupon(couponKey);
      return true;
    }
    setAppliedCoupon(null);
    return false;
  };

  const clearCart = () => {
    setCartItems([]);
    setAppliedCoupon(null);
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const { subtotal, discount, total } = useMemo(() => {
    const newSubtotal = cartItems.reduce((acc, item) => {
      const price = parseFloat(
        item.price.replace(/R\$\s?/, "").replace(",", ".")
      );
      return acc + (price || 0) * item.quantity;
    }, 0);

    let newDiscount = 0;
    if (appliedCoupon) {
      const coupon = validCoupons[appliedCoupon as keyof typeof validCoupons];
      cartItems.forEach((item) => {
        const itemPrice = parseFloat(
          item.price.replace(/R\$\s?/, "").replace(",", ".")
        );
        if (coupon.type === "rare" && item.isRare) {
          newDiscount += (itemPrice || 0) * item.quantity * coupon.discount;
        } else if (coupon.type === "common" && !item.isRare) {
          newDiscount += (itemPrice || 0) * item.quantity * coupon.discount;
        }
      });
    }

    const newTotal = newSubtotal - newDiscount;
    return { subtotal: newSubtotal, discount: newDiscount, total: newTotal };
  }, [cartItems, appliedCoupon]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        applyCoupon,
        clearCart,
        totalItems,
        subtotal,
        discount,
        total,
        appliedCoupon,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
