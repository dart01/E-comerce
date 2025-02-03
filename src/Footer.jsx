// FooterUpdated.jsx
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Importing social media icons

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: rgb(104, 103, 103);
  color: #fff;
  text-align: center;
  width: 95%; /* Ensure full width */
  
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

const SocialMediaLinks = styled.div`
  margin: 1rem 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="/privacy-policy">Política de Privacidad</FooterLink>
        <FooterLink href="/terms-of-service">Términos de Servicio</FooterLink>
        <FooterLink href="/contact">Contacto</FooterLink>
      </FooterLinks>
      <SocialMediaLinks>
        <FooterLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={24} />
        </FooterLink>
        <FooterLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </FooterLink>
        <FooterLink href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} />
        </FooterLink>
      </SocialMediaLinks>
      <FooterText>&copy; 2023 Tienda Minimalista. Todos los derechos reservados.</FooterText>
    </FooterContainer>
  );
};

export default Footer;