import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 24px;

    @media (max-width: 950px) {
        width: 100%;
    }

    @media (min-width: 950px) {
        flex-direction: column;
    }
`;

export const CoverWrapper = styled.div`
    @media (max-width: 950px) {
        width: 50%;
    }
    @media (min-width: 950px) {
        display: flex;
        /* justify-content: center; */
        align-items: center;
        max-height: 420px;
        min-height: 420px;

        img {
            max-height: 420px;
            max-width: 300px;
        }
    }

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
    @media (max-width: 950px) {
        width: 50%;
    }

    @media (min-width: 950px) {
        width: inherit;
    }
    h2 {
        font-weight: bold;
        margin-bottom: 10px;
    }
`;