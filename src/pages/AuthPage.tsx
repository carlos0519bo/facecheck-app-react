import { Form } from '../components';
import { MainLayout } from '../components';
import { useNavigate } from 'react-router-dom';
import { Box, useMediaQuery } from '@mui/material';

export const AuthPage = () => {
  const navigate = useNavigate();

  const login = () => {
    // localStorage.setItem('user', 'test')
    navigate('/');
  };

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
          boxShadow: '0px 2px 5px 1px rgba(0,0,0,0.12);',
        }}
      >
        <Form login={login} />
      </Box>
    </MainLayout>
  );
};
