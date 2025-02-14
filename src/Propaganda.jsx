
import styled from 'styled-components';
import promoImage from './imagenes/bannerPrincipal.png'; // Assuming the promotional image is logo.jpg

const RightHalfContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PropagandaContainer = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  background-color: white;
`;

const PromoImage = styled.img`
  width: Auto;
  height: 70%;
  object-fit: cover;
`;

const PromoText = styled.div`
  position: absolute;
  bottom: 55%;
  left: 10%;
  text-align: left;
  max-width: 300px;
`;

const MainText = styled.h1`
  color: #333;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 0 10px 0;
  line-height: 1.2;
`;

const SecondaryText = styled.h3`
  color: #666;
  font-size: 1.2rem;
  font-weight: normal;
  margin: 0;
  line-height: 1.3;
`;

const PromoButton = styled.button`
  position: absolute;
  bottom: 20%;
  left: 10%;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Propaganda = () => {
  return (
    <PropagandaContainer>
      <RightHalfContainer>
        <PromoImage src={promoImage} alt="Promotional" />
      </RightHalfContainer>
      
      <PromoText>
        <MainText>Everything you are looking for</MainText>
        <SecondaryText>your vehicle in one place!</SecondaryText>
      </PromoText>
      <PromoButton>¡Compra Ahora!</PromoButton>
    </PropagandaContainer>
  );
};

export default Propaganda;
