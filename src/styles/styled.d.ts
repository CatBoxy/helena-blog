// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    title?: string;

    colors: {
      primary: string;
      secondary: string;
      background: string;
      tertiary: string;
      error: string;
    };
    media: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tablet: string;
      laptop: string;
      laptopL: string;
      desktop: string;
      desktopL: string;
    };
  }
}
