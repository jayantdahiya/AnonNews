import React from "react";
import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  Button,
} from "@carbon/react";
import {Search, Edit, Wallet, Logout} from "@carbon/icons-react";
import PostButton from "./PostButton";

function NavBar() {
  const [walletConnected, setWalletConnected] = React.useState(false);
  const handleSearch = () => {
    console.log("search");
  }
  const handlePost = () => {
    console.log("post");
  }
  const handleConnect = () => {
    console.log("connect");
  }
  return (
    <Header>
      <HeaderName prefix="#" href="/">AnonNews</HeaderName>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Search" onClick={handleSearch} >
          <Search size={20}  />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Post" onClick={handlePost}>
          <Edit size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Connect Wallet" onClick={handleConnect} tooltipAlignment="end">
          {walletConnected ? (
            <Logout size={20} />
          ): (
            <Wallet size={20} style={{
              color: "red"
            }} />
          )}
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  );
}

export default NavBar;
