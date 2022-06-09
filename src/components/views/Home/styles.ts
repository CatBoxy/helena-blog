import styled from 'styled-components';

type LayoutStyledProps = {
  bgColor?: string;
};

export const Layout = styled.div<LayoutStyledProps>`
  min-height: 100vh;
  width: 100%;
  padding: 0 16px;
  background-color: ${(props) =>
    props.bgColor === 'white'
      ? props.theme.colors.background
      : props.theme.colors.primary};
`;
