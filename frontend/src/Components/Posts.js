import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import { ethers, providers } from 'ethers';
import abi from '../utils/AnonNews.json';


export default function Posts() {

  const contractAddress = "0xfE18dE8f84E4dE88b656063503FA61954EC4C959";
  const contractABI = abi.abi;

  const [allPosts, setAllPosts ] = React.useState([]);

  const getAllPosts = async () => {
    try {
      const {ethereum} = window;
      if(ethereum){
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const anonNewsContract = new ethers.Contract(contractAddress, contractABI, signer);

        const posts = await anonNewsContract.getAllPosts();

        let postsCleaned = [];
        posts.forEach(post => {
          postsCleaned.push({
            address: post.voter,
            timestamp: new Date(post.timestamp * 1000),
            news: post.message
          })
        });
        postsCleaned.sort((a,b)=> b.timestamp.valueOf() - a.timestamp.valueOf());
        setAllPosts(postsCleaned);
        console.log(allPosts);
      }
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    getAllPosts();
  }, [])

  return (
    <div>
      {allPosts.map((posts,index) =>{
        return(
      <Card sx={{ maxWidth: 500, m: 2 }} id={index} >
      <CardHeader
        avatar={
            <Avatar/>
        }
        action={
            <IconButton aria-label="settings">
              <ShareIcon />
            </IconButton>
        }
        title={'AnonymousUser'}
        subheader={      
          Intl.DateTimeFormat('en-US',{year: 'numeric', 
          month: '2-digit',
          day: '2-digit', 
          })
          .format(posts.timestamp)
        }
      />
        {/* <CardMedia
          component="img"
          height="200"
          minWidth="360"
          image=""
          alt=""
        /> */}
      <CardContent>
          <Typography 
          variant="body2" 
          color="text.secondary" 
          component="p"
          minWidth={400}
          >
            {
              posts.news
            }
          </Typography>
      </CardContent>
    </Card>
    )
  })}
    </div>
  );
}
