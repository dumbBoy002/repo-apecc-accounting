import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, IconButton, Typography, Box, Chip,
  Avatar, Tooltip, Badge,
} from '@mui/material';
import {
  Menu as MenuIcon, CorporateFare, Notifications, AccountCircle,
  WifiOff,
} from '@mui/icons-material';
import { APP_SUITE } from '../../config/navigation';

function LiveClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const dateStr = now.toLocaleDateString('en-PH', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-PH', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <Box sx={{ textAlign: 'right', lineHeight: 1 }}>
      <Typography variant="caption" sx={{ color: 'rgba(213,247,234,0.6)', fontSize: '0.6rem', display: 'block' }}>
        {dateStr}
      </Typography>
      <Typography variant="caption" sx={{ color: '#D5F7EA', fontWeight: 700, fontSize: '0.75rem', fontVariantNumeric: 'tabular-nums', letterSpacing: '0.05em' }}>
        {timeStr}
      </Typography>
    </Box>
  );
}

export default function Navbar({ onMenuToggle }) {
  return (
    <AppBar position="fixed" elevation={0} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ gap: 1, minHeight: 64 }}>
        {/* Mobile menu button */}
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuToggle}
          sx={{ display: { md: 'none' }, mr: 1 }}
        >
          <MenuIcon />
        </IconButton>

        {/* Brand */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mr: 2 }}>
          <Box
            sx={{
              width: 34,
              height: 34,
              borderRadius: 2,
              background: 'rgba(213,247,234,0.15)',
              border: '1px solid rgba(213,247,234,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <CorporateFare sx={{ color: '#D5F7EA', fontSize: 20 }} />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Typography
              sx={{ fontSize: '0.75rem', fontWeight: 800, color: '#D5F7EA', lineHeight: 1.1, letterSpacing: '0.02em' }}
            >
              ASA Philippines Employees Credit Cooperative
            </Typography>
            <Typography sx={{ fontSize: '0.6rem', color: 'rgba(213,247,234,0.55)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {APP_SUITE}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {/* Status chip */}
        <Chip
          label="Live"
          size="small"
          sx={{
            background: 'rgba(213,247,234,0.15)',
            color: '#D5F7EA',
            fontSize: '0.6rem',
            height: 20,
            fontWeight: 700,
            '& .MuiChip-icon': { color: '#4CAF50', fontSize: 8 },
            display: { xs: 'none', sm: 'flex' },
          }}
          icon={<Box component="span" sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#4CAF50', animation: 'pulse 2s infinite', '@keyframes pulse': { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.4 } } }} />}
        />

        {/* Clock */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, mx: 2 }}>
          <LiveClock />
        </Box>

        {/* Notifications */}
        <Tooltip title="Notifications">
          <IconButton size="small" sx={{ color: 'rgba(213,247,234,0.7)', '&:hover': { color: '#D5F7EA' } }}>
            <Badge badgeContent={0} color="error">
              <Notifications sx={{ fontSize: 20 }} />
            </Badge>
          </IconButton>
        </Tooltip>

        {/* User Avatar */}
        <Tooltip title="User Account">
          <IconButton size="small" sx={{ ml: 0.5 }}>
            <Avatar
              sx={{
                width: 32,
                height: 32,
                background: 'linear-gradient(135deg, #D5F7EA22, #D5F7EA44)',
                border: '1px solid rgba(213,247,234,0.4)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#D5F7EA',
              }}
            >
              A
            </Avatar>
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
