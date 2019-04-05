import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
          <section>
            <h1>How are you feeling today?</h1>
            <form onSubmit={this.handleSubmit}>
            <label>feeling?</label>
           <input type="number" name="feeling" 
               onChange={this.handleChangeFor}></input>
            </form>
          </section>
        <br/>
      </div>
    
    );
  }
}