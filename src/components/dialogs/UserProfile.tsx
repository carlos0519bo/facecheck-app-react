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
  IconButton,
} from '@mui/material';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import styled from '@emotion/styled';


const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: '1.2rem',
    },
    borderRadius: '1.2rem',
  },
});

interface Props {
  open: boolean;
  handleClose: () => void;
}

export const UserProfileDialog = ({ handleClose, open }: Props) => {
  const [openInputs, setOpenInputs] = useState(false);

  return (
    <>
      <Dialog maxWidth="xs" open={open}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {!openInputs && (
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                left: 270,
              }}
            >
              <CloseRoundedIcon />
            </IconButton>
          )}
          <DialogTitle fontSize={20} fontWeight="bold" >
            {openInputs ? 'Cambiar la contraseña' : 'Datos de usuario'}
          </DialogTitle>
        </Box>
        <DialogContent>
          {openInputs ? (
            <Box>
              <CssTextField
                label="Contraseña actual"
                style={{ marginBottom: 10 }}
                type="password"
                required
              />
              <CssTextField
                label="Contraseña nueva"
                style={{ marginBottom: 10 }}
                type="password"
                required
              />
              <CssTextField
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
