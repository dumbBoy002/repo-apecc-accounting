import React, { useState, useMemo } from 'react';
import {
  Box, Card, Typography, IconButton, Button, Tooltip, Dialog, DialogTitle,
  DialogContent, DialogActions, TextField, InputAdornment, Grid
} from '@mui/material';
import {
  ChevronLeft, ChevronRight, Today, Add, CheckCircle, Warning, Info,
} from '@mui/icons-material';

// Empty initial transactions for API integration
const MOCK_TRANSACTIONS = {};

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function DCSCalendarView({ onUnlockDCS }) {
  const [currentDate, setCurrentDate] = useState(() => {
    return new Date();
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [transactions, setTransactions] = useState(MOCK_TRANSACTIONS);
  const [modalOpen, setModalOpen] = useState(false);

  // Modal Inputs
  const [coh, setCoh] = useState('');
  const [pettyCash, setPettyCash] = useState('');
  const [revolving, setRevolving] = useState('');
  const [errorObj, setErrorObj] = useState({});

  const viewYear = currentDate.getFullYear();
  const viewMonth = currentDate.getMonth(); // 0-11

  const closedTransactions = Object.entries(transactions)
    .filter(([_, t]) => t.status === 'Closed')
    .sort((a, b) => a[0].localeCompare(b[0]));
  const lastClosedDateStr = closedTransactions.length > 0 ? closedTransactions[closedTransactions.length - 1][0] : null;
  const lastClosedTxn = closedTransactions.length > 0 ? closedTransactions[closedTransactions.length - 1][1] : null;
  const hasOpenTransaction = Object.values(transactions).some(t => t.status === 'Open');

  // Compute the exact next contiguous date allowed to be opened
  const nextValidDate = useMemo(() => {
    if (!lastClosedDateStr) return null;
    let currentD = new Date(lastClosedDateStr);
    currentD.setDate(currentD.getDate() + 1);
    let nextStr = `${currentD.getFullYear()}-${String(currentD.getMonth() + 1).padStart(2, '0')}-${String(currentD.getDate()).padStart(2, '0')}`;

    // Keep shifting forward if the date is explicitly a Holiday
    while (transactions[nextStr] && transactions[nextStr].status === 'Holiday') {
      currentD.setDate(currentD.getDate() + 1);
      nextStr = `${currentD.getFullYear()}-${String(currentD.getMonth() + 1).padStart(2, '0')}-${String(currentD.getDate()).padStart(2, '0')}`;
    }
    return nextStr;
  }, [lastClosedDateStr, transactions]);

  // Grid computation
  const { daysInMonth, firstDayOfWeek, weeks } = useMemo(() => {
    const days = new Date(viewYear, viewMonth + 1, 0).getDate();
    const firstDay = new Date(viewYear, viewMonth, 1).getDay(); // 0 = Sunday

    // Create grid array 7x6 usually
    const grid = [];
    let currentWeek = [];

    // Padding empty cells
    for (let i = 0; i < firstDay; i++) {
      currentWeek.push(null);
    }

    // Fill days
    for (let d = 1; d <= days; d++) {
      currentWeek.push(d);
      if (currentWeek.length === 7) {
        grid.push(currentWeek);
        currentWeek = [];
      }
    }

    // Pad remaining
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(null);
      }
      grid.push(currentWeek);
    }

    return { daysInMonth: days, firstDayOfWeek: firstDay, weeks: grid };
  }, [viewYear, viewMonth]);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(viewYear, viewMonth - 1, 1));
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(viewYear, viewMonth + 1, 1));
    setSelectedDate(null);
  };

  const handleToday = () => {
    const today = new Date();
    setCurrentDate(new Date(today.getFullYear(), today.getMonth(), 1));
    setSelectedDate(null);
  };

  const getDateString = (day) => {
    if (!day) return null;
    return `${viewYear}-${String(viewMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const handleDateClick = (day) => {
    if (!day) return;
    const dStr = getDateString(day);
    setSelectedDate(dStr);
  };

  const handleOpenModal = () => {
    setCoh('');
    setPettyCash('');
    setRevolving('');
    setErrorObj({});
    setModalOpen(true);
  };

  const handleSubmit = () => {
    if (!lastClosedTxn) {
      const errors = {};
      if (!coh || isNaN(coh)) errors.coh = 'Valid amount required';
      if (!pettyCash || isNaN(pettyCash)) errors.pettyCash = 'Valid amount required';
      if (!revolving || isNaN(revolving)) errors.revolving = 'Valid amount required';

      if (Object.keys(errors).length > 0) {
        setErrorObj(errors);
        return;
      }
    }

    // Success
    setTransactions(prev => ({
      ...prev,
      [selectedDate]: {
        status: 'Open',
        coh: lastClosedTxn ? lastClosedTxn.closingCoh : Number(coh),
        pettyCash: lastClosedTxn ? lastClosedTxn.closingPetty : Number(pettyCash),
        revolving: lastClosedTxn ? lastClosedTxn.closingRevolving : Number(revolving)
      }
    }));

    setModalOpen(false);
    // Automatically unlock DCS for this date
    onUnlockDCS(selectedDate);
  };

  // Determine CTA State
  const selectedTxn = selectedDate ? transactions[selectedDate] : null;
  const isDateAccessible = selectedTxn && (selectedTxn.status === 'Open' || selectedTxn.status === 'Closed');

  const isAdvanceDate = nextValidDate && selectedDate && selectedDate !== nextValidDate;

  const ctaDisabled = !selectedDate ||
    (selectedTxn && (selectedTxn.status === 'Open' || selectedTxn.status === 'Closed' || selectedTxn.status === 'Holiday')) ||
    (hasOpenTransaction && !isDateAccessible) ||
    isAdvanceDate;

  return (
    <Box>
      <Card sx={{ borderRadius: 2, border: '1px solid rgba(2, 13, 71, 0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', overflow: 'hidden' }}>

        {/* Calendar Header */}
        <Box sx={{ p: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(2, 13, 71, 0.05)', bgcolor: '#fff' }}>
          <Box display="flex" alignItems="center" gap={2}>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#020D47' }}>
                {MONTHS[viewMonth]} {viewYear}
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(13, 27, 75, 0.6)', fontWeight: 500 }}>
                Select a valid day to open a transaction sheet
              </Typography>
            </Box>
          </Box>

          <Box display="flex" alignItems="center" gap={2}>
            <Box display="flex" bgcolor="#f8fafc" borderRadius={2} p={0.5}>
              <IconButton size="small" onClick={handlePrevMonth}><ChevronLeft /></IconButton>
              <Button size="small" variant="text" onClick={handleToday} sx={{ color: '#0f172a', fontWeight: 600, minWidth: 'auto', px: 2 }}>Today</Button>
              <IconButton size="small" onClick={handleNextMonth}><ChevronRight /></IconButton>
            </Box>

            {hasOpenTransaction && !isDateAccessible && !selectedTxn && !isAdvanceDate && (
              <Typography variant="caption" sx={{ color: '#ef4444', fontWeight: 700, mr: 1, display: { xs: 'none', md: 'block' } }}>
                Close active transaction first
              </Typography>
            )}

            {isAdvanceDate && !selectedTxn && (
              <Typography variant="caption" sx={{ color: '#f59e0b', fontWeight: 700, mr: 1, display: { xs: 'none', md: 'block' } }}>
                Must be sequentially opened
              </Typography>
            )}

            {(selectedDate && isDateAccessible) ? (
              <Button variant="contained" color="primary" onClick={() => onUnlockDCS(selectedDate)} startIcon={<CheckCircle />} sx={{ bgcolor: '#0ea5e9', '&:hover': { bgcolor: '#0284c7' }, fontWeight: 700, borderRadius: 2, px: 3 }}>
                Access DCS
              </Button>
            ) : (
              <Button variant="contained" color="success" disabled={ctaDisabled} onClick={handleOpenModal} startIcon={<Add />} sx={{ bgcolor: '#22c55e', '&:hover': { bgcolor: '#16a34a' }, '&.Mui-disabled': { bgcolor: 'rgba(34, 197, 94, 0.2)', color: 'rgba(255,255,255,0.8)' }, fontWeight: 700, borderRadius: 2, px: 3 }}>
                Open Transaction
              </Button>
            )}
          </Box>
        </Box>

        {/* Date Headers */}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', bgcolor: '#f1f5f9', borderBottom: '1px solid rgba(2, 13, 71, 0.05)' }}>
          {DAYS_OF_WEEK.map(day => (
            <Box key={day} sx={{ py: 1.5, textAlign: 'center' }}>
              <Typography sx={{ fontWeight: 700, fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {day}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Grid Body */}
        <Box sx={{ p: 2, bgcolor: '#fafafa', display: 'flex', flexDirection: 'column', gap: 1 }}>
          {weeks.map((week, idx) => (
            <Box key={idx} sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 1 }}>
              {week.map((day, dIdx) => {
                const dateStr = getDateString(day);
                const txn = dateStr ? transactions[dateStr] : null;
                const isSelected = selectedDate === dateStr;
                const isWeekend = dIdx === 0 || dIdx === 6;

                let cellBg = isWeekend ? '#fff1f2' : '#ffffff';
                let cellBorder = isWeekend ? '1px solid rgba(225, 29, 72, 0.1)' : '1px solid rgba(2,13,71,0.06)';

                let innerBg = 'transparent';
                let innerBorder = 'transparent';
                let dashColor = 'transparent';
                let totalColor = 'transparent';
                let badgeBg = 'transparent';
                let badgeBorder = 'transparent';
                let badgeColor = 'transparent';
                let indicatorColor = 'transparent';
                let indicatorText = '';

                if (txn) {
                  if (txn.status === 'Closed') {
                    innerBg = '#f0fdf4';
                    innerBorder = '1px solid #bbf7d0';
                    dashColor = '#bbf7d0';
                    totalColor = '#b45309';
                    indicatorColor = '#16a34a';
                    badgeBg = '#dcfce7';
                    badgeBorder = '1px solid #bbf7d0';
                    badgeColor = '#166534';
                    indicatorText = 'Closed';
                  } else if (txn.status === 'Open') {
                    innerBg = '#fefce8';
                    innerBorder = '1px solid #fde047';
                    dashColor = '#fef08a';
                    totalColor = '#b45309';
                    indicatorColor = '#10b981';
                    badgeBg = '#fef9c3';
                    badgeBorder = '1px solid #fde047';
                    badgeColor = '#b45309';
                    indicatorText = 'Open';
                  } else if (txn.status === 'Holiday') {
                    cellBg = '#eff6ff';
                    cellBorder = '1px solid #bfdbfe';
                    indicatorColor = '#3b82f6';
                    indicatorText = txn.title;
                  }
                }

                if (isSelected) {
                  cellBorder = '2px solid #3b82f6';
                }

                return (
                  <Box key={dIdx}>
                    {day ? (
                      <Tooltip
                        title={
                          txn
                            ? txn.status === 'Holiday'
                              ? txn.title || txn.status
                              : `${txn.status} - COH: ₱${txn.coh?.toLocaleString()} | Petty Cash: ₱${txn.pettyCash?.toLocaleString()} | Revolving: ₱${txn.revolving?.toLocaleString()}`
                            : isWeekend ? 'Weekend' : 'No transaction'
                        }
                        arrow placement="top"
                      >
                        <Box
                          onClick={() => handleDateClick(day)}
                          sx={{
                            minHeight: 120, p: 1.5, bgcolor: cellBg, border: cellBorder, borderRadius: 2,
                            cursor: 'pointer', transition: 'all 0.2s', position: 'relative',
                            display: 'flex', flexDirection: 'column',
                            '&:hover': { boxShadow: '0 4px 12px rgba(0,0,0,0.05)', transform: 'translateY(-2px)' }
                          }}
                        >
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <Typography sx={{ fontWeight: 800, color: (txn && txn.status === 'Holiday') ? '#94a3b8' : (isWeekend && !txn ? '#e11d48' : '#0f172a'), fontSize: '1.1rem', lineHeight: 1 }}>
                              {day}
                            </Typography>

                            {txn && txn.status !== 'Holiday' && (
                              <Box sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 0.5,
                                bgcolor: badgeBg,
                                border: badgeBorder,
                                px: 1,
                                py: 0.25,
                                borderRadius: 4
                              }}>
                                <Box sx={{ width: 6, height: 6, borderRadius: '50%', flexShrink: 0, bgcolor: indicatorColor }} />
                                <Typography sx={{ fontSize: '0.6rem', fontWeight: 800, color: badgeColor, letterSpacing: '0.02em', lineHeight: 1 }}>
                                  {indicatorText}
                                </Typography>
                              </Box>
                            )}
                          </Box>

                          {txn && txn.status === 'Holiday' && (
                            <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', px: 1, pb: 1, mt: -1 }}>
                              <Typography sx={{ fontSize: '0.75rem', fontWeight: 800, color: indicatorColor, textAlign: 'center', lineHeight: 1.2 }}>
                                Holiday:<br/>{indicatorText}
                              </Typography>
                            </Box>
                          )}

                          {txn && txn.status !== 'Holiday' && (
                            <Box sx={{ mt: 1 }}>
                                <Box sx={{
                                  bgcolor: innerBg,
                                  border: innerBorder,
                                  borderRadius: 2,
                                  p: 1,
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: 0.5
                                }}>
                                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.2 }}>
                                    <Typography sx={{ fontSize: '0.55rem', color: '#64748b', fontWeight: 700, display: 'flex', justifyContent: 'space-between', letterSpacing: '0.05em' }}>
                                      <span>COH</span> <span style={{ color: '#0f172a' }}>₱{Number(txn.coh || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                    </Typography>
                                    <Typography sx={{ fontSize: '0.55rem', color: '#64748b', fontWeight: 700, display: 'flex', justifyContent: 'space-between', letterSpacing: '0.05em' }}>
                                      <span>PETTY</span> <span style={{ color: '#0f172a' }}>₱{Number(txn.pettyCash || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                    </Typography>
                                    <Typography sx={{ fontSize: '0.55rem', color: '#64748b', fontWeight: 700, display: 'flex', justifyContent: 'space-between', letterSpacing: '0.05em' }}>
                                      <span>REVOLV.</span> <span style={{ color: '#0f172a' }}>₱{Number(txn.revolving || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                    </Typography>
                                  </Box>

                                  <Box sx={{ borderBottom: `1px dashed ${dashColor}`, my: 0.5 }} />

                                  <Typography sx={{ fontSize: '0.6rem', color: totalColor, fontWeight: 800, display: 'flex', justifyContent: 'space-between', letterSpacing: '0.02em' }}>
                                    <span>TOTAL BAL.</span> <span>₱{(Number(txn.coh || 0) + Number(txn.pettyCash || 0) + Number(txn.revolving || 0)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                  </Typography>
                                </Box>
                            </Box>
                          )}
                        </Box>
                      </Tooltip>
                    ) : (
                      <Box sx={{ minHeight: 120 }} />
                    )}
                  </Box>
                );
              })}
            </Box>
          ))}
        </Box>
      </Card>

      {/* Initialize Transaction Modal */}
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} maxWidth="xs" fullWidth PaperProps={{ sx: { borderRadius: 3, p: 1 } }}>
        <DialogTitle sx={{ pb: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 800, color: '#020D47' }}>Open Transaction</Typography>
          <Typography variant="caption" sx={{ color: '#64748b' }}>Enter opening balances for {selectedDate}</Typography>
        </DialogTitle>
        <DialogContent>
          {!lastClosedTxn ? (
            <Box component="form" sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Cash on Hand (COH)"
                size="small"
                fullWidth
                value={coh}
                onChange={(e) => setCoh(e.target.value)}
                error={!!errorObj.coh}
                helperText={errorObj.coh}
                InputProps={{
                  startAdornment: <InputAdornment position="start">₱</InputAdornment>,
                }}
              />
              <TextField
                label="Petty Cash Fund"
                size="small"
                fullWidth
                value={pettyCash}
                onChange={(e) => setPettyCash(e.target.value)}
                error={!!errorObj.pettyCash}
                helperText={errorObj.pettyCash}
                InputProps={{
                  startAdornment: <InputAdornment position="start">₱</InputAdornment>,
                }}
              />
              <TextField
                label="Revolving Fund"
                size="small"
                fullWidth
                value={revolving}
                onChange={(e) => setRevolving(e.target.value)}
                error={!!errorObj.revolving}
                helperText={errorObj.revolving}
                InputProps={{
                  startAdornment: <InputAdornment position="start">₱</InputAdornment>,
                }}
              />
            </Box>
          ) : (
            <Box sx={{ mt: 2, p: 2, bgcolor: '#f0fdf4', borderRadius: 2, border: '1px solid #bbf7d0' }}>
              <Typography sx={{ color: '#166534', mb: 2, fontWeight: 600, fontSize: '0.85rem', lineHeight: 1.4 }}>
                A completely closed transaction was detected. Opening balances will automatically forward from the previous closing totals.
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="caption" sx={{ color: '#166534', opacity: 0.8, fontWeight: 700 }}>COH</Typography>
                  <Typography sx={{ fontWeight: 800, color: '#15803d', fontSize: '1.1rem' }}>₱{lastClosedTxn.closingCoh?.toLocaleString()}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption" sx={{ color: '#166534', opacity: 0.8, fontWeight: 700 }}>Petty Cash</Typography>
                  <Typography sx={{ fontWeight: 800, color: '#15803d' }}>₱{lastClosedTxn.closingPetty?.toLocaleString()}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption" sx={{ color: '#166534', opacity: 0.8, fontWeight: 700 }}>Revolving Fund</Typography>
                  <Typography sx={{ fontWeight: 800, color: '#15803d' }}>₱{lastClosedTxn.closingRevolving?.toLocaleString()}</Typography>
                </Grid>
              </Grid>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3, pt: 1 }}>
          <Button onClick={() => setModalOpen(false)} sx={{ color: '#64748b', fontWeight: 600 }}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" sx={{ bgcolor: '#020D47', '&:hover': { bgcolor: '#0c1a66' }, fontWeight: 700, borderRadius: 2 }}>
            Create Transaction
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
