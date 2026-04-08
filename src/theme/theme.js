import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#020D47',
      light: '#0A1E82',
      dark: '#010830',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#00897B',
      light: '#4DB6AC',
      dark: '#005A50',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5F6FA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0D1B4B',
      secondary: '#4A5568',
    },
    divider: 'rgba(2, 13, 71, 0.1)',
    action: {
      hover: 'rgba(2, 13, 71, 0.05)',
      selected: 'rgba(2, 13, 71, 0.1)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    subtitle1: { fontWeight: 500, letterSpacing: '0.01em' },
    button: { fontWeight: 600, letterSpacing: '0.04em' },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#F5F6FA',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(135deg, #020D47 0%, #0A1E82 100%)',
          boxShadow: '0 2px 20px rgba(2, 13, 71, 0.25)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage: 'linear-gradient(180deg, #020D47 0%, #010830 100%)',
          borderRight: '1px solid rgba(213, 247, 234, 0.15)',
          boxShadow: '4px 0 24px rgba(2, 13, 71, 0.2)',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: '2px 8px',
          transition: 'all 0.2s ease',
          '&:hover': {
            background: 'rgba(213, 247, 234, 0.1)',
            transform: 'translateX(4px)',
          },
          '&.Mui-selected': {
            background: 'rgba(213, 247, 234, 0.18)',
            borderLeft: '3px solid #D5F7EA',
            '&:hover': {
              background: 'rgba(213, 247, 234, 0.22)',
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#FFFFFF',
          border: '1px solid rgba(2, 13, 71, 0.08)',
          boxShadow: '0 2px 12px rgba(2, 13, 71, 0.06)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 32px rgba(2, 13, 71, 0.12)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          transition: 'all 0.2s ease',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #020D47 0%, #0A1E82 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #0A1E82 0%, #1530CC 100%)',
            boxShadow: '0 4px 16px rgba(2, 13, 71, 0.4)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #00897B 0%, #4DB6AC 100%)',
          color: '#FFFFFF',
          '&:hover': {
            background: 'linear-gradient(135deg, #005A50 0%, #00897B 100%)',
          },
        },
        outlinedPrimary: {
          borderColor: 'rgba(2, 13, 71, 0.3)',
          color: '#020D47',
          '&:hover': {
            borderColor: '#020D47',
            background: 'rgba(2, 13, 71, 0.05)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 600,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': {
            background: 'rgba(2, 13, 71, 0.04)',
            color: '#020D47',
            fontWeight: 700,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            fontSize: '0.7rem',
            borderBottom: '2px solid rgba(2, 13, 71, 0.1)',
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          transition: 'background 0.15s ease',
          '&:hover': {
            background: 'rgba(2, 13, 71, 0.03)',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: '#0D1B4B',
          borderBottom: '1px solid rgba(2, 13, 71, 0.07)',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: '#0D1B4B',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& fieldset': { borderColor: 'rgba(2, 13, 71, 0.2)' },
          '&:hover fieldset': { borderColor: 'rgba(2, 13, 71, 0.4)' },
          '&.Mui-focused fieldset': { borderColor: '#020D47' },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: 'rgba(13, 27, 75, 0.5)',
          '&.Mui-selected': { color: '#020D47' },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: { backgroundColor: '#020D47' },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

export default theme;
