import React from 'react'
import { Header, HeaderName, HeaderGlobalBar, HeaderGlobalAction, Button } from "@carbon/react";
import ThemeToggleButton from './Theme-Toggle';

function NavBar() {
  const [walletConnected, setWalletConnected] = React.useState(false);
  return (
      <Header>
      <HeaderName prefix="#">
        AnonNews
      </HeaderName>
      <HeaderGlobalBar>
        <HeaderGlobalAction>
            <div style={{
              paddingRight: "1rem",
              display: "flex",
            }}>
              {walletConnected ? (
                <Button kind="danger">Logout</Button>
              ): (
                <Button kind='secondary'>Connect Wallet</Button>
              )}
            </div>
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  )
}

export default NavBar