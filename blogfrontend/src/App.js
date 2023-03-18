import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import Blogs from './Blogs'

function App() {
  return (
    <div className="App">
      
      
      <Router>
      <nav>
          <li><Link to='/'>Home</Link></li>
          
          <li><Link to='/blogs'>Insert</Link></li>
      
      </nav>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
        </Routes>
        
        
      </Router>
    </div>
  );
}

export default App;
