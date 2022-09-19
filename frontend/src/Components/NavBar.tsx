import React from "react";
import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  Button,
  Modal,
  TextInput,
  TextArea,
  FormItem,
  FileUploaderDropContainer,
} from "@carbon/react";
import {Search, Edit, Wallet, Logout} from "@carbon/icons-react";
import PostButton from "./PostButton";

function NavBar() {
  const [walletConnected, setWalletConnected] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const handleSearch = () => {
    console.log("search");
  }
  const handlePost = () => {
    if (walletConnected === true) {
      setOpen(true);
    }
  }
  const handleConnect = () => {
    console.log("connect");
  }
  return (
    <>
    <Header>
      <HeaderName prefix="#" href="/">AnonNews</HeaderName>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Search" onClick={handleSearch} >
          <Search size={20}  />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Post" onClick={handlePost}>
          <Edit size={20} />
        </HeaderGlobalAction>
        {walletConnected ? (
          <HeaderGlobalAction aria-label="LogOut Wallet" onClick={handleConnect} tooltipAlignment="end">
            <Logout size={20} />
        </HeaderGlobalAction>
        ): (
          <HeaderGlobalAction aria-label="Connect Wallet" onClick={handleConnect} tooltipAlignment="end">
            <Wallet size={20} />
        </HeaderGlobalAction>
        )}
      </HeaderGlobalBar>
    </Header>
    <Modal
        open={open}
        modalHeading="Post a new news"
        primaryButtonText="Post"
        secondaryButtonText="Cancel"
        onRequestClose={() => setOpen(false)}
      >
        <TextInput type="text" labelText="Heading of the news" />
        <br />
        <TextArea labelText="Content of the news" />
        <br />

        <FormItem>
          <p className="cds--file--label">Upload news image</p>
          <p className="cds--label-description">
            Supported file types are .jpg and .png.
          </p>
          <FileUploaderDropContainer
            accept={["image/jpeg", "image/png"]}
            innerRef={{
              current: "[Circular]",
            }}
            labelText="Drag and drop files here or click to upload"
            multiple
            name=""
            onAddFiles={function noRefCheck() {}}
            onChange={function noRefCheck() {}}
            role=""
          />
          <div
            className="cds--file-container"
            style={{
              width: "100%",
            }}
          />
        </FormItem>
      </Modal>
    </>
  );
}

export default NavBar;
