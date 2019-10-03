const size = {
  mobile: 425,
  tablet: 1024,
  desktop: 2560,
};

const theme = {
  color: {
    accent: {
      primary: '#EDDD00',
      secondary: '#1B9AAA',
      error: '#AA1B2E',
    },
    text: {
      primary: '#FDFFFC',
      secondary: '#E9EAE8',
    },
    background: {
      base: '#191716',
      far: '#050505',
    },
    elements: {
      line: '#EDDD00',
      panel: '#050505',
      icon: {
        base: '#FDFFFC',
        active: '#EDDD00',
      },
      label: '#E9EAE8',
    },
    palette: { // for reference
      platinum: '#E9EAE8',
      eerieBlack: '#191716',
      richBlack: '#050505',
      titaniumYellow: '#EDDD00',
      lightSeaGreen: '#1B9AAA',
      upsdellRed: '#AA1B2E',
      turquoiseBlue: '#00FDE9',
      grape: '#6b34bd',
    },
  },
  font: {
    family: {
      base: 'Rubik, sans-serif',
      special: 'Megrim, sans-serif',
    },
    size: {
      base: '16px',
      heading: {
        primary: '3rem',
        secondary: '2rem',
      },
      label: {
        primary: '1.25rem',
        secondary: '0.875rem',
      },
    },
    weight: {
      base: '300',
      bold: '500',
    },
    lineHeight: {
      label: '1.2',
      heading: '1.3',
      text: '1.8',
    },
  },
  size: {
    borderRadius: '6px',
    line: '4px',
    border: '2px',
    gap: '16px',
    screen: {
      wide: '100vw',
      narrow: '1200px',
    },
  },
  transition: {
    quick: '0.2s cubic-bezier(.57,.17,.32,.92)',
    base: '0.4s cubic-bezier(.49,.98,.87,.99)',
    slow: '1s cubic-bezier(.49,.98,.87,.99)',
  },
  visuals: {
    shadow: {
      close: '0 3px 5px 0 rgba(0, 0, 0, 0.2)',
      far: '3px 6px 15px 0 rgba(0, 0, 0, 0.1)',
    },
    perspective: {
      far: '1000px',
    },
    zindex: {
      front: 3000,
      middle: 2000,
      back: 1000,
    },
  },
  devices: {
    mobile: `(max-width: ${size.mobile}px)`,
    tablet: `(min-width: ${size.mobile + 1}px) and (max-width: ${size.tablet}px)`,
    desktop: `(min-width: ${size.tablet + 1}px) and (max-width: ${size.desktop}px)`,
  },
};

export default theme;
