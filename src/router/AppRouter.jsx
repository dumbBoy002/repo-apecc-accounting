import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  Assignment, AccountBalance, ReceiptLong, VolunteerActivism,
  AccountTree, SyncAlt, SwapHoriz, ShoppingCart, MenuBook, Book,
  ShowChart, History, Build, Payments, Redeem, Home,
  Groups, Description, ConfirmationNumber,
} from '@mui/icons-material';
import Dashboard from '../pages/Dashboard';
import DCSPage from '../pages/collection-management/DCSPage';
import BankTransactionsPage from '../pages/collection-management/BankTransactionsPage';
import PlaceholderPage from '../pages/PlaceholderPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Collection Management */}
      <Route path="/dcs" element={<DCSPage />} />
      <Route path="/bank-transactions" element={<BankTransactionsPage />} />
      <Route path="/cash-disbursement" element={<PlaceholderPage title="Cash Disbursement" subtitle="Manage cash disbursement records." breadcrumbs={['Collection Management', 'Cash Disbursement']} icon={AccountBalance} />} />
      <Route path="/cash-receipt" element={<PlaceholderPage title="Cash Receipt" subtitle="Manage cash receipt records." breadcrumbs={['Collection Management', 'Cash Receipt']} icon={ReceiptLong} />} />
      <Route path="/cbu-contributions" element={<PlaceholderPage title="CBU Contribution" subtitle="Manage CBU contributions." breadcrumbs={['Collection Management', 'CBU Contribution']} icon={VolunteerActivism} />} />
      <Route path="/loan-collections" element={<PlaceholderPage title="Loan Collections" subtitle="Track loan repayments and collections." breadcrumbs={['Collection Management', 'Loan Collections']} icon={AccountTree} />} />

      {/* Accounting - Journals */}
      <Route path="/adj-journal" element={<PlaceholderPage title="Adjustment Journal" subtitle="Record adjusting journal entries." breadcrumbs={['Accounting Management', 'Journals', 'Adjustment Journal']} icon={SyncAlt} />} />

      {/* Accounting - Book of Accounts */}
      <Route path="/gen-journal" element={<PlaceholderPage title="General Journal" subtitle="View consolidated general journal." breadcrumbs={['Accounting Management', 'Book of Accounts', 'General Journal']} icon={MenuBook} />} />
      <Route path="/gen-ledger" element={<PlaceholderPage title="General Ledger" subtitle="View the general ledger." breadcrumbs={['Accounting Management', 'Book of Accounts', 'General Ledger']} icon={AccountTree} />} />
      <Route path="/cash-receipt-book" element={<PlaceholderPage title="Cash Receipt" subtitle="Cash receipt book of accounts." breadcrumbs={['Accounting Management', 'Book of Accounts', 'Cash Receipt']} icon={ReceiptLong} />} />
      <Route path="/cash-disbursement-book" element={<PlaceholderPage title="Cash Disbursement" subtitle="Cash disbursement book of accounts." breadcrumbs={['Accounting Management', 'Book of Accounts', 'Cash Disbursement']} icon={AccountBalance} />} />
      <Route path="/cashbook" element={<PlaceholderPage title="Cashbook" subtitle="View the complete cashbook." breadcrumbs={['Accounting Management', 'Book of Accounts', 'Cashbook']} icon={Book} />} />

      {/* Accounting - Financial Statements */}
      <Route path="/monthly-fs" element={<PlaceholderPage title="Monthly Financial Statement" subtitle="View monthly financial reports." breadcrumbs={['Accounting Management', 'Financial Statement']} icon={ShowChart} />} />

      {/* Reports */}
      <Route path="/audit-logs" element={<PlaceholderPage title="Audit Logs" subtitle="Review system audit trail and activity logs." breadcrumbs={['Reports', 'Audit Logs']} icon={History} />} />

      {/* System Configurations */}
      <Route path="/dcs-builder" element={<PlaceholderPage title="DCS Builder" subtitle="Configure and build DCS templates." breadcrumbs={['System Configurations', 'DCS Builder']} icon={Build} />} />
      <Route path="/account-title" element={<PlaceholderPage title="Account Title Management" subtitle="Manage chart of accounts." breadcrumbs={['System Configurations', 'Account Title Management']} icon={AccountBalance} />} />
      <Route path="/disbursement-mgmt" element={<PlaceholderPage title="Disbursement Management" subtitle="Configure disbursement types and payees." breadcrumbs={['System Configurations', 'Disbursement Management']} icon={Payments} />} />
      <Route path="/rebates-mgmt" element={<PlaceholderPage title="Rebates Management" subtitle="Manage rebate configurations." breadcrumbs={['System Configurations', 'Rebates Management']} icon={Redeem} />} />
      <Route path="/loan-type-mgmt" element={<PlaceholderPage title="Loan Type Management" subtitle="Configure loan product types." breadcrumbs={['System Configurations', 'Loan Type Management']} icon={Home} />} />
      <Route path="/contribution-type-mgmt" element={<PlaceholderPage title="Contribution Type Management" subtitle="Manage contribution type configurations." breadcrumbs={['System Configurations', 'Contribution Type Management']} icon={Groups} />} />
      <Route path="/document-type-mgmt" element={<PlaceholderPage title="Document Type Management" subtitle="Configure document type definitions." breadcrumbs={['System Configurations', 'Document Type Management']} icon={Description} />} />
      <Route path="/voucher-type-mgmt" element={<PlaceholderPage title="Voucher Type Management" subtitle="Manage voucher type settings." breadcrumbs={['System Configurations', 'Voucher Type Management']} icon={ConfirmationNumber} />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
