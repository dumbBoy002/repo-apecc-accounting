// Top-level standalone nav items (not inside a collapsible section)
export const NAV_HOME = { id: 'dashboard', label: 'Dashboard', icon: 'Dashboard', path: '/dashboard' };

// Navigation structure mirroring original GAS sidebar
export const NAV_SECTIONS = [
  {
    id: 'collection',
    label: 'Collection Management',
    icon: 'grid_view',
    muiIcon: 'GridView',
    items: [
      { id: 'dcs', label: 'Daily Collection Sheet', icon: 'Assignment', path: '/dcs' },
      { id: 'bank-transactions', label: 'Bank Transactions', icon: 'AccountBalanceWallet', path: '/bank-transactions' },
      { id: 'cash-disbursement', label: 'Cash Disbursement', icon: 'AccountBalance', path: '/cash-disbursement' },
      { id: 'cash-receipt', label: 'Cash Receipt', icon: 'ReceiptLong', path: '/cash-receipt' },
      { id: 'cbu-contributions', label: 'CBU Contribution', icon: 'VolunteerActivism', path: '/cbu-contributions' },
      { id: 'loan-collections', label: 'Loan Collections', icon: 'AccountTree', path: '/loan-collections' },
    ],
  },
  {
    id: 'accounting',
    label: 'Accounting Management',
    icon: 'AccountBalance',
    items: [
      {
        id: 'journals',
        label: 'Journals',
        isSubGroup: true,
        items: [
          { id: 'adj-journal', label: 'Adjustment Journal', icon: 'SyncAlt', path: '/adj-journal' },
        ],
      },
      {
        id: 'book-of-accounts',
        label: 'Book of Accounts',
        isSubGroup: true,
        items: [
          { id: 'cashbook', label: 'Cashbook', icon: 'Book', path: '/cashbook' },
          { id: 'cash-receipt-book', label: 'Cash Receipt', icon: 'ReceiptLong', path: '/cash-receipt-book' },
          { id: 'cash-disbursement-book', label: 'Cash Disbursement', icon: 'AccountBalance', path: '/cash-disbursement-book' },
          { id: 'gen-journal', label: 'General Journal', icon: 'MenuBook', path: '/gen-journal' },
          { id: 'gen-ledger', label: 'General Ledger', icon: 'AccountTree', path: '/gen-ledger' },
        ],
      },
      {
        id: 'financial-statement',
        label: 'Financial Statement',
        isSubGroup: true,
        items: [
          { id: 'monthly-fs', label: 'Monthly Financial Statement', icon: 'ShowChart', path: '/monthly-fs' },
        ],
      },
    ],
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: 'Assessment',
    items: [
      { id: 'audit-logs', label: 'Audit Logs', icon: 'History', path: '/audit-logs' },
    ],
  },
  {
    id: 'configs',
    label: 'System Configurations',
    icon: 'Settings',
    items: [
      { id: 'dcs-builder', label: 'DCS Builder', icon: 'Build', path: '/dcs-builder' },
      { id: 'account-title', label: 'Account Title Management', icon: 'AccountBalance', path: '/account-title' },
      { id: 'disbursement-mgmt', label: 'Disbursement Management', icon: 'Payments', path: '/disbursement-mgmt' },
      { id: 'rebates-mgmt', label: 'Rebates Management', icon: 'Redeem', path: '/rebates-mgmt' },
      { id: 'loan-type-mgmt', label: 'Loan Type Management', icon: 'Home', path: '/loan-type-mgmt' },
      { id: 'contribution-type-mgmt', label: 'Contribution Type Management', icon: 'Groups', path: '/contribution-type-mgmt' },
      { id: 'document-type-mgmt', label: 'Document Type Management', icon: 'Description', path: '/document-type-mgmt' },
      { id: 'voucher-type-mgmt', label: 'Voucher Type Management', icon: 'ConfirmationNumber', path: '/voucher-type-mgmt' },
    ],
  },
];

export const DRAWER_WIDTH = 270;
export const APP_NAME = 'ASA Philippines Employees Credit Cooperative';
export const APP_SUITE = 'Financial Suite';
