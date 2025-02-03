import styled from 'styled-components';

const TendenciasContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
`;

const TendenciaItem = styled.div`
    flex: 1 1 calc(33.33% - 20px); /* 3 items per row with space */
    margin: 10px;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 8px;
    text-align: center;
`;

const Tendencias = () => {
    return (
        <TendenciasContainer>
            <h2>Tendencias</h2>
            {Array.from({ length: 9 }, (_, index) => (
                <TendenciaItem key={index}>Tendencia {index + 1}</TendenciaItem>
            ))}
        </TendenciasContainer>
    );
};

export default Tendencias;
