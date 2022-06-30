import styled from 'styled-components';

export const MainHeader = styled.header`
  padding: 16px 0;
  display: flex;
  justify-content: flex-end;
`;

export const NavBar = styled.nav`
    height: 100%;
    font-weight: 500;

    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5%;
    }

    .active {
      color: ${(props) => (props.theme.colors.primary)};
    }
`;
