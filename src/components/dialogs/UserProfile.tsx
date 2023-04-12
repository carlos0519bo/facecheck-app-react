import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  Typography,
  Box,
} from '@mui/material';
import Person2Icon from '@mui/icons-material/Person2';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';

interface Props {
  open: boolean;
  handleClose: () => void;
}

export const UserProfileDialog = ({ handleClose, open }: Props) => {
  const [openInputs, setOpenInputs] = useState(false);

  return (
    <>
      <Dialog maxWidth="xs" open={open} onClose={handleClose}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* <Person2Icon /> */}
          <DialogTitle fontSize={20} fontWeight="bold">
            {openInputs ? 'Cambiar la contraseña' : 'Datos de usuario'}
          </DialogTitle>
        </Box>
        <DialogContent>
          {openInputs ? (
            <Box>
              <TextField
                label="Contraseña actual"
                style={{ marginBottom: 10 }}
                type="password"
                required
              />
              <TextField
                label="Contraseña nueva"
                style={{ marginBottom: 10 }}
                type="password"
                required
              />
              <TextField
                label="Repita contraseña"
                type="password"
                required
                onPaste={(e) => {
                  e.preventDefault();
                  return false;
                }}
              />
            </Box>
          ) : (
            <DialogContentText
              sx={{
                display: 'flex',
              }}
            >
              <Box>
                <Typography fontWeight="bold">Nombre:</Typography>
                <Typography fontWeight="bold">Apellidos:</Typography>
                <Typography fontWeight="bold">Email:</Typography>
              </Box>
              <Box px={2}>
                <Typography>Carlos</Typography>
                <Typography>López Cano</Typography>
                <Typography>carlos@gmail.com</Typography>
              </Box>
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          {openInputs ? (
            <>
              <Button>Guardar cambios</Button>
              <Button onClick={() => setOpenInputs(false)} autoFocus>
                Cancelar
              </Button>
            </>
          ) : (
            <Button onClick={() => setOpenInputs(!openInputs)}>
              Cambiar contraseña
              <EditIcon
                sx={{
                  fontSize: 20,
                  ml: 1,
                }}
              />
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};
