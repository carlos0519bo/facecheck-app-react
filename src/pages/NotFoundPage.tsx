import { Box, Typography, Button } from '@mui/material';
import { THEME_COLORS } from '../themes';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        color: 'black',
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography fontSize={90} fontWeight="700">
          404
        </Typography>
        <Typography fontSize={30}>Ups! Página no encontrada</Typography>
        <Button
          sx={{
            // backgroundColor:'#8a90ab',
            backgroundColor: THEME_COLORS.TEXT,
            mt: 2,
            borderRadius: '1.2rem',
            '&:hover': {
              color: THEME_COLORS.TEXT,
              backgroundColor: THEME_COLORS.BACKGROUND_COLOR,
              border: `1px solid ${THEME_COLORS.TEXT}`,
            },
          }}
          onClick={() => navigate('/')}
        >
          Ir al inicio
        </Button>
      </Box>
    </Box>
  );
};
