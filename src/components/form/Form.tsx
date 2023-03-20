import styled from '@emotion/styled';
import { THEME_COLORS } from '../../themes/colors';
import { TextField, Box, useMediaQuery, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { LoginProps } from '../../interfaces/LoginInterface';

const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: '1.2rem',
    },
    borderRadius: '1.2rem',
  },
});

export const Form = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();

  const onFormSubmit = (data: LoginProps) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
        <Box
          display="grid"
          gap="20px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
          }}
        >
          <CssTextField
            label="Correo electrónico"
            type="email"
            sx={{ gridColumn: 'span 4' }}
            required
            {...register('email', {
              required: 'Este campo es requerrido',
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <CssTextField
            label="Contraseña"
            type="password"
            sx={{ gridColumn: 'span 4' }}
            required
            {...register('password', {
              required: 'Este campo es requerrido',
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
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
          Acceder
        </Button>
      </form>
    </>
  );
};
