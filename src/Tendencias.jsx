import styled from 'styled-components';
import iconoMotor from './imagenes/iconoMotor.png';
import iconoSuspension from './imagenes/iconoSuspension.png';
import iconoFreno from './imagenes/iconoFreno.png';
import iconoAccesorios from './imagenes/iconoAccesorios.png';
import iconoElectrico from './imagenes/iconoBujia.png';


const TendenciasContainer = styled.div`
    padding: 40px 20px;
    max-width: 1200px;
    margin: 0 auto;
`;

const TitleContainer = styled.div`
    text-align: center;
    margin-bottom: 40px;
    width: 100%;
`;

const Title = styled.h2`
    display: inline-block;
    color: #333;
    font-size: 2.5rem;
    padding-bottom: 10px;
    border-bottom: 1px solid #007AFF;
    margin: 0 auto;
`;

const CategoriesGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
`;

const CategoryCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: 200px;
`;

const CategoryImage = styled.img`
    width: 60%;
    height: 60%;
    object-fit: contain;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ImageContainer = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
        cursor: pointer;
    }
`;

const CategoryName = styled.div`
    width: 100%;
    color: #333;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
`;

// Datos de las categorías (reemplaza las URLs con tus GIFs)
const categories = [
    {
        name: 'Motor',
        gif: iconoMotor
    },
    {
        name: 'Suspensión',
        gif: iconoSuspension
    },
    {
        name: 'Frenos',
        gif: iconoFreno
    },
    {
        name: 'Accesorios',
        gif: iconoAccesorios
    },
    {
        name: 'Eléctrico',
        gif: iconoElectrico
    }
];

const Tendencias = () => {
    return (
        <TendenciasContainer>
            <TitleContainer>
                <Title>Categorías Destacadas</Title>
            </TitleContainer>
            <CategoriesGrid>
                {categories.map((category, index) => (
                    <CategoryCard key={index}>
                        <ImageContainer>
                            <CategoryImage 
                                src={category.gif} 
                                alt={category.name}
                                loading="lazy"
                            />
                        </ImageContainer>
                        <CategoryName>{category.name}</CategoryName>
                    </CategoryCard>
                ))}
            </CategoriesGrid>
        </TendenciasContainer>
    );
};

export default Tendencias;