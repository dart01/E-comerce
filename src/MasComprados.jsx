import styled from 'styled-components';

const ProductosContainer = styled.div`
    padding: 40px 20px;
    max-width: 1200px;
    margin: 0 auto;
`;

const TituloContainer = styled.div`
    text-align: center;
    margin-bottom: 40px;
    width: 100%;
`;

const Titulo = styled.h2`
    display: inline-block;
    color: #333;
    font-size: 2.5rem;
    padding-bottom: 10px;
    border-bottom: 1px solid #007AFF;
    margin: 0 auto;
`;

const ProductsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
`;

const ProductCard = styled.div`
    flex: 1 1 calc(25% - 30px);
    max-width: 300px;
    min-width: 250px;
    height: 400px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
    
    &:hover {
        transform: translateY(-5px);
        cursor: pointer;
    }
`;

const ProductImage = styled.img`
    width: 100%;
    height: 30%;
    object-fit: cover;
    border-bottom: 3px solid #eee;
`;

const ProductInfo = styled.div`
    padding: 20px;
    text-align: center;
`;

const ProductName = styled.h3`
    color: #333;
    margin-bottom: 10px;
    font-size: 1.2rem;
`;

const ProductDescription = styled.p`
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 15px;
    height: 40px;
    overflow: hidden;
`;

const ProductPrice = styled.div`
    color: #007AFF;
    font-weight: bold;
    font-size: 1.3rem;
    margin-bottom: 15px;
`;

const BuyButton = styled.button`
    background: #007AFF;
    color: white;
    border: none;
    padding: 10px 25px;
    border-radius: 25px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: #218838;
    }
`;

// Datos de productos (reemplaza con tus imágenes reales)
const topProducts = [
    {
        id: 1,
        name: 'Pastillas de Freno Premium',
        description: 'Alta durabilidad y rendimiento',
        price: '$89.99',
        image: 'https://placehold.co/300x200?text=Pastillas+Freno'
    },
    {
        id: 2,
        name: 'Kit Cadena de Distribución',
        description: 'Para motor 2.0L',
        price: '$149.99',
        image: 'https://placehold.co/300x200?text=Kit+Distribución'
    },
    {
        id: 3,
        name: 'Amortiguadores Deportivos',
        description: 'Suspensión mejorada',
        price: '$199.99',
        image: 'https://placehold.co/300x200?text=Amortiguadores'
    },
    {
        id: 4,
        name: 'Filtro de Aire Racing',
        description: 'Aumento de potencia',
        price: '$49.99',
        image: 'https://placehold.co/300x200?text=Filtro+Aire'
    },
    {
        id: 5,
        name: 'Luces LED Xenon',
        description: 'Kit completo 6000K',
        price: '$129.99',
        image: 'https://placehold.co/300x200?text=Luces+LED'
    },
    {
        id: 6,
        name: 'Aceite Sintético 5W-30',
        description: '4 litros + filtro',
        price: '$39.99',
        image: 'https://placehold.co/300x200?text=Aceite+Sintético'
    },
    {
        id: 7,
        name: 'Luces LED Xenon',
        description: 'Kit completo 6000K',
        price: '$129.99',
        image: 'https://placehold.co/300x200?text=Luces+LED'
    },
    {
        id: 8,
        name: 'Aceite Sintético 5W-30',
        description: '4 litros + filtro',
        price: '$39.99',
        image: 'https://placehold.co/300x200?text=Aceite+Sintético'
    }
];

const MasComprados = () => {
    return (
        <ProductosContainer>
            <TituloContainer>
                <Titulo>Los Más Vendidos</Titulo>
            </TituloContainer>
            <ProductsGrid>
                {topProducts.map((product) => (
                    <ProductCard key={product.id}>
                        <ProductImage 
                            src={product.image} 
                            alt={product.name}
                            loading="lazy"
                        />
                        <ProductInfo>
                            <ProductName>{product.name}</ProductName>
                            <ProductDescription>{product.description}</ProductDescription>
                            <ProductPrice>{product.price}</ProductPrice>
                            <BuyButton>Comprar Ahora</BuyButton>
                        </ProductInfo>
                    </ProductCard>
                ))}
            </ProductsGrid>
        </ProductosContainer>
    );
};

export default MasComprados;