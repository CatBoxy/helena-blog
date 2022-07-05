import styled from 'styled-components';

export const Container = styled.div`
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 20px;

  h2 {
    margin-top: 32px;
  }

  .signature img {
    height: 90px;
    margin-top: 16px;
  }

  .landscape {
    width: 100%;
    display: flex;
  }
  .landscape img {
    width: 100%;
  }

  ul {
    color: #b2b2b2;
    display: flex;
    flex-direction: row;
    gap: 16px;
  }

  .navFooter {
    margin-bottom: 32px;
  }

  li {
    transition: 0.3s;
    cursor: pointer;
  }

  li:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;
