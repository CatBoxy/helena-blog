import styled from 'styled-components';

export const Container = styled.div`
    color: ${(props) => (props.theme.colors.primary)};
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    gap: 20px;
    
    h2 {
        margin-top: 32px;
    }

    .landscape {
        width: 100%;
        display: flex;
    }
    .landscape img {
        width: 100%;
    }

    ul {
        color: #B2B2B2;
        display: flex;
        flex-direction: row;
    }

    li {
        transition: .3s;
        cursor: pointer;
    }

    li:hover {
        color: ${(props) => (props.theme.colors.primary)};
    }
`
