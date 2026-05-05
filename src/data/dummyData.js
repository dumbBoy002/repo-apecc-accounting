export const DUMMY_GENERAL_JOURNALS = [
    { id: 1, refNo: "GJ-2024-001", accountTitle: "Cash", date: "2024-01-01", debit: "₱10,000.00", credit: "--", particulars: "Opening Balance", dateCreated: "2024-01-01", actions: "" },
    { id: 2, refNo: "GJ-2024-002", accountTitle: "Cash", date: "2024-01-02", debit: "--", credit: "₱20,000.00", particulars: "Opening Balance", dateCreated: "2024-01-02", actions: "" },
    { id: 3, refNo: "GJ-2024-003", accountTitle: "Cash", date: "2024-01-03", debit: "₱30,000.00", credit: "--", particulars: "Opening Balance", dateCreated: "2024-01-03", actions: "" },
    { id: 4, refNo: "GJ-2024-004", accountTitle: "Cash", date: "2024-01-04", debit: "--", credit: "₱40,000.00", particulars: "Opening Balance", dateCreated: "2024-01-04", actions: "" },
    { id: 5, refNo: "GJ-2024-005", accountTitle: "Cash", date: "2024-01-05", debit: "₱50,000.00", credit: "--", particulars: "Opening Balance", dateCreated: "2024-01-05", actions: "" },
];

export const DUMMY_CASH_SUMMARY = [
    { id: 1, time: '08:00 AM', refNo: 'REF-001', category: 'Sales', description: 'Daily Sales', inflow: '₱10,000.00', outflow: '₱0.00', balance: '' },
    { id: 2, time: '09:00 AM', refNo: 'REF-002', category: 'Expenses', description: 'Daily Expenses', inflow: '₱0.00', outflow: '₱2,000.00', balance: '' },
    { id: 3, time: '09:00 AM', refNo: 'REF-003', category: 'Collection', description: 'Daily Collection', inflow: '₱0.00', outflow: '₱2,000.00', balance: '' },
];

export const DUMMY_CASH_RECEIPTS = [
  { id: 1, ref: 'REC-20260323-002', accountTitle: 'CBU Collec. (Voluntary)', txnDate: '2026-03-23', amount: '₱5,000.00', sourceFund: 'Cash on Hand', description: 'Voluntary', dateCreated: '4/6/2026, 9:56:22 AM' },
  { id: 2, ref: 'REC-20260323-001', accountTitle: 'CBU Collection', txnDate: '2026-03-23', amount: '₱3,000.00', sourceFund: 'Cash on Hand', description: 'collection', dateCreated: '3/28/2026, 11:35:11 PM' },
  { id: 3, ref: 'REC-20260323-003', accountTitle: 'CBU Share Capital', txnDate: '2026-03-23', amount: '₱10,000.00', sourceFund: 'Petty Cash', description: 'collection', dateCreated: '3/28/2026, 11:35:11 PM' },
  { id: 4, ref: 'REC-20260323-004', accountTitle: 'CBU Share Capital', txnDate: '2026-03-23', amount: '₱12,000.00', sourceFund: 'Petty Cash', description: 'collection', dateCreated: '3/28/2026, 11:35:11 PM' },
  { id: 5, ref: 'REC-20260323-005', accountTitle: 'CBU Share Capital', txnDate: '2026-03-23', amount: '₱12,000.00', sourceFund: 'Petty Cash', description: 'collection', dateCreated: '3/28/2026, 11:35:11 PM' },
  { id: 6, ref: 'REC-20260323-006', accountTitle: 'CBU Share Capital', txnDate: '2026-03-23', amount: '₱12,000.00', sourceFund: 'Petty Cash', description: 'collection', dateCreated: '3/28/2026, 11:35:11 PM' },
  { id: 7, ref: 'REC-20260323-007', accountTitle: 'CBU Share Capital', txnDate: '2026-03-23', amount: '₱12,000.00', sourceFund: 'Petty Cash', description: 'collection', dateCreated: '3/28/2026, 11:35:11 PM' },
  { id: 8, ref: 'REC-20260323-008', accountTitle: 'CBU Share Capital', txnDate: '2026-03-23', amount: '₱12,000.00', sourceFund: 'Petty Cash', description: 'collection', dateCreated: '3/28/2026, 11:35:11 PM' },
  { id: 9, ref: 'REC-20260323-009', accountTitle: 'CBU Share Capital', txnDate: '2026-03-23', amount: '₱12,000.00', sourceFund: 'Petty Cash', description: 'collection', dateCreated: '3/28/2026, 11:35:11 PM' },
  { id: 10, ref: 'REC-20260323-010', accountTitle: 'CBU Share Capital', txnDate: '2026-03-23', amount: '₱12,000.00', sourceFund: 'Petty Cash', description: 'collection', dateCreated: '3/28/2026, 11:35:11 PM' },
  { id: 11, ref: 'REC-20260323-011', accountTitle: 'CBU Share Capital', txnDate: '2026-03-23', amount: '₱12,000.00', sourceFund: 'Petty Cash', description: 'collection', dateCreated: '3/28/2026, 11:35:11 PM' },
  { id: 12, ref: 'REC-20260323-012', accountTitle: 'CBU Share Capital', txnDate: '2026-03-23', amount: '₱12,000.00', sourceFund: 'Petty Cash', description: 'collection', dateCreated: '3/28/2026, 11:35:11 PM' },
  { id: 13, ref: 'REC-20260323-013', accountTitle: 'CBU Share Capital', txnDate: '2026-03-23', amount: '₱12,000.00', sourceFund: 'Petty Cash', description: 'collection', dateCreated: '3/28/2026, 11:35:11 PM' },
  { id: 14, ref: 'REC-20260323-014', accountTitle: 'CBU Share Capital', txnDate: '2026-03-23', amount: '₱12,000.00', sourceFund: 'Petty Cash', description: 'collection', dateCreated: '3/28/2026, 11:35:11 PM' },
  { id: 15, ref: 'REC-20260323-015', accountTitle: 'CBU Share Capital', txnDate: '2026-03-23', amount: '₱12,000.00', sourceFund: 'Petty Cash', description: 'collection', dateCreated: '3/28/2026, 11:35:11 PM' },
];

export const DUMMY_CASH_DISBURSEMENTS = [
  { id: 1, ref: 'DISB-20260323-001', accountTitle: 'Petty Cash Fund', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 2, ref: 'DISB-20260323-002', accountTitle: 'Petty Cash Fund', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 3, ref: 'DISB-20260323-003', accountTitle: 'Other Payments', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 4, ref: 'DISB-20260323-004', accountTitle: 'Other Payments', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 5, ref: 'DISB-20260323-005', accountTitle: 'Other Payments', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 6, ref: 'DISB-20260323-006', accountTitle: 'Salary Advance Release', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 7, ref: 'DISB-20260323-007', accountTitle: 'Salary Advance Release', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 8, ref: 'DISB-20260323-008', accountTitle: 'Salary Advance Release', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 9, ref: 'DISB-20260323-009', accountTitle: 'MerCar Loan Releasealco', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 10, ref: 'DISB-20260323-010', accountTitle: 'Car Loan Release', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 11, ref: 'DISB-20260323-011', accountTitle: 'Car Loan Release', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 12, ref: 'DISB-20260323-012', accountTitle: 'Car Loan Release', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 13, ref: 'DISB-20260323-013', accountTitle: 'Car Loan Release', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 14, ref: 'DISB-20260323-014', accountTitle: 'Salary Advance Release', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
  { id: 15, ref: 'DISB-20260323-015', accountTitle: 'Salary Advance Release', txnDate: '2026-03-23', amount: '₱12,500.00', sourceFund: 'Cash in Bank', description: 'Office Electricity', dateCreated: '4/6/2026, 10:15:00 AM' },
];

export const DUMMY_REVOLVING_FUND_SUMMARY = [
    { time: '12:00 PM', refNo: '1', category: 'Cash', description: 'Expense', inflow: '₱10,000.00', outflow: '0.00', balance: '' },
    { time: '12:00 PM', refNo: '2', category: 'Cash', description: 'Other Receipts', inflow: '0.00', outflow: '₱20,000.00', balance: '' },
    { time: '12:00 PM', refNo: '3', category: 'Cash', description: 'CBU Collection', inflow: '₱30,000.00', outflow: '0.00', balance: '' },
    { time: '12:00 PM', refNo: '4', category: 'Cash', description: 'Other Payments', inflow: '0.00', outflow: '₱40,000.00', balance: '' },
    { time: '12:00 PM', refNo: '5', category: 'Cash', description: 'CBU Collection', inflow: '₱50,000.00', outflow: '0.00', balance: '' },
];


export const DUMMY_PETTY_CASH_SUMMARY = [
    { id: 1, time: '08:00 AM', refNo: 'PC-001', category: 'Replenishment', description: 'Initial replenishment', inflow: '₱10,000.00', outflow: '₱0.00', balance: '' },
    { id: 2, time: '09:00 AM', refNo: 'PC-002', category: 'Supplies', description: 'Office supplies', inflow: '₱0.00', outflow: '₱500.00', balance: '' },
    { id: 3, time: '10:00 AM', refNo: 'PC-003', category: 'Miscellaneous', description: 'Miscellaneous expenses', inflow: '₱0.00', outflow: '₱200.00', balance: '' },
    { id: 4, time: '11:00 AM', refNo: 'PC-004', category: 'Replenishment', description: 'Replenishment', inflow: '₱5,000.00', outflow: '₱0.00', balance: '' },
    { id: 5, time: '12:00 PM', refNo: 'PC-005', category: 'Supplies', description: 'Office supplies', inflow: '₱0.00', outflow: '₱300.00', balance: '' },
    { id: 6, time: '01:00 PM', refNo: 'PC-006', category: 'Miscellaneous', description: 'Miscellaneous expenses', inflow: '₱0.00', outflow: '₱100.00', balance: '' },
    { id: 7, time: '02:00 PM', refNo: 'PC-007', category: 'Replenishment', description: 'Replenishment', inflow: '₱2,000.00', outflow: '₱0.00', balance: '' },
    { id: 8, time: '03:00 PM', refNo: 'PC-008', category: 'Supplies', description: 'Office supplies', inflow: '₱0.00', outflow: '₱400.00', balance: '' },
    { id: 9, time: '04:00 PM', refNo: 'PC-009', category: 'Miscellaneous', description: 'Miscellaneous expenses', inflow: '₱0.00', outflow: '₱150.00', balance: '' },
    { id: 10, time: '05:00 PM', refNo: 'PC-010', category: 'Replenishment', description: 'Replenishment', inflow: '₱3,000.00', outflow: '₱0.00', balance: '' }
];

export const CASH_RECEIPTS_DATA = [
    { label: 'Share Capital Collection', no: '', amount: '0' },
    { label: 'CBU Collection', no: '', amount: '0' },
    { label: 'CBU Collec. (Voluntary)', no: '', amount: '0' },
    { label: 'Salary Advance Collection', no: '', amount: '0' },
    { label: 'MC Advance Collection', no: '', amount: '0' },
    { label: 'Home Loan Collection', no: '', amount: '0' },
    { label: 'Car Loan Collection', no: '', amount: '0' },
    { label: 'Educational Loan Collection', no: '', amount: '0' },
    { label: 'Short Term Loan Collection', no: '', amount: '0' },
    { label: 'Gadget Loan Collection', no: '', amount: '0' },
    { label: 'Malasakit Loan Collection', no: '', amount: '0' },
    { label: 'Other Income', no: '', amount: '0' },
    { label: 'Collection from Deposit', no: '', amount: '0' },
    { label: 'Other Receipts', no: '', amount: '0' },
    { label: 'Bank Withdrawal', no: '', amount: '0' }
];

export const CASH_DISBURSEMENT_DATA = [
    { label: 'Salary Advance Release', no: '', amount: '0' },
    { label: 'MC Advance Release', no: '', amount: '0' },
    { label: 'Home Loan Release', no: '', amount: '0' },
    { label: 'Car Loan Release', no: '', amount: '0' },
    { label: 'Educational Loan Release', no: '', amount: '0' },
    { label: 'Short Term Loan Release', no: '', amount: '0' },
    { label: 'Gadget Loan Release', no: '', amount: '0' },
    { label: 'Member CBU Withd.', no: '', amount: '0' },
    { label: 'Member CBU Refund', no: '', amount: '0' },
    { label: 'Mngt. Expenses', no: '', amount: '0' },
    { label: 'Petty Cash Fund', no: '', amount: '0' },
    { label: 'Unclaimed Return Disbursement', no: '', amount: '0' },
    { label: 'Rebates Disbursement', no: '', amount: '0' },
    { label: 'Other Payments', no: '', amount: '0' },
    { label: 'Bank Deposit', no: '', amount: '0' }
];

export const DENOMINATIONS = [1000, 500, 200, 100, 50, 20, 10, 5, 1];

export const bankReconciliationData = [
    { id: 1, refNo: "BR-2024-001", bankName: "BDO", accountNumber: "1234567890", txnDate: "2024-01-01", deposit: "₱10,000.00", withdrawal: "0.00", description: "Opening Balance", transactedBy: "John Doe", dateCreated: "2024-01-01", actions: "" },
    { id: 2, refNo: "BR-2024-002", bankName: "BDO", accountNumber: "1234567890", txnDate: "2024-01-02", deposit: "0.00", withdrawal: "₱20,000.00", description: "Opening Balance", transactedBy: "John Doe", dateCreated: "2024-01-02", actions: "" },
    { id: 3, refNo: "BR-2024-003", bankName: "BDO", accountNumber: "1234567890", txnDate: "2024-01-03", deposit: "₱30,000.00", withdrawal: "0.00", description: "Opening Balance", transactedBy: "John Doe", dateCreated: "2024-01-03", actions: "" },
    { id: 4, refNo: "BR-2024-004", bankName: "BDO", accountNumber: "1234567890", txnDate: "2024-01-04", deposit: "0.00", withdrawal: "₱40,000.00", description: "Opening Balance", transactedBy: "John Doe", dateCreated: "2024-01-04", actions: "" },
    { id: 5, refNo: "BR-2024-005", bankName: "BDO", accountNumber: "1234567890", txnDate: "2024-01-05", deposit: "₱50,000.00", withdrawal: "0.00", description: "Opening Balance", transactedBy: "John Doe", dateCreated: "2024-01-05", actions: "" },
];
