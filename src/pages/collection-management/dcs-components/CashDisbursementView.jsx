import React from 'react';
import {
  Box, Card, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton,
} from '@mui/material';
import { Add, MonetizationOn, ListAlt, Block, ArrowForward, Print, VisibilityRounded } from '@mui/icons-material';
import CustomTablePagination from '../../../components/common/CustomTablePagination';

const DUMMY_CASH_DISBURSEMENTS = [
  { id: 1, ref: 'DISB-20260323-001', accountTitle: 'Petty Cash Fund', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 2, ref: 'DISB-20260323-002', accountTitle: 'Petty Cash Fund', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 3, ref: 'DISB-20260323-003', accountTitle: 'Other Payments', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 4, ref: 'DISB-20260323-004', accountTitle: 'Other Payments', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 5, ref: 'DISB-20260323-005', accountTitle: 'Other Payments', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 6, ref: 'DISB-20260323-006', accountTitle: 'Salary Advance Release', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 7, ref: 'DISB-20260323-007', accountTitle: 'Salary Advance Release', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 8, ref: 'DISB-20260323-008', accountTitle: 'Salary Advance Release', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 9, ref: 'DISB-20260323-009', accountTitle: 'MerCar Loan Releasealco', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 10, ref: 'DISB-20260323-010', accountTitle: 'Car Loan Release', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 11, ref: 'DISB-20260323-011', accountTitle: 'Car Loan Release', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 12, ref: 'DISB-20260323-012', accountTitle: 'Car Loan Release', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 13, ref: 'DISB-20260323-013', accountTitle: 'Car Loan Release', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 14, ref: 'DISB-20260323-014', accountTitle: 'Salary Advance Release', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 15, ref: 'DISB-20260323-015', accountTitle: 'Salary Advance Release', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
];

export default function CashDisbursementView() {
  return (
    <Box sx={{ p: 3, pt: 2, bgcolor: '#fcfcfc', minHeight: 400 }}>
      {/* Header section */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
        <MonetizationOn sx={{ fontSize: 32, color: '#eab308' }} />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 800, color: '#020D47', fontSize: '1.2rem', lineHeight: 1.2 }}>
            Cash Disbursement
          </Typography>
          <Typography variant="caption" sx={{ color: '#60a5fa', fontWeight: 500, fontSize: '0.75rem' }}>
            Record all cash disbursements. Posts to DCS Disbursements column.
          </Typography>
        </Box>
        <CustomTablePagination count={DUMMY_CASH_DISBURSEMENTS.length} />
      </Box>

      {/* Main Table Card */}
      <Card sx={{ borderRadius: 1.5, border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', overflow: 'hidden' }}>

        {/* Top Bar */}
        <Box sx={{ bgcolor: '#0b1437', color: 'white', p: 1.5, px: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ListAlt sx={{ fontSize: 18 }} />
            <Typography sx={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.05em' }}>ENTRIES</Typography>
          </Box>
          <Button variant="contained" color="success" size="small" startIcon={<Add />} sx={{ bgcolor: '#22c55e', '&:hover': { bgcolor: '#16a34a' }, textTransform: 'none', fontWeight: 600, px: 2 }}>
            Add Entry
          </Button>
        </Box>

        <TableContainer>
          <Table size="small" sx={{ minWidth: 800 }}>
            <TableHead>
              <TableRow sx={{ bgcolor: '#1e293b', '&:hover': { bgcolor: '#1e293b' } }}>
                {['#', 'REF#', 'ACCOUNT TITLE', 'TXN DATE', 'AMOUNT', 'SOURCE FUND', 'DESCRIPTION', 'DATE CREATED', 'ACTIONS'].map((col, i) => (
                  <TableCell key={col} sx={{ color: '#ffffff !important', background: 'transparent !important', borderBottom: 'none !important', fontSize: '0.65rem', py: 1.5, fontWeight: 700, opacity: 0.9 }} align={i === 8 ? 'center' : i === 4 ? 'right' : 'left'}>
                    {col}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {DUMMY_CASH_DISBURSEMENTS.map((row, index) => (
                <TableRow key={row.id} sx={{ bgcolor: index % 2 === 0 ? '#ffffff' : '#f8fafc', '&:last-child td': { borderBottom: 'none' } }}>
                  <TableCell sx={{ fontSize: '0.75rem', py: 1.5, color: '#64748b' }}>{row.id}</TableCell>
                  <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.ref}</TableCell>
                  <TableCell sx={{ fontSize: '0.75rem', fontWeight: 700, color: '#0f172a' }}>{row.accountTitle}</TableCell>
                  <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.txnDate}</TableCell>
                  <TableCell sx={{ fontSize: '0.8rem', fontWeight: 800, color: '#eab308' }} align="right">{row.amount}</TableCell>
                  <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.sourceFund}</TableCell>
                  <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.description}</TableCell>
                  <TableCell sx={{ fontSize: '0.7rem', color: '#94a3b8' }}>{row.dateCreated}</TableCell>
                  <TableCell align="center">
                    <IconButton size="small" color="error" sx={{ opacity: 0.6, '&:hover': { opacity: 1, color: '#ef4444' } }}>
                      <Block sx={{ fontSize: 16 }} />
                    </IconButton>
                    <IconButton size="small" color="primary" sx={{ opacity: 0.6, '&:hover': { opacity: 1, color: '#4463efff' } }}>
                      <VisibilityRounded sx={{ fontSize: 16 }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Footer Bar */}
        <Box sx={{ bgcolor: '#1e293b', color: 'white', p: 1.5, px: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Box sx={{ display: 'flex', gap: 6, px: 1, textAlign: 'right' }}>
            <Box>
              <Typography sx={{ fontSize: '0.55rem', color: '#64748b', mb: 0.2, fontWeight: 700, letterSpacing: '0.05em' }}>ENTRIES</Typography>
              <Typography sx={{ fontWeight: 800, fontSize: '0.9rem', lineHeight: 1 }}>{DUMMY_CASH_DISBURSEMENTS.length}</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: '0.55rem', color: '#64748b', mb: 0.2, fontWeight: 700, letterSpacing: '0.05em' }}>TOTAL</Typography>
              <Typography sx={{ fontWeight: 800, fontSize: '0.9rem', color: '#eab308', lineHeight: 1 }}>₱{DUMMY_CASH_DISBURSEMENTS.reduce((total, row) => total + parseFloat(row.amount.replace(/[^0-9.-]+/g, "")), 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
