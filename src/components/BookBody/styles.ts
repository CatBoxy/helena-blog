import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 30px 0;
    font-size: 20px;
    h2 {
        font-size: 21px;
    }

    article {
        padding: 3px;
    }

    div > button {
        color: ${(props) => (props.theme.colors.primary)};
        padding: 6px 15px;
        border-radius: 3px;
    }

    div > button:hover {
        background-color: #F9D4C7;
    }

    div > button:active {
        background-color: #F19D7E;
    }
`;