import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CircularProgress, Fab } from '@mui/material';
import Add from '@mui/icons-material/Add';
import { ethers } from 'ethers';
import { AppContext } from '../App';
import {Backdrop} from '@mui/material';


export default function PostButton() {
  const { contractAddress, contractABI, theme1} = React.useContext(AppContext);

  const [open, setOpen] = React.useState(false);
  const [loader, setLoader] = React.useState(false);

  const [newsText, setNewsText] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setLoader(false);
  };

  const handlePost = () => {
    setOpen(false);
    postNews();
  }

  const postNews = async() => {
    try {
      const {ethereum} = window;
      if (ethereum){
        setLoader(true);
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const anonNewsContract = new ethers.Contract(contractAddress, contractABI, signer);

        const post1 = await anonNewsContract.newPost(newsText);
        console.log("Posting....", post1.hash);

        await post1.wait();

        console.log("Posted = ", post1.hash);
        setLoader(false);

        window.location.reload(false);
        alert("News has been posted!");
      }
    } catch (error) {
      console.log(error);
      alert("News not posted. Please try again");
    }
  }

  return (
    <div>
      <Fab
      theme={theme1}
      color='secondary'
      style={{
        position: 'fixed',
        right: '15vw',
        top: '87vh'
      }}
      onClick={handleClickOpen}
      >
        <Add />
      </Fab>
      <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loader}
      onClick={handleClose}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle gutterBottom>Post your news here</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Type your news below...
          </DialogContentText>
          
          <div>
          <TextField
            autoFocus
            required
            margin="dense"
            id="news"
            label="Your news"
            type="text"
            multiline
            rows={4}
            variant="filled"
            style={{
                minWidth: '350px'
            }}
            onChange={e=>setNewsText(e.target.value)}
            theme={theme1}
          />
          </div>
          {/* <div>
            <TextField 
            variant='filled'
            margin='dense'
            label='Image/Video url'
            type='url'
            style={{
                minWidth: '350px'
            }}
             />
          </div> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handlePost}>Post</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
