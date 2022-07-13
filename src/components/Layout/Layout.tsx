import { ReactNode } from 'react';
import { MainWrapper } from './styles';

interface LayoutProps {
  bgColor?: string;
  height?: string;
  body?: boolean;
  padding?: string;
  bgImg?: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ body, height, bgColor, children, padding, bgImg }) => {
  return (
    <MainWrapper bgColor={bgColor} height={height} body={body} padding={padding} bgImg={bgImg}>
      {children}
    </MainWrapper>
  );
};

export default Layout;
