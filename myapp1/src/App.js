import React from 'react';

import './App.css';
import FirstComponent from './propsContainer/FirstComponent';
import SecondComponent from './propsContainer/SecondComponent';
import UseStateExample from './UseStateExample';
import ClickEvent from './ClickEvent';
import UserForm from './UserForm';
import Form from './Form';
import Arryofobject from './Arryofobject';
import Arrayofobjects2 from './Arrayofobjects2';
import Userpage from './Userpage';
import Empform from './Empform';
import ViewEmployees from './ViewEmployees';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';


const user = {
  name: "nsrial",
  age: 45,
  school: "mmschool"
};
const destructingcomp = {
  name: "destruct",
  age: 30,
  school: "hhh"
};

function App() {
  return (
    <div className="App">
      {/*<h1>hi this is app</h1>
      <SecondComponent name="hello from second components" />
      <SecondComponent name={user.age} />
      <FirstComponent {...destructingcomp} /> {/* Use spread operator */}
      <UseStateExample />
      {/*<img className="sampleimage" src="download.jpeg" alt="frog" />
      <div>
      <ClickEvent/>
      <UserForm/>
      <Form/>
     
      </div>
      <Arryofobject/>
      <Arrayofobjects2/>
      <Userpage/>
      <Empform/>*
      <Empform/>*/}
      <Router>
      <nav>

        <ul>
          <li>

            <Link to="/viewEmployees"> View employees </Link>
            <br/>
            <Link to="/employeescreate">see employees </Link>
          </li>
        </ul>
      </nav>
      <Routes>

        <Route path="/viewEmployees" element={<ViewEmployees/>}/>
        <Route path="/employeescreate" element={<Empform/>}/>
      </Routes>
      </Router>

    </div>
  );
}

export default App;
