import { Box, Typography, useMediaQuery } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { THEME_COLORS } from '../../themes';
import logo from '../../assets/logo.png';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
  return (
    <Box paddingBottom={isNonMobileScreens ? 0 : 1}>
      <Box width="100%" bgcolor="black" p="1rem 6%">
        <Box display="flex" width="250px" gap={1}>
          <Box
            component="img"
            src={logo}
            width={40}
            height={40}
            color="white"
            sx={{
              backgroundColor: 'white',
              borderRadius: '5px'
            }}
          />

          <Typography
            fontWeight="bold"
            fontSize="32px"
            color={THEME_COLORS.BACKGROUND_COLOR}
          >
            FACECHECK
          </Typography>
        </Box>
      </Box>

      <Box
        p="1rem 6%"
        m="1rem auto"
        borderRadius="1.5rem"
      >
        {children}
      </Box>
    </Box>
  );
};
