import React from 'react';
import './App.css';
import Home from './Home.component';
import Header from './Header.component';
import Footer from './Footer.component';
import {BrowserRouter as Router,Route,Switch} from'react-router-dom';
import SearchPage from './Search.page';



function App() {
  return (
    <div className="App">
    <Router>
      <Header/>

      <Switch> 
        <Route path="/search">
          <SearchPage/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>

      <Footer/>
    </Router>

    </div>
  );
}

export default App;
