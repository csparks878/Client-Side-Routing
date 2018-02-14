import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from "react-router-dom";

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return(
      <div className="App">
        <Route path="/" exact component={MovieList} />
        <Route path="/movies/{id}" component={Movie} />
      </div>
    )
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
