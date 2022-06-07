import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Fab } from '@mui/material';
import Add from '@mui/icons-material/Add';
import { ethers } from 'ethers';
import abi from '../utils/AnonNews.json';
import LoadBackdrop from './BackDrop';

export default function PostButton() {
  const [open, setOpen] = React.useState(false);

  const contractAddress = "0xfE18dE8f84E4dE88b656063503FA61954EC4C959";
  const contractABI = abi.abi;

  const [newsText, setNewsText] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const postNews = async() => {
    try {
      const {ethereum} = window;
      if (ethereum){
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const anonNewsContract = new ethers.Contract(contractAddress, contractABI, signer);

        setOpen(false);

        const post1 = await anonNewsContract.newPost(newsText);
        console.log("Posting....", post1.hash);
        await post1.wait();
        console.log("Posted = ", post1.hash);
        alert("News has been posted!");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      alert("News not posted. Please try again");
    }
  }

  return (
    <div>
      <Fab
      color='primary'
      style={{
        position: 'fixed',
        right: '15vw',
        top: '87vh'
      }}
      onClick={handleClickOpen}
      >
        <Add />
      </Fab>
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
          <Button onClick={postNews}>Post</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
