import styled from "styled-components";

export const ListWrapper = styled.nav`
  width: 100%;
  font-weight: 500;
  font-size: 20px;
  color: white;
  display: none;
  justify-content: center;

  @media (min-width: 950px) {
      display: flex;
   }
  
  ul {
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 5%;
  }
  
  @media (min-width: 1000px) {
    ul {
      width: 960px;
    }
  }

  .active {
    color: ${(props) => props.theme.colors.primary};
  }
`;