import styled from 'styled-components';

type LayoutStyledProps = {
  bgColor?: string;
  height?: string;
  body?: boolean;
  padding?: string;
  bgImg?: string;
};

export const MainWrapper = styled.div<LayoutStyledProps>`
  min-height: ${(props) => (props.height || '100vh')};
  border-radius: '0';
  width: 100%;
  padding: ${(props) => (props.padding || '0 21px')};
  background-image: url(${(props) => (props.bgImg || 'none')});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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

  &::before {
      content: "";
      background-image: ${(props) => (props.bgImg ? 'linear-gradient(black,transparent)' : 'none')};
      position: absolute;
      height: 60px;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 1;
  }
`;
