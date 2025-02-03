import { useState } from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
`;

const CartTitle = styled.h2`
  text-align: center;
  color: #333;
  font-family: 'Arial', sans-serif;
`;

const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  font-family: 'Arial', sans-serif;
`;

const CartButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItemToCart = () => {
    if (newItem) {
      setCartItems([...cartItems, newItem]);
      setNewItem('');
    }
  };

  const removeItemFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter(item => item !== itemToRemove));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContainer>
      <CartTitle>Carrito de Compras</CartTitle>
      <input 
        type="text" 
        value={newItem} 
        onChange={(e) => setNewItem(e.target.value)} 
        placeholder="Agregar un nuevo ítem" 
      />
      <CartButton onClick={addItemToCart}>Agregar Ítem</CartButton>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <CartItem key={index}>
              {item}
              <CartButton onClick={() => removeItemFromCart(item)}>Eliminar</CartButton>
            </CartItem>
          ))}
        </ul>
      )}
      <CartButton onClick={clearCart}>Limpiar Carrito</CartButton>
    </CartContainer>
  );
};

export default ShoppingCart;
