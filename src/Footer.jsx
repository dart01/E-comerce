// Footer.jsx
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: rgb(104, 103, 103);
  color: #fff;
  text-align: center;
  width: 100%; /* Ensure full width */
  position: fixed; /* Fix to the bottom */
  bottom: 0; /* Align to the bottom */
  z-index: 1000; /* Ensure it is above other content */
`;

const FooterLinks = styled.div`
  margin: 1rem 0;
`;

const FooterLink = styled.a`
  color: #fff;
  margin: 0 1rem;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const FooterText = styled.p`
  margin: 0.5rem 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="/privacy-policy">Política de Privacidad</FooterLink>
        <FooterLink href="/terms-of-service">Términos de Servicio</FooterLink>
        <FooterLink href="/contact">Contacto</FooterLink>
      </FooterLinks>
      <FooterText>&copy; 2023 Tienda Minimalista. Todos los derechos reservados.</FooterText>
    </FooterContainer>
  );
};

export default Footer;