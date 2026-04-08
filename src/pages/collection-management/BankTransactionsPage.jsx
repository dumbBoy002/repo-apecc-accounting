import React, { useState } from 'react';
import {
  Box, Card, CardContent, Grid, Button, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, TextField, InputAdornment,
  IconButton, Typography, Tabs, Tab,
} from '@mui/material';
import {
  Add, Print, Search, FilterList, Refresh,
  AccountBalanceWallet, TrendingUp, TrendingDown, SwapHoriz,
  Bloodtype,
} from '@mui/icons-material';
import PageHeader from '../../components/common/PageHeader';
import StatCard from '../../components/common/StatCard';

const TABS = ['All Transactions', 'Deposits', 'Withdrawals'];

// const STATS = [
//   { title: 'Total Deposits', value: '₱0.00', icon: TrendingUp, color: '#2E7D32' },
//   { title: 'Total Withdrawals', value: '₱0.00', icon: TrendingDown, color: '#C62828' },
//   { title: 'Net Movement', value: '₱0.00', icon: SwapHoriz, color: '#020D47' },
//   { title: 'Active Accounts', value: '0', icon: AccountBalanceWallet, color: '#1565C0' },
// ];

const COLUMNS = ['#', 'Bank Account', 'Reference #', 'Transaction Date', 'Type', 'Amount', 'Particulars', 'Status', 'Actions'];
const BANK_ACCOUNTS_COLUMNS = ['#', 'Bank', 'Account Name', 'Account Number', 'Account Status', 'Account Type', 'Balance', 'Actions'];

export default function BankTransactionsPage() {
  const [tab, setTab] = useState(0);

  return (
    <Box>
      <PageHeader
        title="Bank Transactions"
        subtitle="Monitor and manage all bank account transactions."
        breadcrumbs={['Collection Management', 'Bank Transactions']}
      // actions={
      //   <>
      //     <Button variant="contained" size="small" startIcon={<Add />} color="primary">
      //       Add Bank Account
      //     </Button>
      //   </>
      // }
      />

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Grid container>
            <Typography sx={{ fontWeight: 700, fontSize: '1.2rem', textTransform: 'bold', height: 48, p: 1, color: '#020D47' }}>Bank Accounts</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Button variant="contained" size="small" startIcon={<Add />} color="primary" sx={{ mb: 2 }}>
              Add Bank Account
            </Button>
          </Grid>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>{BANK_ACCOUNTS_COLUMNS.map((c) => <TableCell key={c}>{c}</TableCell>)}</TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={BANK_ACCOUNTS_COLUMNS.length} align="center" sx={{ py: 8 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                      <AccountBalanceWallet sx={{ fontSize: 32, color: 'rgba(2, 13, 71, 0.15)' }} />
                      <Typography variant="body2" sx={{ color: 'rgba(13, 27, 75, 0.45)', fontSize: '0.8rem' }}>No Bank Accounts yet</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      <Card>
        <Box sx={{ borderBottom: '1px solid rgba(2, 13, 71, 0.1)' }}>
          <Tabs value={tab} onChange={(_, v) => setTab(v)}>
            {TABS.map((t) => <Tab key={t} label={t} disableRipple sx={{ fontWeight: 600, fontSize: '0.78rem', textTransform: 'none', minHeight: 48 }} />)}
          </Tabs>
        </Box>
        <CardContent sx={{ p: 0 }}>
          <Box sx={{ p: 2, display: 'flex', gap: 1.5, alignItems: 'center', borderBottom: '1px solid rgba(2, 13, 71, 0.07)' }}>
            <TextField
              size="small"
              placeholder="Search transactions..."
              InputProps={{ startAdornment: <InputAdornment position="start"><Search sx={{ fontSize: 16, color: 'rgba(13, 27, 75, 0.4)' }} /></InputAdornment> }}
              sx={{ flex: 1, maxWidth: 320 }}
            />
            <Box sx={{ flexGrow: 1 }} />
            <IconButton size="small" sx={{ color: 'rgba(13, 27, 75, 0.5)' }}><Refresh sx={{ fontSize: 18 }} /></IconButton>
            <IconButton size="small" sx={{ color: 'rgba(13, 27, 75, 0.5)' }}><FilterList sx={{ fontSize: 18 }} /></IconButton>
          </Box>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>{COLUMNS.map((c) => <TableCell key={c}>{c}</TableCell>)}</TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={COLUMNS.length} align="center" sx={{ py: 8 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                      <AccountBalanceWallet sx={{ fontSize: 32, color: 'rgba(2, 13, 71, 0.15)' }} />
                      <Typography variant="body2" sx={{ color: 'rgba(13, 27, 75, 0.45)', fontSize: '0.8rem' }}>No transactions yet</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
}
