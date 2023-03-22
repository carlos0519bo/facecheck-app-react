import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: '1.2rem',
    },
    borderRadius: '1.2rem',
  },
});

const initialValuesRegister = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  location: '',
  occupation: '',
};

const initialValuesLogin = {
  email: '',
  password: '',
};

export const Form2 = () => {
  const [pageType, setPageType] = useState('login');
  const [viewPassword, setViewPassword] = useState(false);
  const [viewConfirmPassword, setViewConfirmPassword] = useState(false);
  const { palette } = useTheme();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const isLogin = pageType === 'login';
  const isRegister = pageType === 'register';

  const register = async () => {};

  const login = async () => {};

  return (
    <form>
      <Box
        display="grid"
        gap="30px"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        sx={{
          '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
        }}
      >
        {isRegister && (
          <>
            <CssTextField label="Nombre" name="firstName" />
            <CssTextField
              label="Apellidos"
              name="lastName"
              sx={{ gridColumn: 'span 2' }}
            />
            <CssTextField
              label="Localización"
              name="location"
              sx={{ gridColumn: 'span 4' }}
            />
            <CssTextField label="Ocupación" name="occupation" />
          </>
        )}

        <CssTextField
          label="Correo electrónico"
          name="email"
          sx={{ gridColumn: 'span 4' }}
        />
        <CssTextField
          label="Contraseña"
          type={viewPassword ? 'text' : 'password'}
          name="password"
          sx={{ gridColumn: isLogin ? 'span 4' : 'span 2' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setViewPassword(!viewPassword)}>
                  {viewPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {isRegister && (
          <CssTextField
            label="Repita su contraseña"
            type={viewConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            sx={{ gridColumn: 'span 2' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setViewConfirmPassword(!viewConfirmPassword)}
                  >
                    {viewConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      </Box>

      {/* BUTTONS */}
      <Box>
        <Button
          fullWidth
          type="submit"
          sx={{
            m: '2rem 0',
            p: '1rem',
            borderRadius: '1.2rem',
          }}
        >
          {isLogin ? 'INICIAR SESIÓN' : 'REGISTRARSE'}
        </Button>
        <Typography
          onClick={() => {
            setPageType(isLogin ? 'register' : 'login');
          }}
        >
          {isLogin ? (
            <p>
              ¿Aún no tienes cuenta? <b>Regístrate aquí</b>{' '}
            </p>
          ) : (
            <p>
              ¿Ya dispones de una cuenta? <b>Acceda aquí</b>{' '}
            </p>
          )}
        </Typography>
      </Box>
    </form>
  );
};
