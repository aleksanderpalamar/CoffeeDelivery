export const defaultTheme = {
  breakpoints: {
    smartphone: '320px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1280px',
    tv: '1920px',
  },
  colors: {
    base: {
      "base-title": "#272221",
      "base-subtitle": "#403937",
      "base-text": "#574f4d",
      "base-label": "#8d8686",
      "base-hover": "#d7d5d5",
      "base-button": "#e6e5e5",
      "base-input": "#ededed",
      "base-card": "#f3f2f2",
      background: "#fafafa",
      white: "#fff",
    },
    product: {
      "yellow-dark": "#c47f17",
      "yellow": "#dbac2c",
      "yellow-light": "#f1e9c9",

      "purple-dark": "#4b2995",
      "purple": "#8047f8",
      "purple-light": "#ebe5f9",
    },
    error: {
      "error-dark": "#c47f17",
      "error": "#dbac2c",
    }   
  },
  fonts: {
    header: '"Baloo 2", cursive',
    text: '"Roboto", sans-serif',
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    normal: 400,
    bold: 700,
    extrabold: 800,
  },
  lineHeights: {
    normal: 1.5,
    base: 1.6,
  },
  shadows: {
    base: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  },
  gridTemplateColumns: {
    1: "1fr",
    2: "1fr 1fr",
    3: "1fr 1fr 1fr",
    4: "1fr 1fr 1fr 1fr",
  },
  styles: {
    global: {
      body: {
        bg: "base.background",
        color: "base.base-text",
      }
    }
  }
};
