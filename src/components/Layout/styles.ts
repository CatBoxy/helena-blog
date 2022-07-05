import styled from 'styled-components';

type LayoutStyledProps = {
  bgColor?: string;
  height?: string;
  body?: boolean;
  padding?: string;
};

export const MainWrapper = styled.div<LayoutStyledProps>`
  min-height: ${(props) => (props.height || '100vh')};
  border-radius: '0';
  width: 100%;
  padding: ${(props) => (props.padding || '0 21px')};
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
