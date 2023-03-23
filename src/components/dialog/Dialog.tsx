import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ChangeEvent } from 'react';

interface Props {
  open: boolean;
  handleClose: () => void;
  setCodeEntered: React.Dispatch<React.SetStateAction<string>>;
  codeEntered: string;
  changeForm: () => void;
  errorCode: boolean;
}

export const FormDialog = ({
  open,
  handleClose,
  setCodeEntered,
  codeEntered,
  changeForm,
  errorCode,
}: Props) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCodeEntered(e.target.value);
  };

  return (
    <>
      <Dialog maxWidth="xs" open={open} onClose={handleClose}>
        <DialogTitle>Código de registro</DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{
              textAlign: 'justify',
            }}
          >
            Para poder registrarte tienes que ingresar el código de permiso. Si
            no dispones de un código comuníquese con dirección.
          </DialogContentText>
          <TextField
            required
            autoFocus
            margin="dense"
            label="Código"
            type="text"
            fullWidth
            variant="standard"
            value={codeEntered}
            onChange={handleChange}
            error={errorCode}
            helperText={errorCode && 'Código no válido, intentelo de nuevo'}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={changeForm}>Aceptar</Button>
          <Button onClick={handleClose}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
