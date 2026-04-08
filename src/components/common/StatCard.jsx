import React from 'react';
import { Card, CardContent, Box, Typography, Skeleton } from '@mui/material';
import { TrendingUp, TrendingDown, TrendingFlat } from '@mui/icons-material';

export default function StatCard({ title, value, subtitle, icon: Icon, trend, trendValue, loading, color = '#020D47', gradient }) {
  const trendIcon = trend === 'up' ? <TrendingUp sx={{ fontSize: 14 }} />
    : trend === 'down' ? <TrendingDown sx={{ fontSize: 14 }} />
    : <TrendingFlat sx={{ fontSize: 14 }} />;
  const trendColor = trend === 'up' ? '#2E7D32' : trend === 'down' ? '#C62828' : '#757575';

  return (
    <Card
      sx={{
        height: '100%',
        background: gradient || '#FFFFFF',
        border: '1px solid rgba(2, 13, 71, 0.08)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, ${color}44, ${color}cc, ${color}44)`,
        },
      }}
    >
      <CardContent sx={{ p: 2.5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Typography variant="caption" sx={{ color: 'rgba(13, 27, 75, 0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.65rem', fontWeight: 700 }}>
            {title}
          </Typography>
          {Icon && (
            <Box sx={{ width: 36, height: 36, borderRadius: 2, background: `${color}12`, border: `1px solid ${color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon sx={{ fontSize: 18, color }} />
            </Box>
          )}
        </Box>
        {loading ? (
          <Skeleton variant="text" width="60%" height={40} sx={{ bgcolor: 'rgba(2, 13, 71, 0.06)' }} />
        ) : (
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#0D1B4B', letterSpacing: '-0.02em', mb: 0.5, fontVariantNumeric: 'tabular-nums' }}>
            {value}
          </Typography>
        )}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1 }}>
          {trend && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25, color: trendColor }}>
              {trendIcon}
              <Typography variant="caption" sx={{ fontSize: '0.65rem', fontWeight: 700, color: trendColor }}>
                {trendValue}
              </Typography>
            </Box>
          )}
          {subtitle && (
            <Typography variant="caption" sx={{ color: 'rgba(13, 27, 75, 0.45)', fontSize: '0.65rem', ml: trend ? 0.5 : 0 }}>
              {subtitle}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
