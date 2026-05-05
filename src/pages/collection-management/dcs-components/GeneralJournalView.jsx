import { MenuBook, ListAlt, Add, Block, VisibilityRounded } from "@mui/icons-material";
import { Box, Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button, IconButton } from "@mui/material";
import CustomTablePagination from '../../../components/common/CustomTablePagination';

const generalJournalColumns = [
    '#', 'Ref#', 'Account Title', 'Date', 'Debit', 'Credit', 'Particulars', 'Date Created', 'Actions'
];

import { DUMMY_GENERAL_JOURNALS } from '../../../data/dummyData';

export default function GeneralJournalView() {
    return (
        <Box sx={{ p: 3, pt: 2, bgcolor: '#fcfcfc', minHeight: 400 }}>
            {/* Header Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                <MenuBook sx={{ fontSize: 32, color: '#eab308' }} />
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#020D47', fontSize: '1.2rem', lineHeight: 1.2 }}>
                        General Journal
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#60a5fa', fontWeight: 500, mb: 0.5, fontSize: '0.75rem' }}>
                        Record all general journal entries.
                    </Typography>
                </Box>
                <CustomTablePagination count={DUMMY_GENERAL_JOURNALS.length} />
            </Box>
            <Card sx={{ borderRadius: 1.5, border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                {/* Top Bar */}
                <Box sx={{ bgcolor: '#0b1437', color: 'white', p: 1.5, px: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <ListAlt sx={{ fontSize: 18 }} />
                        <Typography sx={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.05em' }}>ENTRIES</Typography>
                    </Box>
                </Box>
                {/*Main Table */}
                <TableContainer>
                    <Table size="small">
                        <TableHead>
                            <TableRow sx={{ bgcolor: '#1e293b', '&:hover': { bgcolor: '#1e293b' } }}>
                                {generalJournalColumns.map((col) => (
                                    <TableCell key={col} sx={{ color: '#ffffff !important', background: 'transparent !important', borderBottom: 'none !important', fontSize: '0.65rem', py: 1.5, fontWeight: 700, opacity: 0.9 }}>{col}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {DUMMY_GENERAL_JOURNALS.map((row, index) => (
                                <TableRow key={row.id} sx={{ bgcolor: index % 2 === 0 ? '#ffffff' : '#f8fafc', '&:last-child td': { borderBottom: 'none' } }}>
                                    <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.id}</TableCell>
                                    <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.refNo}</TableCell>
                                    <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.accountTitle}</TableCell>
                                    <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.date}</TableCell>
                                    <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.debit}</TableCell>
                                    <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.credit}</TableCell>
                                    <TableCell sx={{ fontSize: '0.75rem', color: '#64748b' }}>{row.particulars}</TableCell>
                                    <TableCell sx={{ fontSize: '0.75rem', color: '#0f172a', fontWeight: 600 }}>{row.dateCreated}</TableCell>
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
                    <Box sx={{ display: 'flex', gap: 6, px: 1 }}>
                        <Box>
                            <Typography sx={{ fontSize: '0.55rem', color: '#64748b', mb: 0.2, fontWeight: 700, letterSpacing: '0.05em' }}>ENTRIES</Typography>
                            <Typography sx={{ fontWeight: 800, fontSize: '0.9rem', lineHeight: 1 }}>0</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: '0.55rem', color: '#64748b', mb: 0.2, fontWeight: 700, letterSpacing: '0.05em' }}>DEBIT</Typography>
                            <Typography sx={{ fontWeight: 800, fontSize: '0.9rem', color: '#22c55e', lineHeight: 1 }}>₱0.00</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: '0.55rem', color: '#64748b', mb: 0.2, fontWeight: 700, letterSpacing: '0.05em' }}>CREDIT</Typography>
                            <Typography sx={{ fontWeight: 800, fontSize: '0.9rem', color: '#22c55e', lineHeight: 1 }}>₱0.00</Typography>
                        </Box>
                    </Box>
                </Box>

            </Card>
        </Box >
    );
}