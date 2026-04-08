import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const CASH_RECEIPTS_DATA = [
    { label: 'Share Capital Collection', no: '', amount: '-' },
    { label: 'CBU Collection', no: '', amount: '-' },
    { label: 'CBU Collec. (Voluntary)', no: '', amount: '-' },
    { label: 'Salary Advance Collection', no: '', amount: '-' },
    { label: 'MC Advance Collection', no: '', amount: '-' },
    { label: 'Home Loan Collection', no: '', amount: '-' },
    { label: 'Car Loan Collection', no: '', amount: '-' },
    { label: 'Educational Loan Collection', no: '', amount: '-' },
    { label: 'Short Term Loan Collection', no: '', amount: '-' },
    { label: 'Gadget Loan Collection', no: '', amount: '-' },
    { label: 'Malasakit Loan Collection', no: '', amount: '-' },
    { label: 'Other Income', no: '', amount: '-' },
    { label: 'Collection from Deposit', no: '', amount: '-' },
    { label: 'Other Receipts', no: '', amount: '-' },
    { label: '🏦 Bank Withdrawal', no: '', amount: '-' }
];

const CASH_DISBURSEMENT_DATA = [
    { label: 'Salary Advance Release', no: '', amount: '-' },
    { label: 'MC Advance Release', no: '', amount: '-' },
    { label: 'Home Loan Release', no: '', amount: '-' },
    { label: 'Car Loan Release', no: '', amount: '-' },
    { label: 'Educational Loan Release', no: '', amount: '-' },
    { label: 'Short Term Loan Release', no: '', amount: '-' },
    { label: 'Gadget Loan Release', no: '', amount: '-' }
];

const DENOMINATIONS = [1000, 500, 200, 100, 50, 20, 10, 5, 1];

const SectionHeaderRow = ({ title, col1, col2 }) => (
    <Box sx={{ display: 'flex', bgcolor: '#020D47', color: 'white', py: 0.5, px: 0 }}>
        <Typography sx={{ flex: 1, fontWeight: 700, fontSize: '0.65rem', pl: 1, display: 'flex', alignItems: 'center' }}>{title}</Typography>
        <Typography sx={{ width: 40, textAlign: 'center', fontWeight: 700, fontSize: '0.65rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{col1}</Typography>
        <Typography sx={{ width: 80, textAlign: 'right', fontWeight: 700, fontSize: '0.65rem', pr: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>{col2}</Typography>
    </Box>
);

const DataRow = ({ num, label, no, amount, isSubTotal, bgColor = 'white', fgColor = '#334155' }) => (
    <Box sx={{ display: 'flex', borderBottom: '1px solid #e2e8f0', bgcolor: bgColor, alignItems: 'stretch', minHeight: 22 }}>
        <Box sx={{ width: 28, borderRight: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 0.25 }}>
            <Typography sx={{ fontSize: '0.6rem', color: '#94a3b8' }}>{num}</Typography>
        </Box>
        <Box sx={{ flex: 1, borderRight: '1px solid #e2e8f0', px: 1, display: 'flex', alignItems: 'center', py: 0.25 }}>
            <Typography sx={{ fontSize: '0.6rem', color: fgColor, fontWeight: isSubTotal ? 700 : 500 }}>{label}</Typography>
        </Box>
        <Box sx={{ width: 40, borderRight: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 0.25 }}>
            <Typography sx={{ fontSize: '0.6rem', color: fgColor }}>{no}</Typography>
        </Box>
        <Box sx={{ width: 80, px: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', py: 0.25 }}>
            <Typography sx={{ fontSize: '0.65rem', color: amount !== '-' && !isSubTotal ? '#0ea5e9' : fgColor, fontWeight: isSubTotal || amount !== '-' ? 700 : 500 }}>{amount}</Typography>
        </Box>
    </Box>
);

const DetailTable = ({ title, rows, total }) => (
    <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontSize: '0.7rem', fontWeight: 800, color: '#0ea5e9', borderLeft: '3px solid #0ea5e9', pl: 1, mb: 1 }}>{title}</Typography>
        <Box sx={{ border: '1px solid #e2e8f0', bgcolor: 'white' }}>
            <Box sx={{ display: 'flex', bgcolor: '#020D47', color: 'white', py: 0.5, px: 0 }}>
                <Typography sx={{ width: 45, fontSize: '0.6rem', fontWeight: 700, pl: 1 }}>CODE</Typography>
                <Typography sx={{ flex: 1, fontSize: '0.6rem', fontWeight: 700 }}>PARTICULARS</Typography>
                <Typography sx={{ width: 55, fontSize: '0.6rem', fontWeight: 700 }}>SOURCE</Typography>
                <Typography sx={{ width: 75, textAlign: 'right', fontSize: '0.6rem', fontWeight: 700, pr: 1 }}>AMOUNT</Typography>
            </Box>
            {rows.map((r, i) => (
                <Box key={i} sx={{ display: 'flex', borderBottom: '1px solid #e2e8f0', minHeight: 22, alignItems: 'stretch' }}>
                    <Box sx={{ width: 45, pl: 1, display: 'flex', alignItems: 'center', borderRight: '1px solid #e2e8f0' }}>
                        <Typography sx={{ fontSize: '0.6rem', color: '#64748b' }}>{r.code}</Typography>
                    </Box>
                    <Box sx={{ flex: 1, px: 1, display: 'flex', alignItems: 'center', borderRight: '1px solid #e2e8f0' }}>
                        <Typography sx={{ fontSize: '0.6rem', color: '#334155' }}>{r.particulars}</Typography>
                    </Box>
                    <Box sx={{ width: 55, px: 1, display: 'flex', alignItems: 'center', borderRight: '1px solid #e2e8f0' }}>
                        <Typography sx={{ fontSize: '0.6rem', color: '#64748b' }}>{r.source}</Typography>
                    </Box>
                    <Box sx={{ width: 75, pr: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Typography sx={{ fontSize: '0.65rem', color: '#0ea5e9', fontWeight: 700 }}>{r.amount}</Typography>
                    </Box>
                </Box>
            ))}
            {Array.from({ length: Math.max(0, 5 - rows.length) }).map((_, i) => (
                <Box key={`empty-${i}`} sx={{ display: 'flex', borderBottom: '1px solid #e2e8f0', minHeight: 22 }}>
                    <Box sx={{ width: 45, borderRight: '1px solid #e2e8f0' }}></Box>
                    <Box sx={{ flex: 1, borderRight: '1px solid #e2e8f0' }}></Box>
                    <Box sx={{ width: 55, borderRight: '1px solid #e2e8f0' }}></Box>
                    <Box sx={{ width: 75 }}></Box>
                </Box>
            ))}
            <Box sx={{ display: 'flex', py: 0.5, bgcolor: '#fdfbfa' }}>
                <Typography sx={{ flex: 1, fontSize: '0.65rem', fontWeight: 700, color: '#ef4444', textAlign: 'center' }}>TOTAL</Typography>
                <Typography sx={{ width: 75, textAlign: 'right', fontSize: '0.65rem', fontWeight: 700, color: '#ef4444', pr: 1 }}>{total}</Typography>
            </Box>
        </Box>
    </Box>
);

const DenomTable = ({ title, bookBalance, physicalCount, difference }) => (
    <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontSize: '0.7rem', fontWeight: 800, color: '#0ea5e9', borderLeft: '3px solid #0ea5e9', pl: 1, mb: 1 }}>{title}</Typography>
        <Box sx={{ border: '1px solid #e2e8f0', bgcolor: 'white' }}>
            {DENOMINATIONS.map(d => (
                <Box key={d} sx={{ display: 'flex', borderBottom: '1px solid #e2e8f0', px: 1, alignItems: 'center', minHeight: 20 }}>
                    <Typography sx={{ width: 60, textAlign: 'right', fontSize: '0.65rem', fontWeight: 700, color: '#475569' }}>{d.toLocaleString()}</Typography>
                    <Typography sx={{ width: 20, textAlign: 'center', fontSize: '0.65rem', color: '#94a3b8' }}>x</Typography>
                    <Box sx={{ flex: 1, borderBottom: '1px solid #e2e8f0', mx: 1, mt: 1.5, height: 8 }}></Box>
                    <Typography sx={{ width: 80, textAlign: 'right', fontSize: '0.65rem', color: '#0ea5e9', fontWeight: 700 }}>0.00</Typography>
                </Box>
            ))}
            <Box sx={{ display: 'flex', borderBottom: '1px solid #e2e8f0', px: 1, alignItems: 'center', minHeight: 20 }}>
                <Typography sx={{ width: 80, textAlign: 'right', fontSize: '0.65rem', fontWeight: 800, color: '#475569' }}>COINS</Typography>
                <Box sx={{ flex: 1 }}></Box>
                <Typography sx={{ width: 80, textAlign: 'right', fontSize: '0.65rem', color: '#0ea5e9', fontWeight: 700 }}>0.00</Typography>
            </Box>

            <Box sx={{ display: 'flex', borderBottom: '1px solid #e2e8f0', py: 0.75, px: 1, alignItems: 'center', bgcolor: '#f0f9ff' }}>
                <Typography sx={{ flex: 1, fontSize: '0.65rem', fontWeight: 800, color: '#0ea5e9' }}>BOOK BALANCE</Typography>
                <Typography sx={{ width: 100, textAlign: 'right', fontSize: '0.75rem', fontWeight: 800, color: '#0ea5e9' }}>{bookBalance}</Typography>
            </Box>
            <Box sx={{ display: 'flex', borderBottom: difference !== undefined ? '1px solid #e2e8f0' : 'none', py: 0.75, px: 1, alignItems: 'center', bgcolor: '#f0fdf4' }}>
                <Typography sx={{ flex: 1, fontSize: '0.65rem', fontWeight: 800, color: '#10b981' }}>PHYSICAL COUNT</Typography>
                <Typography sx={{ width: 100, textAlign: 'right', fontSize: '0.75rem', fontWeight: 800, color: '#10b981' }}>{physicalCount}</Typography>
            </Box>
            {difference !== undefined && (
                <Box sx={{ display: 'flex', py: 0.75, px: 1, alignItems: 'center', bgcolor: '#fef2f2' }}>
                    <Typography sx={{ flex: 1, fontSize: '0.65rem', fontWeight: 800, color: '#ef4444' }}>DIFFERENCE</Typography>
                    <Typography sx={{ width: 100, textAlign: 'right', fontSize: '0.75rem', fontWeight: 800, color: '#ef4444' }}>{difference}</Typography>
                </Box>
            )}
        </Box>
    </Box>
);

export default function DCSSummaryView() {
    return (
        <Box sx={{ p: { xs: 1, md: 3 }, bgcolor: '#ffffff', minHeight: '100%' }}>

            {/* Header */}
            <Box sx={{ textAlign: 'center', pb: 2, pt: 1 }}>
                <Typography sx={{ fontSize: '1.2rem', fontWeight: 900, color: '#020D47', letterSpacing: '0.02em' }}>ASA PHILIPPINES EMPLOYEES CREDIT COOPERATIVE</Typography>
                <Typography sx={{ fontSize: '0.9rem', fontWeight: 800, color: '#0ea5e9', textDecoration: 'underline', mt: 0.5, letterSpacing: '0.05em' }}>DAILY COLLECTION SHEET</Typography>
            </Box>

            {/* Sub-Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', borderTop: '2px solid #020D47', borderBottom: '2px solid #020D47', py: 0.75, px: 1, mb: 1 }}>
                <Typography sx={{ fontSize: '0.75rem', fontWeight: 800, color: '#020D47' }}>DAY: <span style={{ color: '#0ea5e9' }}>{/* Dyn: Day */}</span></Typography>
                <Typography sx={{ fontSize: '0.75rem', fontWeight: 800, color: '#020D47' }}>DATE: <span style={{ color: '#0ea5e9' }}>{/* Dyn: Date */}</span></Typography>
                <Typography sx={{ fontSize: '0.75rem', fontWeight: 800, color: '#020D47' }}>YEAR: <span style={{ color: '#334155' }}>{/* Dyn: Year */}</span></Typography>
            </Box>

            {/* Notice */}
            <Box sx={{ bgcolor: '#f8fafc', border: '1px solid #e2e8f0', p: 1, mb: 2, borderRadius: 1 }}>
                <Typography sx={{ fontSize: '0.65rem', fontStyle: 'italic', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Box component="span" sx={{ fontSize: '0.8rem' }}>ⓘ</Box> This sheet is auto-generated from entries in the Cash Receipt, Cash Disbursement, and Bank Transactions tabs.
                </Typography>
            </Box>

            {/* Main Columns Grid */}
            <Grid container spacing={3}>

                {/* LEFT COLUMN */}
                <Grid item sx={{ width: '35%' }} xs={12} md={4}>
                    {/* CASH RECEIPT SECTION */}
                    <Box sx={{ border: '1px solid #e2e8f0', mb: 3 }}>
                        <SectionHeaderRow title="CASH RECEIPT" col1="NO." col2="AMOUNT" />

                        {/* Beginning Balance Box */}
                        <Box sx={{ borderBottom: '1px solid #e2e8f0' }}>
                            <Box sx={{ bgcolor: '#f0f9ff', py: 0.5, px: 1, borderBottom: '1px solid #e2e8f0' }}>
                                <Typography sx={{ fontSize: '0.55rem', fontWeight: 800, color: '#0ea5e9', letterSpacing: '0.05em' }}>BEGINNING BALANCE BREAKDOWN</Typography>
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                                <Box sx={{ width: 28, borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', py: 0.5 }}>
                                    <Typography sx={{ fontSize: '0.6rem', color: '#cbd5e1', lineHeight: 1 }}>↳</Typography>
                                    <Typography sx={{ fontSize: '0.6rem', color: '#cbd5e1', lineHeight: 1 }}>↳</Typography>
                                    <Typography sx={{ fontSize: '0.6rem', color: '#cbd5e1', lineHeight: 1 }}>↳</Typography>
                                </Box>
                                <Box sx={{ flex: 1 }}>
                                    <DataRow num="" label="Cash on Hand (COH)" no="" amount="0.00" borderBottom="none" />
                                    <DataRow num="" label="Petty Cash" no="" amount="0.00" />
                                    <DataRow num="" label="Revolving Fund" no="" amount="0.00" />
                                </Box>
                            </Box>
                            <DataRow num="1" label="Beginning Balance" no="" amount="0.00" isSubTotal={true} bgColor="#e0f2fe" fgColor="#0ea5e9" />
                        </Box>

                        {/* Collections */}
                        {CASH_RECEIPTS_DATA.map((row, i) => (
                            <DataRow key={i} num={i + 2} label={row.label} no={row.no} amount={row.amount} />
                        ))}

                        {/* Total Receipts */}
                        <Box sx={{ display: 'flex', bgcolor: '#1e293b', color: 'white', py: 0.75, px: 1, alignItems: 'center' }}>
                            <Typography sx={{ flex: 1, fontWeight: 800, fontSize: '0.7rem' }}>Total Receipts</Typography>
                            <Typography sx={{ width: 80, textAlign: 'right', fontWeight: 800, fontSize: '0.7rem', color: '#f59e0b', pr: 0.5 }}>0.00</Typography>
                        </Box>
                    </Box>

                    {/* CASH DISBURSEMENT SECTION */}
                    <Box sx={{ border: '1px solid #e2e8f0', mb: 3 }}>
                        <SectionHeaderRow title="CASH DISBURSEMENT" col1="NO." col2="AMOUNT" />
                        {CASH_DISBURSEMENT_DATA.map((row, i) => (
                            <DataRow key={i} num={i + 1} label={row.label} no={row.no} amount={row.amount} />
                        ))}
                    </Box>
                </Grid>

                {/* MIDDLE COLUMN */}
                <Grid item sx={{ width: '35%' }} xs={12} md={4}>
                    <DetailTable
                        title="DETAILS OF OTHER RECEIPTS"
                        rows={[]}
                        total="0.00"
                    />
                    <DetailTable
                        title="DETAILS OF PETTY CASH FUND EXPENSES"
                        rows={[]}
                        total="0.00"
                    />
                    <DetailTable
                        title="DETAILS OF MANAGEMENT EXPENSES"
                        rows={[]}
                        total="0.00"
                    />
                </Grid>

                {/* RIGHT COLUMN */}
                <Grid item sx={{ width: '25%' }} xs={12} md={4}>
                    <DenomTable
                        title="CASH ON HAND (CLOSING)"
                        bookBalance="0.00"
                        physicalCount="0.00"
                        difference="0.00"
                    />
                    <DenomTable
                        title="PETTY CASH (CLOSING)"
                        bookBalance="0.00"
                        physicalCount="0.00"
                    />
                </Grid>

            </Grid>
        </Box>
    );
}