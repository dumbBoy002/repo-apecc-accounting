import React from 'react';
import {
  Box, Card, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, TablePagination
} from '@mui/material';
import { Add, ReceiptLong, ListAlt, Block, ArrowForward } from '@mui/icons-material';
import CustomTablePagination from '../../../components/common/CustomTablePagination';

const cashReceiptColumns = [
  '#', 'REF#', 'ACCOUNT TITLE', 'TXN DATE', 'AMOUNT', 'SOURCE FUND', 'DESCRIPTION', 'DATE CREATED', 'ACTIONS'
];

import { DUMMY_CASH_RECEIPTS } from '../../../data/dummyData';

export default function CashReceiptView() {
  return (
    <Box sx={{ p: 3, pt: 2, bgcolor: '#fcfcfc', minHeight: 400 }}>
      {/* Header section */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
        <ReceiptLong sx={{ fontSize: 32, color: '#22c55e' }} />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 800, color: '#020D47', fontSize: '1.2rem', lineHeight: 1.2 }}>
            Cash Receipt
          </Typography>
          <Typography variant="caption" sx={{ color: '#60a5fa', fontWeight: 500, fontSize: '0.75rem' }}>
            Record all collection receipts. Posts to DCS Receipts column.
          </Typography>
        </Box>
        <CustomTablePagination count={DUMMY_CASH_RECEIPTS.length} />
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
                {cashReceiptColumns.map((col, i) => (
                  <TableCell key={col} sx={{ color: '#ffffff !important', background: 'transparent !important', borderBottom: 'none !important', fontSize: '0.65rem', py: 1.5, fontWeight: 700, opacity: 0.9 }} align={i === 8 ? 'center' : i === 4 ? 'right' : 'left'}>
                    {col}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {DUMMY_CASH_RECEIPTS.map((row, index) => (
                <TableRow key={row.id} sx={{ bgcolor: index % 2 === 0 ? '#ffffff' : '#f8fafc', '&:last-child td': { borderBottom: 'none' } }}>
                  <TableCell sx={{ fontSize: '0.75rem', py: 1.5, color: '#64748b' }}>{row.id}</TableCell>
                  <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.ref}</TableCell>
                  <TableCell sx={{ fontSize: '0.75rem', fontWeight: 700, color: '#0f172a' }}>{row.accountTitle}</TableCell>
                  <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.txnDate}</TableCell>
                  <TableCell sx={{ fontSize: '0.8rem', fontWeight: 800, color: '#2563eb' }} align="right">{row.amount}</TableCell>
                  <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.sourceFund}</TableCell>
                  <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.description}</TableCell>
                  <TableCell sx={{ fontSize: '0.7rem', color: '#94a3b8' }}>{row.dateCreated}</TableCell>
                  <TableCell align="center">
                    <IconButton size="small" color="error" sx={{ opacity: 0.6, '&:hover': { opacity: 1, color: '#ef4444' } }}>
                      <Block sx={{ fontSize: 16 }} />
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
              <Typography sx={{ fontWeight: 800, fontSize: '0.9rem', lineHeight: 1 }}>{DUMMY_CASH_RECEIPTS.length}</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: '0.55rem', color: '#64748b', mb: 0.2, fontWeight: 700, letterSpacing: '0.05em' }}>TOTAL</Typography>
              <Typography sx={{ fontWeight: 800, fontSize: '0.9rem', color: '#22c55e', lineHeight: 1 }}>₱{DUMMY_CASH_RECEIPTS.reduce((total, row) => total + (parseFloat(row.amount.replace(/[^0-9.-]+/g, "")) || 0), 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
