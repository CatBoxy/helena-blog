import { ReactNode } from 'react';
import { MainWrapper } from './styles';

interface LayoutProps {
  bgColor?: string;
  footer?: boolean;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ footer, bgColor, children }) => {
  return (
    <MainWrapper bgColor={bgColor} footer={footer}>
      {children}
    </MainWrapper>
  );
};

export default Layout;
