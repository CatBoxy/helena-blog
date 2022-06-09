import styled from 'styled-components';

type LayoutStyledProps = {
  bgColor?: string;
  footer?: boolean;
};

export const MainWrapper = styled.div<LayoutStyledProps>`
  min-height: ${(props) => (props.footer ? '100px' : '100vh')};
  width: 100%;
  padding: 0 16px;
  background-color: ${(props) => {
    switch (props.bgColor) {
      case 'white':
        return props.theme.colors.background;

      case 'black':
        return props.theme.colors.secondary;

      default:
        return props.theme.colors.primary;
    }
  }};
`;
