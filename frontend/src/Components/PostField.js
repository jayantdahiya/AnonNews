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

export default function PostButton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          />
          </div>
          <div>
            <TextField 
            variant='filled'
            margin='dense'
            label='Image/Video url'
            type='url'
            style={{
                minWidth: '350px'
            }}
             />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Post</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
