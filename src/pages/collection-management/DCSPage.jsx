import React, { useState } from 'react';
import {
  Box, Card, CardContent, Grid, Typography, Button, Tabs, Tab,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Chip, IconButton, TextField, InputAdornment,
} from '@mui/material';
import {
  Add, Print, Search, FilterList, Refresh, Assignment,
  MonetizationOn, AccountBalance, Savings, ReceiptLong,
  Assessment, MenuBook, LocalAtm, Autorenew, Block, ListAlt,
} from '@mui/icons-material';
import PageHeader from '../../components/common/PageHeader';

import CashReceiptView from './dcs-components/CashReceiptView';
import CashDisbursementView from './dcs-components/CashDisbursementView';
import GeneralJournalView from './dcs-components/GeneralJournalView';
import DCSSummaryView from './dcs-components/DCSSummaryView';
import DCSCalendarView from './dcs-components/DCSCalendarView';
import BankReconciliationView from './dcs-components/BankReconciliationView';
import CashSummaryView from './dcs-components/CashSummaryView';
import PettyCashSummaryView from './dcs-components/PettyCashSummaryView';
import RevolvingFundSummaryView from './dcs-components/RevolvingFundSummaryView';

const TABS = [
  { label: 'DCS Summary', icon: <Assessment sx={{ fontSize: 18 }} /> },
  { label: 'Cash Receipt', icon: <ReceiptLong sx={{ fontSize: 18 }} /> },
  { label: 'Cash Disbursement', icon: <MonetizationOn sx={{ fontSize: 18 }} /> },
  { label: 'General Journal', icon: <MenuBook sx={{ fontSize: 18 }} /> },
  { label: 'Bank Reconciliation', icon: <AccountBalance sx={{ fontSize: 18 }} /> },
  { label: 'Cash Summary', icon: <Savings sx={{ fontSize: 18 }} /> },
  { label: 'Petty Cash Summary', icon: <LocalAtm sx={{ fontSize: 18 }} /> },
  { label: 'Revolving Fund Summary', icon: <Autorenew sx={{ fontSize: 18 }} /> },
];

const TABLE_COLUMNS = {
  'Cash Receipt': ['#', 'Ref#', 'Account Title', 'Trxn Date', 'Amount', 'Source Fund', 'Particulars', 'Date Created', 'Actions'],
  'Cash Disbursement': ['#', 'Ref#', 'Account Title', 'Trxn Date', 'Amount', 'Source Fund', 'Particulars', 'Date Created', 'Actions'],
  'General Journal': ['#', 'Ref#', 'Account Title', 'Date', 'Debit', 'Credit', 'Particulars', 'Date Created', 'Actions'],
  'Fund Summaries': ['Fund', 'Opening Balance', 'Total Receipts', 'Total Disbursements', 'Closing Balance'],
};

export default function DCSPage() {
  const [openedTransactionDate, setOpenedTransactionDate] = useState(null);
  const [tab, setTab] = useState(0);
  const [search, setSearch] = useState('');

  const currentTabLabel = TABS[tab].label;
  const columns = TABLE_COLUMNS[currentTabLabel] || [];

  return (
    <Box>
      <PageHeader
        title="Daily Collection Sheet"
        subtitle={openedTransactionDate ? `Browsing active sheets for ${openedTransactionDate}.` : "Manage daily cash collections, disbursements, and journal entries."}
        breadcrumbs={['Collection Management', 'Daily Collection Sheet', openedTransactionDate].filter(Boolean)}
        badge={openedTransactionDate ? `Active: ${openedTransactionDate}` : "DCS Gateway"}
        actions={
          openedTransactionDate ? (
            <Button variant="outlined" size="small" color="primary" onClick={() => setOpenedTransactionDate(null)} sx={{ borderRadius: 2, fontWeight: 600 }}>
              Back to Calendar
            </Button>
          ) : null
        }
      />

      {/* Main Container */}
      {/* {!openedTransactionDate ? (
        <DCSCalendarView onUnlockDCS={(date) => setOpenedTransactionDate(date)} />
      ) : ( */}
      <Card>
        <Box sx={{ borderBottom: '1px solid rgba(2, 13, 71, 0.1)' }}>
          <Tabs value={tab} onChange={(_, v) => setTab(v)} variant="scrollable" scrollButtons="auto" sx={{ '& .MuiTab-root': { minHeight: 48, py: 1.5 } }}>
            {TABS.map((t) => <Tab key={t.label} label={t.label} icon={t.icon} iconPosition="start" disableRipple sx={{ fontWeight: 600, fontSize: '0.78rem', textTransform: 'none', minHeight: 48 }} />)}
          </Tabs>
        </Box>

        <CardContent sx={{ p: 0 }}>
          {currentTabLabel === 'Cash Receipt' ? (
            <CashReceiptView />
          ) : currentTabLabel === 'Cash Disbursement' ? (
            <CashDisbursementView />
          ) : currentTabLabel === 'General Journal' ? (
            <GeneralJournalView />
          ) : currentTabLabel === 'DCS Summary' ? (
            <DCSSummaryView />
          ) : currentTabLabel === 'Bank Reconciliation' ? (
            <BankReconciliationView />
          ) : currentTabLabel === 'Cash Summary' ? (
            <CashSummaryView />
          ) : currentTabLabel === 'Petty Cash Summary' ? (
            <PettyCashSummaryView />
          ) : currentTabLabel === 'Revolving Fund Summary' ? (
            <RevolvingFundSummaryView />
          ) : (
            <Box>
              {/* Toolbar */}
              <Box sx={{ p: 2, display: 'flex', gap: 1.5, alignItems: 'center', borderBottom: '1px solid rgba(2, 13, 71, 0.07)' }}>
                <TextField
                  size="small"
                  placeholder={`Search ${currentTabLabel}...`}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><Search sx={{ fontSize: 16, color: 'rgba(13, 27, 75, 0.4)' }} /></InputAdornment>,
                  }}
                  sx={{ flex: 1, maxWidth: 320 }}
                />
                <Box sx={{ flexGrow: 1 }} />
                <IconButton size="small" sx={{ color: 'rgba(13, 27, 75, 0.5)', '&:hover': { color: '#020D47' } }}>
                  <Refresh sx={{ fontSize: 18 }} />
                </IconButton>
                <IconButton size="small" sx={{ color: 'rgba(13, 27, 75, 0.5)', '&:hover': { color: '#020D47' } }}>
                  <FilterList sx={{ fontSize: 18 }} />
                </IconButton>
              </Box>

              {/* Table */}
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      {columns.map((col) => (
                        <TableCell key={col}>{col}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={columns.length} align="center" sx={{ py: 8 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                          <Assignment sx={{ fontSize: 32, color: 'rgba(2, 13, 71, 0.15)' }} />
                          <Typography variant="body2" sx={{ color: 'rgba(13, 27, 75, 0.45)', fontSize: '0.8rem' }}>
                            No records found
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'rgba(13, 27, 75, 0.3)' }}>
                            Connect the backend to load data or add a new entry
                          </Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}
        </CardContent>
      </Card>
      {/* )} */}
    </Box>
  );
}
