import React from 'react';
import { Box, Card, CardContent, Typography, Chip } from '@mui/material';
import { Construction } from '@mui/icons-material';
import PageHeader from '../components/common/PageHeader';

export default function PlaceholderPage({ title, subtitle, breadcrumbs = [], icon: Icon, badge = 'Coming Soon', actions }) {
  const DisplayIcon = Icon || Construction;
  return (
    <Box>
      <PageHeader title={title} subtitle={subtitle} breadcrumbs={breadcrumbs} badge={badge} actions={actions} />
      <Card>
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              py: 10,
              gap: 2.5,
              border: '1px dashed rgba(2, 13, 71, 0.15)',
              borderRadius: 2,
              background: 'rgba(2, 13, 71, 0.02)',
            }}
          >
            <Box
              sx={{
                width: 72,
                height: 72,
                borderRadius: 3,
                background: 'rgba(2, 13, 71, 0.06)',
                border: '1px solid rgba(2, 13, 71, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <DisplayIcon sx={{ fontSize: 36, color: 'rgba(2, 13, 71, 0.3)' }} />
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: '#020D47', fontWeight: 700, mb: 0.5 }}>
                {title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(13, 27, 75, 0.5)', maxWidth: 320 }}>
                This module is being migrated from the Google Apps Script version. It will be fully functional once connected to the FastAPI backend.
              </Typography>
            </Box>
            <Chip
              label="Phase 3 — Feature Migration"
              size="small"
              sx={{ background: 'rgba(2, 13, 71, 0.07)', color: '#020D47', fontSize: '0.65rem', border: '1px solid rgba(2, 13, 71, 0.15)', fontWeight: 600 }}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
