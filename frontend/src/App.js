import React, { Component } from 'react';
import Register from './containers/Register'; 
import Home from './components/Home'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Write from './components/Write';
import writeMenu from './components/writeMenu'; 
import NewBook from './components/NewBook';
import Login from './containers/Login';
import Character from './components/Character'; 
import tCharacter from './tester/tCharacter'; 
<<<<<<< HEAD
import Character from './components/Character';
import tPlot from './tester/tPlot';
import tChapters from './tester/tChapters';
=======
>>>>>>> 1fbebf8cf04663e7d44afc7e781919b680f2922c


// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (

      <div>
        <Router>
          <div className="App">
            <NavBar/>
            <div className = "container main">

              <Route exact path="/" component= {Home} /> 
              <Route exact path="/signup" component= {Register} />
              <Route exact path="/login" component= {Login} />
              <Route exact path="/write" component= {Write} />
              <Route exact path ="/writemenu" component = {writeMenu}/>
              <Route exact path="/newbook" component= {NewBook} />
              <Route exact path="/character" component= {Character} />
              <Route exact path ="/writemenu" component = {writeMenu}/>
              <Route exact path="/newbook" component= {NewBook} />
              <Route exact path ="/writemenu" component = {writeMenu}/>
              <Route exact path ="/tcharacter" component = {tCharacter}/>
<<<<<<< HEAD
              <Route exact path="/tplot" component = {tPlot} />
              <Route exact path="/tchapters" component={tChapters} />
=======
>>>>>>> 1fbebf8cf04663e7d44afc7e781919b680f2922c


            </div> 
          </div>
        </Router>
      </div> 
    )

  }
}

export default App;
