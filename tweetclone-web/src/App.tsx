import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navigation/navBar';
import CardList from './components/cardList/cardList';
import BottomBar from './components/navigation/bottomBar';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  basePage = () => {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    );
  };
  render() {
    return (
      <div className="App">
        <NavBar />
        
        <Switch>
          <Route exact path="/" component={this.basePage} />
          <Route path="/ViewPosts" component={CardList} />
          {/* both /roster and /roster/:number begin with /roster */}
          {/* <Route path='/roster' component={Roster}/>
  <Route path='/schedule' component={Schedule}/> */}
        </Switch>
        <BottomBar />
      </div>
    );
  }
}

export default App;
