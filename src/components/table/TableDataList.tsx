import Person from '../../assets/person.png';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface DataPersonProps {
  name: string;
  date: string;
  hour: string;
  photo?: File;
}

const rows: DataPersonProps[] = [
  {
    name: 'Carlos',
    date: '16-05-2023',
    hour: '09:15',
    photo: Person,
  },
  {
    name: 'Mahik',
    date: '16-05-2023',
    hour: '09:15',
    photo: Person,
  },
  {
    name: 'Diego',
    date: '16-05-2023',
    hour: '09:15',
    photo: Person,
  },
];

export const TableDataList = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ fontWeight: 'bold', fontSize: '16px' }}
            >
              Nombre
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontWeight: 'bold', fontSize: '16px' }}
            >
              Fecha
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontWeight: 'bold', fontSize: '16px' }}
            >
              Hora
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontWeight: 'bold', fontSize: '16px' }}
            >
              Foto
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.hour}</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
