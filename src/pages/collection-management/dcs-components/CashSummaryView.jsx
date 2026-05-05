import { Savings, ListAlt, Add } from "@mui/icons-material";
import { Box, Typography, Card, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import CustomTablePagination from "../../../components/common/CustomTablePagination";


const cashSummaryColumns = [
    'Time', 'Ref#', 'Category', 'Description', 'Inflow', 'Outflow', 'Balance'
];

import { DUMMY_CASH_SUMMARY } from "../../../data/dummyData";

const parseAmount = (val) => {
    if (!val) return 0;
    return parseFloat(val.replace(/[₱,]/g, '')) || 0;
};

export default function CashSummaryView() {
    const openingBalance = 0;

    let rollingBalance = openingBalance;
    const computedData = DUMMY_CASH_SUMMARY.map(row => {
        const rowInflow = parseAmount(row.inflow);
        const rowOutflow = parseAmount(row.outflow);
        rollingBalance = rollingBalance + rowInflow - rowOutflow;

        return {
            ...row,
            computedBalance: `₱${rollingBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
        };
    });

    const rawSumInflow = DUMMY_CASH_SUMMARY.reduce((acc, row) => acc + parseAmount(row.inflow), 0);
    const sumInflow = `₱${rawSumInflow.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    const rawSumOutflow = DUMMY_CASH_SUMMARY.reduce((acc, row) => acc + parseAmount(row.outflow), 0);
    const sumOutflow = `₱${rawSumOutflow.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    return (
        <Box sx={{ p: 3, pt: 2, bgcolor: '#fcfcfc', minHeight: 400 }}>
            {/* Header Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Savings sx={{ fontSize: 32, color: '#020D47' }} />
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#020D47', fontSize: '1.2rem', lineHeight: 1.2 }}>
                        Cash Summary
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#60a5fa', fontWeight: 500, mb: 0.5, fontSize: '0.75rem' }}>
                        View and manage cash summary.
                    </Typography>
                </Box>
                <CustomTablePagination count={DUMMY_CASH_SUMMARY.length} />
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
                                {cashSummaryColumns.map((col) => (
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
                            <TableCell colSpan={6} sx={{ textAlign: 'right', fontWeight: 700, fontSize: '0.75rem', color: '#64748b', pr: 4 }}>
                                Opening Balance
                            </TableCell>
                            <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#10b981' }}>
                                ₱0.00
                            </TableCell>
                        </TableRow>

                        <TableBody>
                            {computedData.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.time}</TableCell>
                                    <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.refNo}</TableCell>
                                    <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.category}</TableCell>
                                    <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.description}</TableCell>
                                    <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.inflow}</TableCell>
                                    <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.outflow}</TableCell>
                                    <TableCell sx={{ fontSize: '0.75rem', color: '#0f172a', fontWeight: 600 }}>{row.computedBalance}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableRow sx={{ bgcolor: '#f8fafc' }}>
                            <TableCell colSpan={4} sx={{ textAlign: 'right', fontWeight: 700, fontSize: '0.75rem', color: '#64748b', pr: 4 }}>
                                Total
                            </TableCell>
                            <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#0f172a' }}>
                                {sumInflow}
                            </TableCell>
                            <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#0f172a' }}>
                                {sumOutflow}
                            </TableCell>
                            <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#ef4444' }}>
                                ₱{rollingBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </TableCell>
                        </TableRow>
                    </Table>

                </TableContainer>

                {/* Footer Pagination */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 1.5, borderTop: '1px solid #e5e7eb' }}>
                    <Typography sx={{ fontSize: '0.75rem', color: '#6b7280' }}>
                        Showing {DUMMY_CASH_SUMMARY.length} of {DUMMY_CASH_SUMMARY.length} entries
                    </Typography>
                </Box>
            </Card>

        </Box>
    );
}