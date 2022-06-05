import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  return (
    <>
    <CssBaseline>
    <div className='navBar'>
      <Nav />
     </div>
     <div className='postButton'>
     <Fab color='primary'>
      <AddIcon/>
     </Fab>
     </div>
    </CssBaseline>
    </>
  );
}

export default App;
