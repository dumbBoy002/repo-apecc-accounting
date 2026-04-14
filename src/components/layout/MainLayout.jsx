import React, { useState } from 'react';
import { Box, Toolbar, useTheme, useMediaQuery } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { DRAWER_WIDTH } from '../../config/navigation';

export default function MainLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const handleMenuToggle = () => {
    if (isDesktop) {
      setDesktopOpen(!desktopOpen);
    } else {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar onMenuToggle={handleMenuToggle} />
      <Sidebar 
        mobileOpen={mobileOpen} 
        onClose={() => setMobileOpen(false)}
        desktopOpen={desktopOpen}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { md: desktopOpen ? `${DRAWER_WIDTH}px` : 0 },
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.standard,
          }),
          minHeight: '100vh',
          background: '#F5F6FA',
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
        }}
      >
        <Toolbar sx={{ minHeight: 64 }} />
        <Box sx={{ flexGrow: 1, p: { xs: 2, md: 3 }, overflow: 'auto' }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
