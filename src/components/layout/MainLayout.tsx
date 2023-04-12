import { FC, PropsWithChildren, useState } from 'react';
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import { THEME_COLORS } from '../../themes';
import logo from '../../assets/logo.png';
import { AlertDialog } from '../dialogs/Alert';
import { UserProfileDialog } from '../dialogs';
import { Watch } from '../watch';


export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [openUserProfileDialog, setOpenUserProfileDialog] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleOpenUserProfile = () => {
    setOpenUserProfileDialog(true);
  };

  const handleClosedUserProfile = () => {
    setOpenUserProfileDialog(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      <Box
        width="100%"
        bgcolor="black"
        p="1rem 6%"
        display="flex"
        justifyContent="space-between"
      >
        <Box display="flex" width="250px" gap={1}>
          <Box
            component="img"
            src={logo}
            width={40}
            height={40}
            color="white"
            sx={{
              borderRadius: '5px',
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

        <Watch />

        {pathname === '/' ? (
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Abrir menú">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Carlos" src="/assets/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleOpenUserProfile}>
                <Typography textAlign="center">Perfil</Typography>
              </MenuItem>
              <MenuItem onClick={handleClickOpen}>
                <Typography textAlign="center">Cerrar sesión</Typography>
              </MenuItem>
            </Menu>
          </Box>
        ) : null}
      </Box>

      <Box p="1rem 6%" m="1rem auto" borderRadius="1.5rem">
        {children}
      </Box>
      <AlertDialog open={open} handleClose={handleClose} />
      <UserProfileDialog
        open={openUserProfileDialog}
        handleClose={handleClosedUserProfile}
      />
    </Box>
  );
};
