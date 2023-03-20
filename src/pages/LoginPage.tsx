import { Box, Typography, useMediaQuery } from '@mui/material';
import { MainLayout } from '../components';
import { Form } from '../components';


export const LoginPage = () => {
  
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

  return (
    <MainLayout>
      <Box
        width={isNonMobileScreens ? '28%' : '93%'}
        p="1rem"
        m="2rem auto"
        borderRadius="1.5rem"
        sx={{
          border: 'solid 1px #d7dbec',
          boxShadow: '0px 2px 5px 1px rgba(0,0,0,0.12);'
        }}
      >
        <Box
          p="1rem 6%"
          mb={1}
          textAlign="center"
        >
          <Typography fontWeight="600" fontSize="32px" color="primary">
            Inicio de sesión
          </Typography>
        </Box>
        <Form />
      </Box>
    </MainLayout>
  );
};
