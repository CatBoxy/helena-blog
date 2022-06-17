import { ReactNode } from 'react';
import { MainWrapper } from './styles';

interface LayoutProps {
  bgColor?: string;
  height?: string;
  body?: boolean;
  padding?: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ body, height, bgColor, children, padding }) => {
  return (
    <MainWrapper bgColor={bgColor} height={height} body={body} padding={padding}>
      {children}
    </MainWrapper>
  );
};

export default Layout;
