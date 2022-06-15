import styled from 'styled-components';

type LayoutStyledProps = {
  bgColor?: string;
  footer?: boolean;
  body?: boolean;
};

export const MainWrapper = styled.div<LayoutStyledProps>`
  min-height: ${(props) => (props.footer ? '100px' : '100vh')};
  border-radius: ${(props) => (props.body ? '27px 27px 0 0' : '0')};
  width: 100%;
  padding: ${(props) => (props.footer ? '0' : '0 21px')};
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
