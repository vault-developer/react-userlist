import {createTheme} from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    background: {
      paper: '#fffffe',
    },
    text: {
      primary: '#0d0d0d'
    },
  },
  overrides: {
    MuiTableCell: {
      head: {
        backgroundColor: '#96c99a'
      }
    },
  }
});
