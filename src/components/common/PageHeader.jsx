import React from 'react';
import { Box, Typography, Breadcrumbs, Chip } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';

export default function PageHeader({ title, subtitle, breadcrumbs = [], actions, badge }) {
  return (
    <Box
      sx={{
        mb: 3,
        pb: 2.5,
        borderBottom: '1px solid rgba(2, 13, 71, 0.1)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 2,
        flexWrap: 'wrap',
      }}
    >
      <Box>
        {breadcrumbs.length > 0 && (
          <Breadcrumbs
            separator={<NavigateNext sx={{ fontSize: 14, color: 'rgba(13, 27, 75, 0.35)' }} />}
            sx={{ mb: 0.5 }}
          >
            {breadcrumbs.map((crumb, i) => (
              <Typography
                key={i}
                variant="caption"
                sx={{ color: 'rgba(13, 27, 75, 0.45)', fontSize: '0.7rem' }}
              >
                {crumb}
              </Typography>
            ))}
          </Breadcrumbs>
        )}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, color: '#020D47', letterSpacing: '-0.01em' }}
          >
            {title}
          </Typography>
          {badge && (
            <Chip
              label={badge}
              size="small"
              sx={{
                background: 'rgba(2, 13, 71, 0.08)',
                color: '#020D47',
                fontSize: '0.65rem',
                height: 20,
                fontWeight: 700,
              }}
            />
          )}
        </Box>
        {subtitle && (
          <Typography variant="body2" sx={{ color: 'rgba(13, 27, 75, 0.5)', mt: 0.5, fontSize: '0.8rem' }}>
            {subtitle}
          </Typography>
        )}
      </Box>
      {actions && <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>{actions}</Box>}
    </Box>
  );
}
