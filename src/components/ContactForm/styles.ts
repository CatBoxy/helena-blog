import styled from 'styled-components';

export const Container = styled.div`
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    gap: 30px;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }

    form div {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    input, textarea {
        padding: .5rem;
        border: 2px solid ${(props) => (props.theme.colors.primary)};
        border-radius: 3px;
    }

    button {
        color: ${(props) => (props.theme.colors.primary)};
        padding: 6px 15px;
        border-radius: 3px;
        max-width: 100px;
        border: 1px solid ${(props) => (props.theme.colors.primary)};
    }

    button:hover {
        background-color: #F9D4C7;
    }

    button:active {
        background-color: #F19D7E;
    }

    .buttonContainer {
        display: flex;
        align-items: center;
    }
`;