import React from 'react';

import Paper from '@material-ui/core/Paper';
import MatTable from '@material-ui/core/Table';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import CircularProgress from '@material-ui/core/CircularProgress';

import { TableBody } from 'src/components/TableBody';
import { TableHeader } from 'src/components/TableHeader';
import { TablePagination } from 'src/components/TablePagination';

import css from './Table.less';
import { theme } from './Table.theme';
import { useTable } from './Table.hooks';

export const Table = () => {
  const loading = useTable();

  if (loading) return <CircularProgress />;

  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant="h5"
        align="center"
        style={{ marginBottom: '1.5em' }}
      >
        Список сотрудников
      </Typography>
      <TableContainer
        component={Paper}
        className={css['table-container']}
      >
        <MatTable>
          <TableHeader />
          <TableBody />
        </MatTable>
        <TablePagination />
      </TableContainer>
    </ThemeProvider>
  );
};
