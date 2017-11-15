import React, { Component } from 'react';
import './App.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state={numbers:{'r1c1':'','r1c2':'','r1c3':'','r2c1':'','r2c2':'','r2c3':'','r3c1':'','r3c2':'','r3c3':''}};
    this.startGame=this.startGame.bind(this);
  }  
  startGame() {
    debugger;
    var keys = Object.keys(this.state.numbers);
    var random1= keys[Math.floor(Math.random()*8)];
    var random2= keys[Math.floor(Math.random()*8)];
    var random3= keys[Math.floor(Math.random()*8)];
    if(random1 !== random2 && random1 !== random3 && random2 !== random3)
    {
    this.setState(prevState => {return{
    numbers: {
        ...prevState.numbers,
       random1: Math.floor((1+Math.random()*9)),
       random2: Math.floor((1+Math.random()*9)),
       random3: Math.floor((1+Math.random()*9)),
             }
}});
    }
    else
    {    
    this.startGame();
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sudoku</h1>
        </header>
        <div className="App-intro">
          <table >
            <tbody>
            <tr>
              <td>{this.state.numbers.r1c1}</td>
              <td>{this.state.numbers.r1c2}</td>
              <td>{this.state.numbers.r1c3}</td>
            </tr>
            <tr>
              <td>{this.state.numbers.r2c1}</td>
              <td>{this.state.numbers.r2c2}</td>
              <td>{this.state.numbers.r2c3}</td>
            </tr>
            <tr>
              <td>{this.state.numbers.r3c1}</td>
              <td>{this.state.numbers.r3c2}</td>
              <td>{this.state.numbers.r3c3}</td>
            </tr>
            </tbody>
          </table>
          <button onClick ={this.startGame}>Start The Game</button>
        </div>
      </div>
    );
  }
}

export default App;
