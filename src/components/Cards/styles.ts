import styled from 'styled-components';

export const Container = styled.div`
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (min-width: 950px) {
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 960px;
        margin: auto;
    }
`;