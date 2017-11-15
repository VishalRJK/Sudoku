import React, { Component } from 'react';
import './App.css'

var keys,random1,random2,random3;
class App extends Component {
  constructor(props) {
    super(props);
    // this.state={numbers:{'r1c1':'','r1c2':'','r1c3':'','r2c1':'2','r2c2':'','r2c3':'','r3c1':'','r3c2':'','r3c3':''}};
    this.state={r1c1:'',r1c2:'',r1c3:'',r2c1:'',r2c2:'',r2c3:'',r3c1:'',r3c2:'',r3c3:''};
   // this.state={numbers:['','','','','','','','','']};
    this.startGame=this.startGame.bind(this);
   // this.checkValuer1c1=this.checkValuer1c1.bind(this)
   this.checkValuer1c2=this.checkValuer1c2.bind(this);
   this.checkValuer1c3=this.checkValuer1c3.bind(this);
   this.checkValuer2c1=this.checkValuer2c1.bind(this);
   this.checkValuer2c2=this.checkValuer2c2.bind(this);
   this.checkValuer3c1=this.checkValuer3c1.bind(this);
   this.checkValuer3c3=this.checkValuer3c3.bind(this);
   this.result=this.result.bind(this);
  }  

  // checkValuer1c1(e) {
    
  //   this.setState({r1c1: e.target.value});   
  // }
   checkValuer1c2(e) {
    
    this.setState({r1c2: e.target.value});   
  }
   checkValuer1c3(e) {
    
    this.setState({r1c3: e.target.value});   
  }
   checkValuer2c1(e) {
    
    this.setState({r2c1: e.target.value});   
  }
   checkValuer2c2(e) {
    
    this.setState({r2c2: e.target.value});   
  }
  //  checkValuer2c3(e) {
    
  //   this.setState({r2c3: e.target.value});   
  // }
   checkValuer3c1(e) {
    
    this.setState({r3c1: e.target.value});   
  }
  //  checkValuer3c2(e) {
    
  //   this.setState({r3c2: e.target.value});   
  // }
   checkValuer3c3(e) {
    
    this.setState({r3c3: e.target.value});   
  }

  startGame(e) {
    // debugger;
    //  keys = Object.keys(this.state.numbers);
    //  random1= keys[Math.floor(Math.random()*8)];
    //  random2= keys[Math.floor(Math.random()*8)];
    //  random3= keys[Math.floor(Math.random()*8)]; 
     random1= Math.floor(1 + Math.random()*9);
     random2= Math.floor(1 + Math.random()*9);
     random3= Math.floor(1 + Math.random()*9);          
    if(random1 !== random2 && random1 !== random3 && random2 !== random3)
    {
    // this.setState((prevState) => {return{
    // numbers: {
    //     ...prevState.numbers,
    //    r1c1: Math.floor((1+Math.random()*9)),
    //    check: Math.floor((1+Math.random()*9)),
    //    random3: Math.floor((1+Math.random()*9)),
    //          }
   this.setState({r1c1:random1,r3c2:random2,r2c3:random3});
   e.preventDefault();
    }
    else
    {    
    this.startGame();
    e.preventDefault();
    }
  }

  result(e) {
    var res = parseInt(this.state.r1c1)+parseInt(this.state.r1c2)+parseInt(this.state.r1c3)+parseInt(this.state.r2c1)+parseInt(this.state.r2c2)+parseInt(this.state.r2c3)+parseInt(this.state.r3c1)+parseInt(this.state.r3c2)+parseInt(this.state.r3c3);
    if(res===45)
    alert("you've won!!!")
    else {
      alert("please check answer again");
      e.preventDefault();
    }  
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sudoku</h1>
        </header>
        <div className="App-intro">
          <form>
          <table >
            <tbody>
            <tr>
              <td><input type='text' value ={this.state.r1c1} disabled /></td>
              <td><input type='text' value ={this.stater1c2} onChange={this.checkValuer1c2}/></td>
              <td><input type='text' value ={this.stater1c3} onChange={this.checkValuer1c3}/></td>
            </tr>
            <tr>
              <td><input type='text' value ={this.state.r2c1} onChange={this.checkValuer2c1}/></td>
              <td><input type='text' value ={this.state.r2c2} onChange={this.checkValuer2c2}/></td>
              <td><input type='text' value ={this.state.r2c3} disabled /></td>
            </tr>
            <tr>
              <td><input type='text' value ={this.state.r3c1} onChange={this.checkValuer3c1}/></td>
              <td><input type='text' value ={this.state.r3c2} disabled /></td>
              <td><input type='text' value ={this.state.r3c3} onChange={this.checkValuer3c3}/></td>
            </tr>
            </tbody>
          </table>
          <button onClick ={this.startGame}>Start The Game / Replay</button>
          <button onClick ={this.result}>Check your answer </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
