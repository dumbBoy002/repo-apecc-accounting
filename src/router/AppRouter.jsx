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

import { NAV_SECTIONS } from '../config/navigation';

export default function AppRouter() {
  const customPaths = ['/dcs', '/bank-transactions', '/dashboard', '/'];
  
  const Icons = {
    Assignment, AccountBalanceWallet: AccountBalance, AccountBalance, ReceiptLong, VolunteerActivism,
    AccountTree, SyncAlt, SwapHoriz, ShoppingCart, MenuBook, Book,
    ShowChart, History, Build, Payments, Redeem, Home,
    Groups, Description, ConfirmationNumber,
  };

  const getDynamicRoutes = () => {
    const routes = [];
    NAV_SECTIONS.forEach(section => {
      section.items.forEach(item => {
        if (item.isSubGroup) {
          item.items.forEach(subItem => {
            if (!customPaths.includes(subItem.path)) {
              const Icon = Icons[subItem.icon];
              routes.push(
                <Route
                  key={subItem.path}
                  path={subItem.path}
                  element={<PlaceholderPage title={subItem.label} subtitle={`Manage ${subItem.label.toLowerCase()}.`} breadcrumbs={[section.label, item.label, subItem.label]} icon={Icon} />}
                />
              );
            }
          });
        } else {
          if (!customPaths.includes(item.path)) {
            const Icon = Icons[item.icon];
            routes.push(
              <Route
                key={item.path}
                path={item.path}
                element={<PlaceholderPage title={item.label} subtitle={`Manage ${item.label.toLowerCase()}.`} breadcrumbs={[section.label, item.label]} icon={Icon} />}
              />
            );
          }
        }
      });
    });
    return routes;
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      
      {/* Custom Components */}
      <Route path="/dcs" element={<DCSPage />} />
      <Route path="/bank-transactions" element={<BankTransactionsPage />} />

      {/* Dynamically Generated Placeholders */}
      {getDynamicRoutes()}

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
