import { SyncAlt, ListAlt } from "@mui/icons-material";
import { Box, Typography, Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import CustomTablePagination from "../../../components/common/CustomTablePagination";


const revolvingFundSummaryColumns = [
    'Time', 'Ref#', 'Category', 'Description', 'Inflow', 'Outflow', 'Balance'
];


const DUMMY_REVOLVING_FUND_SUMMARY = [
    { time: '12:00 PM', refNo: '1', category: 'Cash', description: 'Expense', inflow: '₱10,000.00', outflow: '0.00', balance: '' },
    { time: '12:00 PM', refNo: '2', category: 'Cash', description: 'Other Receipts', inflow: '0.00', outflow: '₱20,000.00', balance: '' },
    { time: '12:00 PM', refNo: '3', category: 'Cash', description: 'CBU Collection', inflow: '₱30,000.00', outflow: '0.00', balance: '' },
    { time: '12:00 PM', refNo: '4', category: 'Cash', description: 'Other Payments', inflow: '0.00', outflow: '₱40,000.00', balance: '' },
    { time: '12:00 PM', refNo: '5', category: 'Cash', description: 'CBU Collection', inflow: '₱50,000.00', outflow: '0.00', balance: '' },
];

export default function RevolvingFundSummaryView() {
    return (
        <Box sx={{ p: 3, pt: 2, bgcolor: '#fcfcfc', minHeight: 400 }}>
            {/* Header Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <SyncAlt sx={{ fontSize: 32, color: '#020D47' }} />
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#020D47', fontSize: '1.2rem', lineHeight: 1.2 }}>
                        Revolving Fund Summary
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#60a5fa', fontWeight: 500, mb: 0.5, fontSize: '0.75rem' }}>
                        View and manage revolving fund summary.
                    </Typography>
                </Box>
                <CustomTablePagination count={DUMMY_REVOLVING_FUND_SUMMARY.length} />
            </Box>

            {/* Main Table Card */}
            <Card sx={{ borderRadius: 1.5, border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                {/* Top Bar */}
                <Box sx={{ bgcolor: '#0b1437', color: 'white', p: 1.5, px: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <ListAlt sx={{ fontSize: 18 }} />
                        <Typography sx={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.05em' }}>ENTRIES</Typography>
                    </Box>

                </Box>

                {/* Table */}
                <TableContainer sx={{ maxHeight: 400, overflowY: 'auto' }}>
                    <Table size="small" stickyHeader>
                        <TableHead>
                            <TableRow sx={{ bgcolor: '#f3f4f6' }}>
                                {revolvingFundSummaryColumns.map((col) => (
                                    <TableCell
                                        key={col}
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: '0.75rem',
                                            color: '#374151',
                                            borderBottom: '2px solid #e5e7eb',
                                            py: 1
                                        }}
                                    >
                                        {col}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableRow sx={{ bgcolor: '#f8fafc' }}>
                            <TableCell colSpan={6} sx={{ textAlign: 'right', fontWeight: 700, fontSize: '0.75rem', color: '#64748b', pr: 20 }}>
                                Opening Balance
                            </TableCell>
                            <TableCell colSpan={7} sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#0f172a' }}>
                                ₱0.00
                            </TableCell>
                        </TableRow>

                        <TableBody>
                            {DUMMY_REVOLVING_FUND_SUMMARY.map((row) => (
                                <TableRow key={row.refNo}>
                                    <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.time}</TableCell>
                                    <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.refNo}</TableCell>
                                    <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.category}</TableCell>
                                    <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.description}</TableCell>
                                    <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.inflow}</TableCell>
                                    <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.outflow}</TableCell>
                                    <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.balance}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* Footer Pagination */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 1.5, borderTop: '1px solid #e5e7eb' }}>
                    <Typography sx={{ fontSize: '0.75rem', color: '#6b7280' }}>
                        Showing {DUMMY_REVOLVING_FUND_SUMMARY.length} of {DUMMY_REVOLVING_FUND_SUMMARY.length} entries
                    </Typography>
                </Box>
            </Card>

        </Box>
    );
}
