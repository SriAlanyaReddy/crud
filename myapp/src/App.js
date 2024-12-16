import React from 'react';

import { BrowserRouter as Router ,Routes,Route,Link } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import About from './Components/About';

function App() {
  return (
    <div className="App">
     <Router>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

        </ul>
      </nav>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<h1>hi you are in home </h1>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
