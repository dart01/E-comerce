
import styled from 'styled-components';

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2rem;
`;

const ProductCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  padding: 1rem;
  width: 200px;
  text-align: center;
`;

const ProductImage = styled.div`
  background-color: #f4f4f4;
  height: 150px;
  margin-bottom: 1rem;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #007bff;
  margin-bottom: 1rem;
`;

const BuyButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Products = () => {
  return (
    <ProductsContainer>
      <ProductCard>
        <ProductImage />
        <ProductName>Producto 1</ProductName>
        <ProductPrice>$100</ProductPrice>
        <BuyButton>Comprar</BuyButton>
      </ProductCard>
      <ProductCard>
        <ProductImage />
        <ProductName>Producto 2</ProductName>
        <ProductPrice>$200</ProductPrice>
        <BuyButton>Comprar</BuyButton>
      </ProductCard>
      {/* Agregar más ProductCard según sea necesario */}
    </ProductsContainer>
  );
};

export default Products;
