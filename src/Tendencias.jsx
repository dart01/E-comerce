import styled from 'styled-components';

const TendenciasContainer = styled.div`
    padding: 40px 20px;
    max-width: 1200px;
    margin: 0 auto;
`;

const Title = styled.h2`
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
    color: #333;
    font-size: 2.5rem;
`;

const CategoriesGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
`;

const CategoryCard = styled.div`
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

const CategoryImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const CategoryName = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 15px;
    background: linear-gradient(transparent, rgba(0,0,0,0.7));
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
`;

// Datos de las categorías (reemplaza las URLs con tus GIFs)
const categories = [
    {
        name: 'Motor',
        gif: 'https://placehold.co/200x200/gif?text=Motor'
    },
    {
        name: 'Suspensión',
        gif: 'https://placehold.co/200x200/gif?text=Suspensión'
    },
    {
        name: 'Frenos',
        gif: 'https://placehold.co/200x200/gif?text=Frenos'
    },
    {
        name: 'Accesorios',
        gif: 'https://placehold.co/200x200/gif?text=Accesorios'
    },
    {
        name: 'Eléctrico',
        gif: 'https://placehold.co/200x200/gif?text=Eléctrico'
    }
];

const Tendencias = () => {
    return (
        <TendenciasContainer>
            <Title>Categorías Destacadas</Title>
            <CategoriesGrid>
                {categories.map((category, index) => (
                    <CategoryCard key={index}>
                        <CategoryImage 
                            src={category.gif} 
                            alt={category.name}
                            loading="lazy"
                        />
                        <CategoryName>{category.name}</CategoryName>
                    </CategoryCard>
                ))}
            </CategoriesGrid>
        </TendenciasContainer>
    );
};

export default Tendencias;