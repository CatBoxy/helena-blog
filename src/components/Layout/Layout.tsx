import { ReactNode } from 'react';
import { MainWrapper } from './styles';

interface LayoutProps {
  bgColor?: string;
  footer?: boolean;
  body?: boolean;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ body, footer, bgColor, children }) => {
  return (
    <MainWrapper bgColor={bgColor} footer={footer} body={body}>
      {children}
    </MainWrapper>
  );
};

export default Layout;
