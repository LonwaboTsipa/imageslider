import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>HOME</h1>
      <Link to={'./Slider'}>
        <button variant="raised">
           My Slider
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;