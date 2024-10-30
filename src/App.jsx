
import Navbar from './component/Navbar';
import Home from './component/Home';
import Contact from './component/Contact';
import Portfolio from './component/Portfolio';






import { Route,Routes } from 'react-router-dom';
import './App.css';








  

  
    function App() {
      return (
        <div className="App">
                         <Navbar/>
                  <Routes>
                       <Route path="/" exact element={<Home/>}/>
                  </Routes>
    
        
        </div>
      
  )
};

export default App;
