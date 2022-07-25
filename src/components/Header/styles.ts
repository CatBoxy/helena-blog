import styled from 'styled-components';

type NavWrapperProps = {
  justify?: string
};

export const MainHeader = styled.header`
  padding: 16px 0;
  display: flex;
  justify-content: flex-end;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  position: relative;
  z-index: 5;
  color: ${(props) => props.theme.colors.primary};

  h2 {
    font-size: 1.2em;
    font-weight: 600;
  }

  @media (min-width: 950px) {
    .smDisplay {
      display: none;
    }
   }
`;

export const NavWrapper = styled.div<NavWrapperProps>`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: ${(props) => props.justify};
`

export const DrawerNavBar = styled.nav`
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
    color: ${(props) => props.theme.colors.primary};
  }
`;
