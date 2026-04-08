import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Drawer, List, ListItemButton, ListItemIcon, ListItemText,
  Collapse, Box, Typography, Divider, Tooltip,
} from '@mui/material';
import {
  GridView, AccountBalance, Assessment, Settings, ExpandMore, ExpandLess,
  Assignment, AccountBalanceWallet, ReceiptLong, VolunteerActivism, AccountTree,
  SyncAlt, SwapHoriz, ShoppingCart, MenuBook, Book, ShowChart, History,
  Build, Payments, Redeem, Home, Groups, Description, ConfirmationNumber,
  CorporateFare, Dashboard,
} from '@mui/icons-material';
import { NAV_SECTIONS, NAV_HOME, DRAWER_WIDTH, APP_NAME, APP_SUITE } from '../../config/navigation';

const ICON_MAP = {
  GridView, AccountBalance, Assessment, Settings, Dashboard,
  Assignment, AccountBalanceWallet, ReceiptLong, VolunteerActivism, AccountTree,
  SyncAlt, SwapHoriz, ShoppingCart, MenuBook, Book, ShowChart, History,
  Build, Payments, Redeem, Home, Groups, Description, ConfirmationNumber,
};

function NavIcon({ name, sx }) {
  const IconComp = ICON_MAP[name];
  if (!IconComp) return null;
  return <IconComp sx={{ fontSize: 18, ...sx }} />;
}

function NavLeafItem({ item, depth = 0 }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === item.path;

  return (
    <ListItemButton
      selected={isActive}
      onClick={() => navigate(item.path)}
      sx={{ pl: 2 + depth * 1.5, py: 0.7 }}
    >
      <ListItemIcon sx={{ minWidth: 32, color: isActive ? '#D5F7EA' : 'rgba(213,247,234,0.6)' }}>
        <NavIcon name={item.icon} />
      </ListItemIcon>
      <ListItemText
        primary={item.label}
        primaryTypographyProps={{
          fontSize: '0.8rem',
          fontWeight: isActive ? 700 : 400,
          color: isActive ? '#D5F7EA' : 'rgba(255,255,255,0.75)',
          noWrap: true,
        }}
      />
    </ListItemButton>
  );
}

function SubGroupItem({ group, depth }) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <ListItemButton onClick={() => setOpen(!open)} sx={{ pl: 2 + depth * 1.5, py: 0.6 }}>
        <ListItemText
          primary={group.label}
          primaryTypographyProps={{
            fontSize: '0.68rem',
            fontWeight: 700,
            color: 'rgba(213,247,234,0.5)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        />
        {open ? <ExpandLess sx={{ color: 'rgba(213,247,234,0.4)', fontSize: 16 }} />
               : <ExpandMore sx={{ color: 'rgba(213,247,234,0.4)', fontSize: 16 }} />}
      </ListItemButton>
      <Collapse in={open}>
        <List disablePadding>
          {group.items.map(item => (
            <NavLeafItem key={item.id} item={item} depth={depth + 1} />
          ))}
        </List>
      </Collapse>
    </>
  );
}

function SectionItem({ section }) {
  const [open, setOpen] = useState(true);
  const SectionIcon = ICON_MAP[section.icon] || GridView;

  return (
    <>
      <ListItemButton
        onClick={() => setOpen(!open)}
        sx={{
          py: 1,
          px: 1.5,
          mx: 1,
          borderRadius: 2,
          mb: 0.5,
          background: open ? 'rgba(213,247,234,0.06)' : 'transparent',
        }}
      >
        <ListItemIcon sx={{ minWidth: 36, color: '#D5F7EA' }}>
          <SectionIcon sx={{ fontSize: 20 }} />
        </ListItemIcon>
        <ListItemText
          primary={section.label}
          primaryTypographyProps={{
            fontSize: '0.82rem',
            fontWeight: 700,
            color: '#D5F7EA',
          }}
        />
        {open
          ? <ExpandLess sx={{ color: 'rgba(213,247,234,0.6)', fontSize: 18 }} />
          : <ExpandMore sx={{ color: 'rgba(213,247,234,0.6)', fontSize: 18 }} />}
      </ListItemButton>
      <Collapse in={open}>
        <List disablePadding sx={{ mb: 1 }}>
          {section.items.map(item =>
            item.isSubGroup
              ? <SubGroupItem key={item.id} group={item} depth={1} />
              : <NavLeafItem key={item.id} item={item} depth={1} />
          )}
        </List>
      </Collapse>
    </>
  );
}

export default function Sidebar({ mobileOpen, onClose }) {
  const drawerContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      {/* Brand Header */}
      <Box
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          background: 'rgba(213,247,234,0.05)',
          borderBottom: '1px solid rgba(213,247,234,0.12)',
          minHeight: 64,
        }}
      >
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: 2,
            background: 'linear-gradient(135deg, #D5F7EA22 0%, #D5F7EA44 100%)',
            border: '1px solid rgba(213,247,234,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <CorporateFare sx={{ color: '#D5F7EA', fontSize: 20 }} />
        </Box>
        <Box sx={{ overflow: 'hidden' }}>
          <Typography
            variant="caption"
            sx={{ color: '#D5F7EA', fontWeight: 700, fontSize: '0.62rem', display: 'block', lineHeight: 1.2, opacity: 0.85 }}
          >
            ASA Philippines Employees<br />Credit Cooperative
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: 'rgba(213,247,234,0.5)', fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}
          >
            Financial Suite
          </Typography>
        </Box>
      </Box>

      {/* Nav */}
      <Box sx={{ flexGrow: 1, overflowY: 'auto', py: 1, '&::-webkit-scrollbar': { width: 4 }, '&::-webkit-scrollbar-thumb': { background: 'rgba(213,247,234,0.2)', borderRadius: 2 } }}>
        <List disablePadding>
          {/* Home / Dashboard */}
          <NavLeafItem item={NAV_HOME} depth={0} />
          <Divider sx={{ borderColor: 'rgba(213,247,234,0.1)', mx: 2, my: 0.5 }} />
          {NAV_SECTIONS.map((section, idx) => (
            <React.Fragment key={section.id}>
              <SectionItem section={section} />
              {idx < NAV_SECTIONS.length - 1 && (
                <Divider sx={{ borderColor: 'rgba(213,247,234,0.1)', mx: 2, my: 0.5 }} />
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>

      {/* Footer */}
      <Box sx={{ p: 2, borderTop: '1px solid rgba(213,247,234,0.12)' }}>
        <Typography variant="caption" sx={{ color: 'rgba(213,247,234,0.35)', fontSize: '0.6rem' }}>
          © 2025 APECC Financial Suite v2.0
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: DRAWER_WIDTH, boxSizing: 'border-box' },
        }}
      >
        {drawerContent}
      </Drawer>
      {/* Desktop drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': { width: DRAWER_WIDTH, boxSizing: 'border-box', top: 64, height: 'calc(100% - 64px)' },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
