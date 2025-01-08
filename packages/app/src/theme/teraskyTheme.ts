import {
    createBaseThemeOptions,
    createUnifiedTheme,
    genPageTheme,
    palettes,
    shapes,
  } from '@backstage/theme';
  
  export const teraskyLightTheme = createUnifiedTheme({
    ...createBaseThemeOptions({
      palette: {
        ...palettes.light,
        primary: {
          main: '#2c2c3e', // Terasky primary color
        },
        secondary: {
          main: '#172b4d', // Terasky secondary color
        },
        error: {
          main: '#ff5630', // Terasky error color
        },
        warning: {
          main: '#ffab00', // Terasky warning color
        },
        info: {
          main: '#00b8d9', // Terasky info color
        },
        success: {
          main: '#36b37e', // Terasky success color
        },
        background: {
          default: '#f4f5f7', // Terasky background color
          paper: '#ffffff', // Terasky paper color
        },
        banner: {
          info: '#00b8d9', // Terasky banner info color
          error: '#ff5630', // Terasky banner error color
          text: '#172b4d', // Terasky banner text color
          link: '#0052cc', // Terasky banner link color
        },
        errorBackground: '#ff5630', // Terasky error background color
        warningBackground: '#ffab00', // Terasky warning background color
        infoBackground: '#00b8d9', // Terasky info background color
        navigation: {
          background: '#2c2c3e', // Terasky navigation background color
          indicator: '#365565', // Terasky navigation indicator color
          color: '#ffffff', // Terasky navigation color
          selectedColor: '#f07a58', // Terasky navigation selected color
        },
      },
    }),
    defaultPageTheme: 'home',
    fontFamily: 'Comic Sans MS',
    /* below drives the header colors */
    pageTheme: {
      home: genPageTheme({ colors: ['#f07a58', '#2c2c3e'], shape: shapes.wave }),
      documentation: genPageTheme({
        colors: ['#f07a58', '#2c2c3e'],
        shape: shapes.wave2,
      }),
      tool: genPageTheme({ colors: ['#f07a58', '#2c2c3e'], shape: shapes.round }),
      service: genPageTheme({
        colors: ['#f07a58', '#2c2c3e'],
        shape: shapes.wave,
      }),
      website: genPageTheme({
        colors: ['#f07a58', '#2c2c3e'],
        shape: shapes.wave,
      }),
      library: genPageTheme({
        colors: ['#f07a58', '#2c2c3e'],
        shape: shapes.wave,
      }),
      other: genPageTheme({ colors: ['#f07a58', '#2c2c3e'], shape: shapes.wave }),
      app: genPageTheme({ colors: ['#f07a58', '#2c2c3e'], shape: shapes.wave }),
      apis: genPageTheme({ colors: ['#f07a58', '#2c2c3e'], shape: shapes.wave }),
    },
  });

  export const teraskyDarkTheme = createUnifiedTheme({
    ...createBaseThemeOptions({
      palette: {
        ...palettes.dark,
        primary: {
          main: '#bebec6', // Terasky primary color
        },
        secondary: {
          main: '#172b4d', // Terasky secondary color
        },
        error: {
          main: '#ff5630', // Terasky error color
        },
        warning: {
          main: '#ffab00', // Terasky warning color
        },
        info: {
          main: '#00b8d9', // Terasky info color
        },
        success: {
          main: '#36b37e', // Terasky success color
        },
        background: {
          default: '#121212', // Dark background color
          paper: '#1e1e1e', // Dark paper color
        },
        banner: {
          info: '#00b8d9', // Terasky banner info color
          error: '#ff5630', // Terasky banner error color
          text: '#ffffff', // Terasky banner text color
          link: '#0052cc', // Terasky banner link color
        },
        errorBackground: '#ff5630', // Terasky error background color
        warningBackground: '#ffab00', // Terasky warning background color
        infoBackground: '#00b8d9', // Terasky info background color
        navigation: {
          background: '#2c2c3e', // Terasky navigation background color
          indicator: '#365565', // Terasky navigation indicator color
          color: '#ffffff', // Terasky navigation color
          selectedColor: '#f07a58', // Terasky navigation selected color
        },
      },
    }),
    defaultPageTheme: 'home',
    fontFamily: 'Roboto, sans-serif',
    /* below drives the header colors */
    pageTheme: {
      home: genPageTheme({ colors: ['#f07a58', '#2c2c3e'], shape: shapes.wave }),
      documentation: genPageTheme({
        colors: ['#f07a58', '#2c2c3e'],
        shape: shapes.wave2,
      }),
      tool: genPageTheme({ colors: ['#f07a58', '#2c2c3e'], shape: shapes.round }),
      service: genPageTheme({
        colors: ['#f07a58', '#2c2c3e'],
        shape: shapes.wave,
      }),
      website: genPageTheme({
        colors: ['#f07a58', '#2c2c3e'],
        shape: shapes.wave,
      }),
      library: genPageTheme({
        colors: ['#f07a58', '#2c2c3e'],
        shape: shapes.wave,
      }),
      other: genPageTheme({ colors: ['#f07a58', '#2c2c3e'], shape: shapes.wave }),
      app: genPageTheme({ colors: ['#f07a58', '#2c2c3e'], shape: shapes.wave }),
      apis: genPageTheme({ colors: ['#f07a58', '#2c2c3e'], shape: shapes.wave }),
    },
  });