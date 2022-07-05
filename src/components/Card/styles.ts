import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    gap: 24px;
`;

export const CoverWrapper = styled.div`
    width: 50%;

    img {
        border-radius: 3px;
        box-shadow: 0px 6px 12px rgb(0 0 0 / 30%);
        transition: transform 200ms ease-in, box-shadow 200ms ease-in;
        cursor: pointer;
    }

    img:hover {
        box-shadow:0px 11px 18px rgba(0,0,0,0.3);
        transform:scale(1.025)
    }
`;

export const DetailsWrapper = styled.div`
    width: 50%;

    h2 {
        font-weight: bold;
        margin-bottom: 10px;
    }
`;