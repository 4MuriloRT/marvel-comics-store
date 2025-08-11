"use client";

import { useState } from "react";
import styled from "styled-components";
import { useCart } from "@/contexts/CartContext";
import Container from "@/components/Container";
import Title from "@/components/Title";
import Image from "next/image";
import Link from "next/link";

const CartLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  padding: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CartItemCard = styled.div`
  display: flex;
  gap: 20px;
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const ItemImage = styled(Image)`
  border-radius: 4px;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const ItemTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
`;

const ItemPrice = styled.p`
  font-size: 1rem;
  color: #666;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const QuantityButton = styled.button`
  background: #ddd;
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background: #ccc;
  }
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-weight: 600;
  margin-left: auto;
`;

const Summary = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: 30px;
  border-radius: 8px;
  height: fit-content;
  position: sticky;
  top: 120px;
`;

const SummaryTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 1.5rem;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 1rem;
`;

const TotalRow = styled(SummaryRow)`
  font-weight: 700;
  font-size: 1.2rem;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
`;

const CouponInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const CouponButton = styled.button`
  width: 100%;
  padding: 12px;
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
`;

const EmptyCartMessage = styled.div`
    text-align: center;
    padding: 50px;
    font-size: 1.2rem;

    a {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: underline;
      font-weight: 600;
      display: block;
      margin-top: 20px;
    }
`;

export default function CartPage() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, applyCoupon, subtotal, discount, total } = useCart();
  const [couponCode, setCouponCode] = useState("");

  const handleApplyCoupon = () => {
    if (applyCoupon(couponCode)) {
      alert("Cupom aplicado com sucesso!");
    } else {
      alert("Cupom inválido!");
    }
  };

  return (
    <main>
      <Container>
        <Title>Seu Carrinho</Title>
        {cartItems.length > 0 ? (
        <CartLayout>
          <ItemsList>
            {cartItems.map((item) => (
              <CartItemCard key={item.id}>
                <ItemImage
                  src={`${item.thumbnail.path}/standard_medium.${item.thumbnail.extension}`}
                  alt={item.title}
                  width={80}
                  height={120}
                />
                <ItemInfo>
                  <div>
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemPrice>{item.price}</ItemPrice>
                  </div>
                  <QuantityControl>
                    <QuantityButton onClick={() => decreaseQuantity(item.id)}>-</QuantityButton>
                    <span>{item.quantity}</span>
                    <QuantityButton onClick={() => increaseQuantity(item.id)}>+</QuantityButton>
                  </QuantityControl>
                </ItemInfo>
                <RemoveButton onClick={() => removeFromCart(item.id)}>Remover</RemoveButton>
              </CartItemCard>
            ))}
          </ItemsList>

          <Summary>
            <SummaryTitle>Resumo do Pedido</SummaryTitle>
            <SummaryRow>
              <span>Subtotal</span>
              <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(subtotal)}</span>
            </SummaryRow>
            <SummaryRow>
              <span>Desconto</span>
              <span>- {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(discount)}</span>
            </SummaryRow>
            <TotalRow>
              <span>Total</span>
              <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</span>
            </TotalRow>
            <div style={{ marginTop: '30px' }}>
              <CouponInput 
                type="text" 
                placeholder="Seu cupom" 
                value={couponCode} 
                onChange={(e) => setCouponCode(e.target.value)} 
              />
              <CouponButton onClick={handleApplyCoupon}>Aplicar Cupom</CouponButton>
            </div>
            <CheckoutButton onClick={() => alert('Compra finalizada!')}>Finalizar Compra</CheckoutButton>
          </Summary>
        </CartLayout>
        ) : (
            <EmptyCartMessage>
                <p>Seu carrinho está vazio.</p>
                <Link href="/">Voltar para a loja</Link>
            </EmptyCartMessage>
        )}
      </Container>
    </main>
  );
}