import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useContext } from 'react';
import { AppContext } from '../App';


export default function Nav() {

  const {connectWallet, walletConnected, theme1} = useContext(AppContext);

  const handleClick = () => {
    if(!walletConnected){
      connectWallet();
    } else {
      alert('Wallet Already Connected!');
    }
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" theme={theme1}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
          >
            AnonNews
          </Typography>
          <Button
          size="small"
          onClick={handleClick}
          variant="outlined"
          startIcon={<AccountBalanceWalletIcon/>}
          style={{
            color: 'Black',
            borderColor: 'Black',
          }}
        >
          Connect
        </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
