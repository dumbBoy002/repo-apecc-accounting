import { AccountBalance, ListAlt, Add, Block, VisibilityRounded } from "@mui/icons-material";
import { Box, Typography, Card, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, TablePagination } from "@mui/material";

import CustomTablePagination from '../../../components/common/CustomTablePagination';


const bankReconciliationColumns = [
    "#",
    "Ref#",
    "Bank Name",
    "Account Number",
    "Txn Date",
    "Deposit",
    "Withdrawal",
    "Description/Remarks",
    "Transacted By",
    "Date_Created",
    "Actions"
];

import { bankReconciliationData } from '../../../data/dummyData';

export default function BankReconciliationView() {
    return (
        <Box sx={{ p: 3, pt: 2, bgcolor: '#fcfcfc', minHeight: 400 }}>
            {/* Header Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                <AccountBalance sx={{ fontSize: 32, color: '#eab308' }} />
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#020D47', fontSize: '1.2rem', lineHeight: 1.2 }}>
                        Bank Reconciliation
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#60a5fa', fontWeight: 500, mb: 0.5, fontSize: '0.75rem' }}>
                        Reconcile bank accounts.
                    </Typography>
                </Box>
                <CustomTablePagination count={bankReconciliationData.length} />
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
                {/* Table */}
                <TableContainer>
                    <Table size="small">
                        <TableHead>
                            <TableRow sx={{ bgcolor: '#1e293b', '&:hover': { bgcolor: '#1e293b' } }}>
                                {bankReconciliationColumns.map((col) => (
                                    <TableCell key={col} sx={{ color: '#ffffff !important', background: 'transparent !important', borderBottom: 'none !important', fontSize: '0.65rem', py: 1.5, fontWeight: 700, opacity: 0.9 }}>{col}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {bankReconciliationData.map((row, index) => (
                                <TableRow key={row.id} sx={{ bgcolor: index % 2 === 0 ? '#ffffff' : '#f8fafc', '&:last-child td': { borderBottom: 'none' } }} >
                                    <TableCell sx={{ fontSize: '0.65rem', py: 1.5, fontWeight: 700, opacity: 0.9 }}>{row.id} </TableCell>
                                    <TableCell sx={{ fontSize: '0.65rem', py: 1.5, fontWeight: 700, opacity: 0.9 }}>{row.refNo}</TableCell>
                                    <TableCell sx={{ fontSize: '0.65rem', py: 1.5, fontWeight: 700, opacity: 0.9 }}>{row.bankName}</TableCell>
                                    <TableCell sx={{ fontSize: '0.65rem', py: 1.5, fontWeight: 700, opacity: 0.9 }}>{row.accountNumber}</TableCell>
                                    <TableCell sx={{ fontSize: '0.65rem', py: 1.5, fontWeight: 700, opacity: 0.9 }}>{row.txnDate}</TableCell>
                                    <TableCell sx={{ fontSize: '0.65rem', py: 1.5, fontWeight: 700, opacity: 0.9, color: 'green' }}>{row.deposit}</TableCell>
                                    <TableCell sx={{ fontSize: '0.65rem', py: 1.5, fontWeight: 700, opacity: 0.9, color: 'red' }}>{row.withdrawal}</TableCell>
                                    <TableCell sx={{ fontSize: '0.65rem', py: 1.5, fontWeight: 700, opacity: 0.9 }}>{row.description}</TableCell>
                                    <TableCell sx={{ fontSize: '0.65rem', py: 1.5, fontWeight: 700, opacity: 0.9 }}>{row.transactedBy}</TableCell>
                                    <TableCell sx={{ fontSize: '0.65rem', py: 1.5, fontWeight: 700, opacity: 0.9 }}>{row.dateCreated}</TableCell>
                                    <TableCell sx={{ fontSize: '0.65rem', py: 1.5, fontWeight: 700, opacity: 0.9 }}>
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
                            <Typography sx={{ fontWeight: 800, fontSize: '0.9rem', lineHeight: 1 }}>{bankReconciliationData.length}</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: '0.55rem', color: '#64748b', mb: 0.2, fontWeight: 700, letterSpacing: '0.05em' }}>TOTAL DEPOSIT</Typography>
                            <Typography sx={{ fontWeight: 800, fontSize: '0.9rem', color: '#22c55e', lineHeight: 1 }}>₱{bankReconciliationData.reduce((deposit, row) => deposit + (parseFloat(row.deposit.replace(/[^0-9.-]+/g, "")) || 0), 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: '0.55rem', color: '#64748b', mb: 0.2, fontWeight: 700, letterSpacing: '0.05em' }}>TOTAL WITHDRAWAL</Typography>
                            <Typography sx={{ fontWeight: 800, fontSize: '0.9rem', color: '#c52d22ff', lineHeight: 1 }}>₱{bankReconciliationData.reduce((withdrawal, row) => withdrawal + (parseFloat(row.withdrawal.replace(/[^0-9.-]+/g, "")) || 0), 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Typography>
                        </Box>
                    </Box>
                </Box>

            </Card>
        </Box>
    );
}