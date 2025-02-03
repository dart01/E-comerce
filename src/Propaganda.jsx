
import styled from 'styled-components';
import promoImage from './imagenes/imagen.jpg'; // Assuming the promotional image is logo.jpg

const PropagandaContainer = styled.div`
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */
  position: relative;
  width: 100%;
  height: 100vh; /* Full viewport height */
  overflow: hidden; /* Hide overflow */
`;

const PromoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cover the entire area */
`;

const PromoButton = styled.button`
  position: absolute;
  bottom: 20px; /* Distance from the bottom */
  left: 20px; /* Distance from the left */
  padding: 10px 20px;
  background-color: #007bff; /* Button color */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3; /* Darker shade on hover */
  }
`;

const Propaganda = () => {
  return (
    <PropagandaContainer>
      <PromoImage src={promoImage} alt="Promotional" />
      <PromoButton>¡Compra Ahora!</PromoButton>
    </PropagandaContainer>
  );
};

export default Propaganda;
