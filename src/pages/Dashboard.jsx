import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Box, Typography, Chip } from '@mui/material';
import {
  Assignment, AccountBalanceWallet, ReceiptLong, TrendingUp,
  AccountBalance, Savings, MonetizationOn, People,
} from '@mui/icons-material';
import PageHeader from '../components/common/PageHeader';
import StatCard from '../components/common/StatCard';

const STATS = [
  { title: 'Total Collections Today', value: '₱0.00', icon: Assignment, trend: 'flat', trendValue: '0%', subtitle: 'vs yesterday', color: '#020D47' },
  { title: 'Cash on Hand', value: '₱0.00', icon: MonetizationOn, trend: 'flat', trendValue: '0%', subtitle: 'current balance', color: '#1565C0' },
  { title: 'Bank Balance', value: '₱0.00', icon: AccountBalance, trend: 'flat', trendValue: '0%', subtitle: 'all accounts', color: '#E65100' },
  { title: 'Total Members', value: '0', icon: People, subtitle: 'active members', color: '#6A1B9A' },
];

const QUICK_LINKS = [
  { label: 'Daily Collection Sheet', path: '/dcs', icon: Assignment, color: '#020D47' },
  { label: 'Bank Transactions', path: '/bank-transactions', icon: AccountBalanceWallet, color: '#1565C0' },
  { label: 'Cash Disbursement', path: '/cash-disbursement', icon: AccountBalance, color: '#E65100' },
  { label: 'Cash Receipt', path: '/cash-receipt', icon: ReceiptLong, color: '#2E7D32' },
];

export default function Dashboard() {
  return (
    <Box>
      <PageHeader
        title="Dashboard"
        subtitle="Welcome to APECC Financial Suite — your cooperative accounting hub."
        breadcrumbs={['Home', 'Dashboard']}
        badge="Overview"
      />

      {/* Stat Cards */}
      <Grid container spacing={2.5} sx={{ mb: 3 }}>
        {STATS.map((stat) => (
          <Grid item xs={12} sm={6} lg={3} key={stat.title}>
            <StatCard {...stat} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2.5}>
        {/* Quick Access */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="subtitle2" sx={{ color: '#020D47', fontWeight: 700, mb: 2, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Quick Access
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {QUICK_LINKS.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Box
                      key={link.label}
                      component={Link}
                      to={link.path}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        p: 1.5,
                        borderRadius: 2,
                        border: '1px solid rgba(2, 13, 71, 0.1)',
                        background: 'rgba(2, 13, 71, 0.02)',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          background: 'rgba(2, 13, 71, 0.06)',
                          transform: 'translateX(4px)',
                          borderColor: `${link.color}44`,
                        },
                      }}
                    >
                      <Box sx={{ width: 32, height: 32, borderRadius: 1.5, background: `${link.color}12`, border: `1px solid ${link.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon sx={{ fontSize: 16, color: link.color }} />
                      </Box>
                      <Typography variant="body2" sx={{ color: '#0D1B4B', fontSize: '0.8rem', fontWeight: 500 }}>
                        {link.label}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Activity */}
        <Grid item xs={12} md={8}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="subtitle2" sx={{ color: '#020D47', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Recent Transactions
                </Typography>
                <Chip label="Today" size="small" sx={{ background: 'rgba(2, 13, 71, 0.08)', color: '#020D47', fontSize: '0.6rem', height: 20, fontWeight: 700 }} />
              </Box>

              {/* Placeholder State */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  py: 6,
                  gap: 1.5,
                  border: '1px dashed rgba(2, 13, 71, 0.15)',
                  borderRadius: 2,
                  background: 'rgba(2, 13, 71, 0.02)',
                }}
              >
                <TrendingUp sx={{ fontSize: 40, color: 'rgba(2, 13, 71, 0.15)' }} />
                <Typography variant="body2" sx={{ color: 'rgba(13, 27, 75, 0.5)', fontSize: '0.8rem' }}>
                  No transactions yet
                </Typography>
                <Typography variant="caption" sx={{ color: 'rgba(13, 27, 75, 0.35)', textAlign: 'center', maxWidth: 240 }}>
                  Connect the FastAPI backend to view live transaction data here.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* System Status */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="subtitle2" sx={{ color: '#020D47', fontWeight: 700, mb: 2, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                System Status
              </Typography>
              <Grid container spacing={2}>
                {[
                  { label: 'Frontend (React)', status: 'Online', color: '#2E7D32' },
                  { label: 'Backend (FastAPI)', status: 'Pending Setup', color: '#E65100' },
                  { label: 'Database (PostgreSQL)', status: 'Pending Setup', color: '#E65100' },
                  { label: 'Auth Service', status: 'Pending Config', color: '#C62828' },
                ].map((s) => (
                  <Grid item xs={12} sm={6} md={3} key={s.label}>
                    <Box sx={{ p: 1.5, border: '1px solid rgba(2, 13, 71, 0.1)', borderRadius: 2, background: 'rgba(2, 13, 71, 0.02)' }}>
                      <Typography variant="caption" sx={{ color: 'rgba(13, 27, 75, 0.5)', fontSize: '0.65rem' }}>
                        {s.label}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mt: 0.5 }}>
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: s.color, boxShadow: `0 0 6px ${s.color}66` }} />
                        <Typography variant="caption" sx={{ color: s.color, fontWeight: 700, fontSize: '0.7rem' }}>
                          {s.status}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
