import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';
import { ThemeProvider } from 'styled-components';
import light from '../../styles/themes/light';

describe('renderizado en Layout', () => {
  it('renderiza un div con bgColor', () => {
    render(
      <ThemeProvider theme={light}>
        <Layout bgColor="black">{<div />}</Layout>
      </ThemeProvider>
    );

    expect(screen.getByLabelText('container')).toHaveAttribute(
      'bgColor',
      'black'
    );
  });
});

// describe('renderizado en Donate', () => {
//   it('renderiza un h1', () => {
//     render(<Donate />, { wrapper: MemoryRouter });

//     expect(
//       screen.getByRole('heading', {
//         level: 1,
//         name: 'Colabora con el proyecto',
//       })
//     ).toBeInTheDocument();
//   });

//   it('renderiza un a con href', () => {
//     render(<Donate />);

//     expect(screen.getByRole('link')).toHaveAttribute(
//       'href',
//       'https://mpago.la/2rvjf8x'
//     );
//   });

//   it('renderiza un a con target _blank', () => {
//     render(<Donate />);

//     expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
//   });
// });
