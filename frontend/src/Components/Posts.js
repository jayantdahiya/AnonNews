import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import { AppContext } from '../App';


export default function Posts() {
  const {allPosts, theme1 } = React.useContext(AppContext);

  return (
    <div>
      {allPosts.map((posts,index) =>{
        return(
      <Card sx={{ maxWidth: 500, m: 2 }} id={index} 
      theme={theme1}
      >
      <CardHeader
        avatar={
            <Avatar/>
        }
        action={
            <IconButton aria-label="settings">
              <ShareIcon theme={theme1} color={'black'} />
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
        <CardMedia
          component="img"
          height="200"
          minWidth="360"
          image={posts.media}
          alt=""
        />
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
