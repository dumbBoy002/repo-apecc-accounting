import React from 'react';
import { TablePagination, Box } from '@mui/material';

export default function CustomTablePagination({
  count = 0,
  page = 0,
  rowsPerPage = 10,
  rowsPerPageOptions = [10, 25, 50, 100, 200],
  onPageChange = () => {},
  onRowsPerPageChange = () => {},
  ...props
}) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 'auto', justifyContent: 'flex-end' }}>
      <TablePagination
        component="div"
        count={count}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={rowsPerPageOptions}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
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
        {...props}
      />
    </Box>
  );
}
