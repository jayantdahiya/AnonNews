import React, { useContext, useState } from "react";
import { ethers } from "ethers";
import { AppContext } from "../App";
import { Fab, styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { FileUpload } from "@mui/icons-material";
import {Dialog, DialogContent, Backdrop, CircularProgress,  DialogActions, DialogContentText} from "@mui/material";

function PostButton() {
  const { contractAddress, contractABI, client } =
    useContext(AppContext);

  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);

  const [newsText, setNewsText] = useState();
  const [newsMedia, setNewsMedia] = useState("");

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
  };


  const Input = styled("input")({
    display: "none",
  });

  const postNews = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        setLoader(true);
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const anonNewsContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        const post1 = await anonNewsContract.newPost(newsText, newsMedia);
        console.log("Posting....", post1.hash);

        await post1.wait();

        console.log("Posted = ", post1.hash);
        setLoader(false);

        window.location.reload(false);
        alert("News has been posted!");
      }
    } catch (error) {
      console.log(error);
      alert("News not posted. Please try again", error);
      setLoader(false);
    }
  };

  // Uploading the news media on IPFS

  const uploadMedia = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (typeof file !== "undefined") {
      try {
        const result = await client.add(file, {
          progress: (progress) => {
            alert("Uploading your file, please wait");
          },
        });
        alert("File uploaded!");
        setNewsMedia(`https://ipfs.infura.io/ipfs/${result.path}`);
        setLoader(false);
        console.log("Post link:", newsMedia);
      } catch (error) {
        console.log("ipfs image upload error: ", error);
      }
    } else {
      alert("Please upload a valid file type");
    }
  };

  return (
    <div>
      <Fab
        variant="extended"
        onClick={handleClickOpen}
        style={{
          position: "fixed",
          right: "15vw",
          top: "87vh",
        }}
      >
        <AddIcon sx={{ mr: 1 }} />
        Post
      </Fab>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
        onClick={handleClose}
      >
        <CircularProgress color="secondary" />
      </Backdrop>
      <Dialog open={open} onClose={handleClose}>
        {/* <DialogTitle gutterBottom>Post your news here</DialogTitle> */}
        <DialogContent>
          <DialogContentText>Type your news below...</DialogContentText>

          <div class="bg-inherit">
            <textarea
              class="textarea textarea-primary w-full text-white"
              placeholder="News text..."
              onChange={(e) => setNewsText(e.target.value)}
            ></textarea>

            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                type="file"
                onChange={uploadMedia}
              />
              <div class="tooltip" data-tip="Only image files!">
                <span class="btn btn-primary gap-2">
                  <FileUpload />
                  Upload Media
                </span>
              </div>
            </label>
          </div>
        </DialogContent>
        <DialogActions>
          <button class="btn btn-error" onClick={handlePost}>
            Cancel
          </button>
          <button class="btn btn-success" onClick={handlePost}>
            Post
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PostButton;
