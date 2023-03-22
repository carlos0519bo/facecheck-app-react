import { useState } from 'react';
import styled from '@emotion/styled';
import { THEME_COLORS } from '../../themes/colors';
import {
  TextField,
  Box,
  useMediaQuery,
  Button,
  InputAdornment,
  IconButton,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { LoginProps } from '../../interfaces/LoginInterface';
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

const keys_for_register = ['FC022', 'FCX22', 'FCV22'];

interface Props {
  login: () => void;
}

export const Form = ({ login }: Props) => {
  const [viewConfirmPassword, setViewConfirmPassword] = useState(false);
  const [pageType, setPageType] = useState('login');
  const isLogin = pageType === 'login';
  const isRegister = pageType === 'register';

  const isNonMobile = useMediaQuery('(min-width:600px)');

  const changeForm = () => {
    if (pageType === 'login') {
      const code = window.prompt('Ingrese el código de registro');
      if (keys_for_register.includes(code!!)) {
        setPageType('register');
      } else {
        setPageType('login');
        window.alert('Clave inválida')
      }
    }

    if (pageType === 'register') setPageType('login');

  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginProps>();

  const onFormSubmit = (data: LoginProps) => {
    console.log(data);
    // login();
  };

  return (
    <>
      <Box p="1rem 6%" mb={1} textAlign="center">
        <Typography fontWeight="700" variant="h4" color="primary">
          {isLogin ? 'Inicio de sesión' : 'Registro'}
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
        <Box
          display="grid"
          gap="20px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
          }}
        >
          {isRegister && (
            <>
              <CssTextField
                label="Nombre"
                sx={{ gridColumn: 'span 2' }}
                required
                {...register('register.name', {
                  required: 'Este campo es obligatorio',
                })}
                error={!!errors.register?.name}
                helperText={errors.register?.name?.message}
              />
              <CssTextField
                label="Apellidos"
                sx={{ gridColumn: 'span 2' }}
                required
                {...register('register.lastName', {
                  required: 'Este campo es obligatorio',
                })}
                error={!!errors.register?.lastName}
                helperText={errors.register?.lastName?.message}
              />
            </>
          )}

          <CssTextField
            label="Correo electrónico"
            type="email"
            sx={{ gridColumn: 'span 4' }}
            required
            {...register('email', {
              required: 'Este campo es obligatorio',
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <CssTextField
            label="Contraseña"
            sx={{ gridColumn: 'span 4' }}
            required
            {...register('password', {
              required: 'Este campo es obligatorio',
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            type={viewConfirmPassword ? 'text' : 'password'}
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

          {isRegister && (
            <CssTextField
              label="Repita su contraseña"
              sx={{ gridColumn: 'span 4' }}
              required
              {...register('register.repeatPassword', {
                required: 'Este campo es obligatorio',
              })}
              error={!!errors.register?.repeatPassword}
              helperText={errors.register?.repeatPassword?.message}
              type={viewConfirmPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setViewConfirmPassword(!viewConfirmPassword)
                      }
                    >
                      {viewConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        </Box>

        <Button
          fullWidth
          type="submit"
          sx={{
            m: '2rem 0',
            p: '1rem',
            borderRadius: '1.2rem',
            '&:hover': {
              color: '#000',
              backgroundColor: THEME_COLORS.BACKGROUND_COLOR,
              border: `1px solid ${THEME_COLORS.PRIMARY}`,
            },
          }}
        >
          {isLogin ? 'INICIAR SESIÓN' : 'REGISTRARSE'}
        </Button>
        <Box textAlign="end">
          <Typography
            onClick={() => {
              setPageType(isLogin ? 'register' : 'login');
              changeForm();
              reset();
            }}
            sx={{
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            {isLogin ? (
              <p>
                <b>Regístrarse</b>{' '}
              </p>
            ) : (
              <p>
                <b>Iniciar Sesión</b>{' '}
              </p>
            )}
          </Typography>
        </Box>
      </form>
    </>
  );
};
