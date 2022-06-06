import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav';
import CssBaseline from '@mui/material/CssBaseline';
import Posts from './Components/Posts';
import PostButton from './Components/PostField';


function App() {

  return (
    <CssBaseline>
    <div className='navBar'>
      <Nav />
    </div>
    <div className='postsSection'>
      <Posts />
     </div>
     <PostButton />
    </CssBaseline>
  );
}

export default App;
