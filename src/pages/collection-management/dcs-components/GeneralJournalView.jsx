import { MenuBook, ListAlt, Add, Assignment } from "@mui/icons-material";
import { Box, Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button, TablePagination } from "@mui/material";

const generalJournalColumns = [
    '#', 'Ref#', 'Account Title', 'Date', 'Debit', 'Credit', 'Particulars', 'Date Created', 'Actions'
];

const DUMMY_GENERAL_JOURNALS = [
    { id: 1, refNo: "GJ-2024-001", accountTitle: "Cash", date: "2024-01-01", debit: "₱10,000.00", credit: "--", particulars: "Opening Balance", dateCreated: "2024-01-01", actions: "" },
    { id: 2, refNo: "GJ-2024-002", accountTitle: "Cash", date: "2024-01-02", debit: "--", credit: "₱20,000.00", particulars: "Opening Balance", dateCreated: "2024-01-02", actions: "" },
    { id: 3, refNo: "GJ-2024-003", accountTitle: "Cash", date: "2024-01-03", debit: "₱30,000.00", credit: "--", particulars: "Opening Balance", dateCreated: "2024-01-03", actions: "" },
    { id: 4, refNo: "GJ-2024-004", accountTitle: "Cash", date: "2024-01-04", debit: "--", credit: "₱40,000.00", particulars: "Opening Balance", dateCreated: "2024-01-04", actions: "" },
    { id: 5, refNo: "GJ-2024-005", accountTitle: "Cash", date: "2024-01-05", debit: "₱50,000.00", credit: "--", particulars: "Opening Balance", dateCreated: "2024-01-05", actions: "" },
];

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
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 'auto', justifyContent: 'flex-end' }}>
                    <TablePagination
                        component="div"
                        count={DUMMY_GENERAL_JOURNALS.length}
                        page={0}
                        rowsPerPage={10}
                        rowsPerPageOptions={[10, 25, 50, 100, 200]}
                        onPageChange={() => { }}
                        onRowsPerPageChange={() => { }}
                        SelectProps={{
                            MenuProps: {
                                sx: {
                                    '.MuiMenuItem-root': {
                                        fontSize: '0.75rem',
                                    }
                                }
                            }
                        }}
                        sx={{
                            // Selected value
                            '.MuiTablePagination-select': {
                                fontSize: '0.75rem',
                            },

                            // "Rows per page:" label
                            '.MuiTablePagination-selectLabel': {
                                fontSize: '0.75rem',
                            },

                            // Page info text
                            '.MuiTablePagination-displayedRows': {
                                fontSize: '0.75rem',
                            },

                        }}
                    />

                </Box>
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
                            <TableRow>
                                {generalJournalColumns.map((col) => (
                                    <TableCell key={col}>{col}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={generalJournalColumns.length} align="center" sx={{ py: 8 }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                                        <Assignment sx={{ fontSize: 40, color: 'rgba(13, 27, 75, 0.1)' }} />
                                        <Typography sx={{ color: 'rgba(13, 27, 75, 0.3)', fontWeight: 500 }}>No entries yet</Typography>
                                    </Box>
                                </TableCell>
                            </TableRow>
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