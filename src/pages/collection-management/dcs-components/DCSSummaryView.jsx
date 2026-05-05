import React from 'react';
import { Box, Typography, Grid, TextField, Button } from '@mui/material';
import { Title } from '@mui/icons-material';

import { CASH_RECEIPTS_DATA, CASH_DISBURSEMENT_DATA, DENOMINATIONS } from '../../../data/dummyData';

const SectionHeaderRow = ({ title, col1, col2 }) => (
    <Box sx={{ display: 'flex', bgcolor: '#0f172a', color: 'white', py: 1, px: 0 }}>
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', px: 2 }}>
            <Typography sx={{ fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</Typography>
        </Box>
        <Box sx={{ width: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography sx={{ fontWeight: 700, fontSize: '0.65rem' }}>{col1}</Typography>
        </Box>
        <Box sx={{ width: 110, pr: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Typography sx={{ fontWeight: 700, fontSize: '0.65rem' }}>{col2}</Typography>
        </Box>
    </Box>
);

const DataRow = ({ num, label, no, amount, isSubTotal, bgColor = 'white', fgColor = '#1e293b' }) => (
    <Box sx={{ display: 'flex', borderBottom: '1px solid #e2e8f0', bgcolor: bgColor, alignItems: 'stretch', minHeight: 36 }}>
        <Box sx={{ width: 36, borderRight: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 1 }}>
            <Typography sx={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 600 }}>{num}</Typography>
        </Box>
        <Box sx={{ flex: 1, borderRight: '1px solid #e2e8f0', px: 2, display: 'flex', alignItems: 'center', py: 1 }}>
            <Typography sx={{ fontSize: '0.75rem', color: fgColor, fontWeight: isSubTotal ? 700 : 500 }}>{label}</Typography>
        </Box>
        <Box sx={{ width: 60, borderRight: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 1 }}>
            <Typography sx={{ fontSize: '0.75rem', color: '#64748b' }}>{no}</Typography>
        </Box>
        <Box sx={{ width: 110, px: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', py: 1 }}>
            <Typography sx={{ fontSize: '0.75rem', color: amount !== '-' && !isSubTotal ? '#0ea5e9' : fgColor, fontWeight: isSubTotal || amount !== '-' ? 700 : 500 }}>{amount}</Typography>
        </Box>
    </Box>
);

const DetailTable = ({ title, rows, total }) => (
    <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontSize: '0.8rem', fontWeight: 800, color: '#0f172a', mb: 1, textTransform: 'uppercase' }}>{title}</Typography>
        <Box sx={{ border: '1px solid #e2e8f0', bgcolor: 'white', borderRadius: 1, overflow: 'hidden' }}>
            <Box sx={{ display: 'flex', bgcolor: '#0f172a', color: 'white', py: 1, px: 0 }}>
                <Box sx={{ width: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '0.65rem', fontWeight: 700 }}>CODE</Typography>
                </Box>
                <Box sx={{ flex: 1, px: 2, display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '0.65rem', fontWeight: 700 }}>PARTICULARS</Typography>
                </Box>
                <Box sx={{ width: 80, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '0.65rem', fontWeight: 700 }}>SOURCE</Typography>
                </Box>
                <Box sx={{ width: 110, pr: 2, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '0.65rem', fontWeight: 700 }}>AMOUNT</Typography>
                </Box>
            </Box>
            {rows.map((r, i) => (
                <Box key={i} sx={{ display: 'flex', borderBottom: '1px solid #e2e8f0', minHeight: 36, alignItems: 'stretch' }}>
                    <Box sx={{ width: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid #e2e8f0' }}>
                        <Typography sx={{ fontSize: '0.75rem', color: '#64748b' }}>{r.code}</Typography>
                    </Box>
                    <Box sx={{ flex: 1, px: 2, display: 'flex', alignItems: 'center', borderRight: '1px solid #e2e8f0' }}>
                        <Typography sx={{ fontSize: '0.75rem', color: '#1e293b' }}>{r.particulars}</Typography>
                    </Box>
                    <Box sx={{ width: 80, px: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid #e2e8f0' }}>
                        <Typography sx={{ fontSize: '0.75rem', color: '#64748b' }}>{r.source}</Typography>
                    </Box>
                    <Box sx={{ width: 110, pr: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Typography sx={{ fontSize: '0.75rem', color: '#0ea5e9', fontWeight: 700 }}>{r.amount}</Typography>
                    </Box>
                </Box>
            ))}
            {Array.from({ length: Math.max(0, 10 - rows.length) }).map((_, i) => (
                <Box key={`empty-${i}`} sx={{ display: 'flex', borderBottom: '1px solid #e2e8f0', minHeight: 36 }}>
                    <Box sx={{ width: 60, borderRight: '1px solid #e2e8f0' }}></Box>
                    <Box sx={{ flex: 1, borderRight: '1px solid #e2e8f0' }}></Box>
                    <Box sx={{ width: 80, borderRight: '1px solid #e2e8f0' }}></Box>
                    <Box sx={{ width: 110 }}></Box>
                </Box>
            ))}
            <Box sx={{ display: 'flex', py: 1.5, bgcolor: '#f8fafc', px: 0 }}>
                <Box sx={{ flex: 1, px: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Typography sx={{ fontSize: '0.75rem', fontWeight: 800, color: '#ef4444' }}>TOTAL</Typography>
                </Box>
                <Box sx={{ width: 110, pr: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Typography sx={{ fontSize: '0.75rem', fontWeight: 800, color: '#ef4444' }}>{total}</Typography>
                </Box>
            </Box>
        </Box>
    </Box>
);

const DenomTable = ({ title, bookBalance = "0.00", hasDifference = false }) => {
    const [quantities, setQuantities] = React.useState({});
    const [coins, setCoins] = React.useState('');

    const handleQuantityChange = (denom, value) => {
        if (value === '') {
            setQuantities(prev => ({ ...prev, [denom]: '' }));
            return;
        }
        const val = parseInt(value, 10);
        setQuantities(prev => ({ ...prev, [denom]: isNaN(val) ? '' : val }));
    };

    const handleCoinsChange = (value) => {
        setCoins(value);
    };

    const parsedCoins = parseFloat(coins) || 0;
    const totalBills = DENOMINATIONS.reduce((sum, d) => sum + ((quantities[d] || 0) * d), 0);
    const physicalCount = totalBills + parsedCoins;

    // Parse book balance assuming it might be a formatted string or "0.00"
    const parsedBookBalance = parseFloat((bookBalance || '0').toString().replace(/[^0-9.-]+/g, ""));
    const difference = physicalCount - parsedBookBalance;

    return (
        <Box sx={{ mb: 3 }}>
            <Typography sx={{ fontSize: '0.8rem', fontWeight: 800, color: '#0f172a', mb: 1, textTransform: 'uppercase' }}>{title}</Typography>
            <Box sx={{ border: '1px solid #e2e8f0', bgcolor: 'white', borderRadius: 1 }}>

                {/* Header Row */}
                <Box sx={{ display: 'flex', borderBottom: '1px solid #e2e8f0', px: 2, alignItems: 'center', py: 1 }}>
                    <Typography sx={{ width: 110, textAlign: 'center', fontSize: '0.75rem', fontWeight: 800, color: '#0f172a' }}>Denomination</Typography>
                    <Typography sx={{ flex: 1, textAlign: 'center', fontSize: '0.75rem', fontWeight: 800, color: '#0f172a' }}>Pieces</Typography>
                    <Typography sx={{ width: 110, textAlign: 'right', fontSize: '0.75rem', fontWeight: 800, color: '#0f172a' }}>Amount</Typography>
                </Box>

                {DENOMINATIONS.map(d => {
                    const qty = quantities[d] !== undefined ? quantities[d] : '';
                    const rowTotal = (quantities[d] || 0) * d;
                    return (
                        <Box key={d} sx={{ display: 'flex', borderBottom: '1px solid #e2e8f0', px: 2, alignItems: 'center', minHeight: 36, py: 1 }}>
                            <Typography sx={{ width: 110, textAlign: 'center', fontSize: '0.75rem', color: '#1e293b' }}>{d.toLocaleString()}</Typography>
                            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    placeholder="0"
                                    value={qty}
                                    onChange={(e) => handleQuantityChange(d, e.target.value)}
                                    type="number"
                                    inputProps={{ style: { fontSize: '0.75rem', padding: '6px 12px' }, min: 0 }}
                                    sx={{
                                        width: '75%',
                                        '& .MuiOutlinedInput-root': { borderRadius: 1, bgcolor: 'white' },
                                        '& input[type=number]': { MozAppearance: 'textfield' },
                                        '& input[type=number]::-webkit-outer-spin-button': { WebkitAppearance: 'none', margin: 0 },
                                        '& input[type=number]::-webkit-inner-spin-button': { WebkitAppearance: 'none', margin: 0 }
                                    }}
                                />
                            </Box>
                            <Typography sx={{ width: 110, textAlign: 'right', fontSize: '0.75rem', color: '#1e293b' }}>
                                {rowTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </Typography>
                        </Box>
                    );
                })}
                <Box sx={{ display: 'flex', borderBottom: '1px solid #e2e8f0', px: 2, alignItems: 'center', py: 1 }}>
                    <Typography sx={{ width: 110, textAlign: 'center', fontSize: '0.75rem', color: '#1e293b' }}>coins</Typography>
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                        <TextField
                            size="small"
                            variant="outlined"
                            placeholder="0"
                            value={coins}
                            onChange={(e) => handleCoinsChange(e.target.value)}
                            type="number"
                            inputProps={{ style: { fontSize: '0.75rem', padding: '6px 12px' }, min: 0 }}
                            sx={{
                                width: '75%',
                                '& .MuiOutlinedInput-root': { borderRadius: 1, bgcolor: 'white' },
                                '& input[type=number]': { MozAppearance: 'textfield' },
                                '& input[type=number]::-webkit-outer-spin-button': { WebkitAppearance: 'none', margin: 0 },
                                '& input[type=number]::-webkit-inner-spin-button': { WebkitAppearance: 'none', margin: 0 }
                            }}
                        />
                    </Box>
                    <Typography sx={{ width: 110, textAlign: 'right', fontSize: '0.75rem', color: '#1e293b', alignSelf: 'center' }}>
                        {parsedCoins > 0 ? parsedCoins.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ''}
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', borderBottom: '1px solid #e2e8f0', py: 1.5, px: 2, alignItems: 'center', bgcolor: '#f8fafc' }}>
                    <Typography sx={{ flex: 1, fontSize: '0.65rem', fontWeight: 800, color: '#0ea5e9' }}>BOOK BALANCE</Typography>
                    <Typography sx={{ width: 110, textAlign: 'right', fontSize: '0.75rem', fontWeight: 800, color: '#0ea5e9' }}>{bookBalance}</Typography>
                </Box>
                <Box sx={{ display: 'flex', borderBottom: hasDifference ? '1px solid #e2e8f0' : 'none', py: 1.5, px: 2, alignItems: 'center', bgcolor: '#f0fdf4' }}>
                    <Typography sx={{ flex: 1, fontSize: '0.65rem', fontWeight: 800, color: '#10b981' }}>PHYSICAL COUNT</Typography>
                    <Typography sx={{ width: 110, textAlign: 'right', fontSize: '0.75rem', fontWeight: 800, color: '#10b981' }}>{physicalCount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Typography>
                </Box>
                {hasDifference && (
                    <Box sx={{ display: 'flex', py: 1.5, px: 2, alignItems: 'center', bgcolor: '#fef2f2' }}>
                        <Typography sx={{ flex: 1, fontSize: '0.65rem', fontWeight: 800, color: '#ef4444' }}>DIFFERENCE</Typography>
                        <Typography sx={{ width: 110, textAlign: 'right', fontSize: '0.75rem', fontWeight: 800, color: '#ef4444' }}>{difference.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Typography>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

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
                <Grid size={{ xs: 12, md: 4 }} sx={{ width: '35%' }}>
                    {/* CASH RECEIPT SECTION */}
                    <Box sx={{ border: '1px solid #e2e8f0', mb: 3 }}>
                        <SectionHeaderRow title="CASH RECEIPT" col1="NO." col2="AMOUNT" />

                        {/* Beginning Balance Box */}
                        <Box sx={{ borderBottom: '1px solid #e2e8f0' }}>
                            <Box sx={{ bgcolor: '#f0f9ff', py: 1, px: 2, borderBottom: '1px solid #e2e8f0' }}>
                                <Typography sx={{ fontSize: '0.65rem', fontWeight: 800, color: '#0ea5e9', letterSpacing: '0.05em' }}>BEGINNING BALANCE BREAKDOWN</Typography>
                            </Box>
                            <DataRow num="↳" label="Cash on Hand (COH)" no="" amount="0.00" />
                            <DataRow num="↳" label="Petty Cash" no="" amount="0.00" />
                            <DataRow num="↳" label="Revolving Fund" no="" amount="0.00" />
                            <DataRow num="1" label="Beginning Balance" no="" amount="0.00" isSubTotal={true} bgColor="#e0f2fe" fgColor="#0ea5e9" />
                        </Box>

                        {/* Cash Receipt Collections */}
                        {CASH_RECEIPTS_DATA.map((row, i) => (
                            <DataRow key={i} num={i + 2} label={row.label} no={row.no} amount={row.amount} />
                        ))}

                        {/* Total Receipts */}
                        <Box sx={{ display: 'flex', bgcolor: '#1e293b', color: 'white', py: 1, px: 0, alignItems: 'center' }}>
                            <Box sx={{ flex: 1, px: 2, display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase' }}>Total Receipts</Typography>
                            </Box>
                            <Box sx={{ width: 110, px: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                <Typography sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#f59e0b' }}>0.00</Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* CASH DISBURSEMENT SECTION */}
                    <Box sx={{ border: '1px solid #e2e8f0', mb: 3 }}>
                        <SectionHeaderRow title="CASH DISBURSEMENT" col1="NO." col2="AMOUNT" />
                        {/* Cash Disbursement Collections */}
                        {CASH_DISBURSEMENT_DATA.map((row, i) => (
                            <DataRow key={i} num={i + 1} label={row.label} no={row.no} amount={row.amount} />
                        ))}
                        {/* Total Disbursements */}
                        <Box sx={{ display: 'flex', bgcolor: '#1e293b', color: 'white', py: 1, px: 0, alignItems: 'center' }}>
                            <Box sx={{ flex: 1, px: 2, display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase' }}>Total Disbursements</Typography>
                            </Box>
                            <Box sx={{ width: 110, px: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                <Typography sx={{ fontWeight: 800, fontSize: '0.75rem', color: '#f59e0b' }}>0.00</Typography>
                            </Box>
                        </Box>

                        {/* Closing Balance Breakdown */}
                        <Box sx={{ borderBottom: '1px solid #e2e8f0' }}>
                            <Box sx={{ bgcolor: '#f0f9ff', py: 1, px: 2, borderBottom: '1px solid #e2e8f0' }}>
                                <Typography sx={{ fontSize: '0.65rem', fontWeight: 800, color: '#e92f0eff', letterSpacing: '0.05em' }}>CLOSING BALANCE BREAKDOWN</Typography>
                            </Box>
                            <DataRow num="↳" label="Cash on Hand (COH)" no="" amount="0.00" />
                            <DataRow num="↳" label="Petty Cash" no="" amount="0.00" />
                            <DataRow num="↳" label="Revolving Fund" no="" amount="0.00" />
                            <DataRow num="16" label="Closing Balance" no="" amount="0.00" isSubTotal={true} bgColor="#e0f2fe" fgColor="#e92f0eff" />
                        </Box>
                    </Box>
                </Grid>

                {/* MIDDLE COLUMN */}
                <Grid size={{ xs: 12, md: 4 }} sx={{ width: '35%' }}>
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
                    <DetailTable
                        title="DETAILS OF OTHER PAYMENTS"
                        rows={[]}
                        total="0.00"
                    />
                </Grid>

                {/* RIGHT COLUMN */}
                <Grid size={{ xs: 12, md: 4 }} sx={{ width: '25%' }}>
                    <DenomTable
                        title="CASH ON HAND (CLOSING)"
                        bookBalance="0.00"
                        hasDifference={true}
                    />
                    <DenomTable
                        title="PETTY CASH (CLOSING)"
                        bookBalance="0.00"
                        hasDifference={true}
                    />
                    <DenomTable
                        title="REVOLVING FUND (CLOSING)"
                        bookBalance="0.00"
                        hasDifference={true}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mr: 1 }}>
                        <Button variant="contained" color="primary" sx={{ textTransform: 'none', fontWeight: 600, px: 2 }}>
                            Submit Closing Balances
                        </Button>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    );
}