import React, { Component } from 'react';
import {connect} from 'react-redux';
import { startGame,setValue } from './actions/gameAction';
import './App.css'

var keys,random1,random2,random3;
class App extends Component {
  constructor(props) {
    super(props);
   // this.state={numbers:{'r1c1':'','r1c2':'','r1c3':'','r2c1':'2','r2c2':'','r2c3':'','r3c1':'','r3c2':'','r3c3':''}};
   this.state={r1c2:'',r1c3:'',r2c1:'',r2c2:'',r3c1:'',r3c3:''};
   // this.state={numbers:['','','','','','','','','']};
   this.startGame=this.startGame.bind(this);
   // this.checkValuer1c1=this.checkValuer1c1.bind(this)
   
   // moving all local state to store state
  //  this.checkValuer1c2=this.checkValuer1c2.bind(this);
  //  this.checkValuer1c3=this.checkValuer1c3.bind(this);
  //  this.checkValuer2c1=this.checkValuer2c1.bind(this);
  //  this.checkValuer2c2=this.checkValuer2c2.bind(this);
  //  this.checkValuer3c1=this.checkValuer3c1.bind(this);
  //  this.checkValuer3c3=this.checkValuer3c3.bind(this);
   this.changeState=this.changeState.bind(this);
   this.result=this.result.bind(this);
  }  

  // checkValuer1c1(e) {
    
  //   this.setState({r1c1: e.target.value});   
  // }
  //  checkValuer1c2(e) {
    
  //   this.setState({r1c2: e.target.value});   
  // }
  //  checkValuer1c3(e) {
    
  //   this.setState({r1c3: e.target.value});   
  // }
  //  checkValuer2c1(e) {
    
  //   this.setState({r2c1: e.target.value});   
  // }
  //  checkValuer2c2(e) {
    
  //   this.setState({r2c2: e.target.value});   
  // }
  // //  checkValuer2c3(e) {
    
  // //   this.setState({r2c3: e.target.value});   
  // // }
  //  checkValuer3c1(e) {
    
  //   this.setState({r3c1: e.target.value});   
  // }
  // //  checkValuer3c2(e) {
    
  // //   this.setState({r3c2: e.target.value});   
  // // }
  //  checkValuer3c3(e) {
    
  //   this.setState({r3c3: e.target.value});   
  // }

  changeState(e) {
    debugger;
    this.props.dispatch(setValue(e.target.id,e.target.value));
  }

  startGame(e) {
     debugger;
    //  keys = Object.keys(this.state.numbers);
    //  random1= keys[Math.floor(Math.random()*8)];
    //  random2= keys[Math.floor(Math.random()*8)];
    //  random3= keys[Math.floor(Math.random()*8)]; 
    this.props.dispatch(startGame());
    e.preventDefault();
    //  random1= this.props.predefinedNumbers.r1c1;
    //  random2= this.props.predefinedNumbers.r2c3;
    //  random3= this.props.predefinedNumbers.r3c2;          
    // if(this.props.predefinedNumbers.r1c1 !== this.props.predefinedNumbers.r2c3 && this.props.predefinedNumbers.r1c1 !== this.props.predefinedNumbers.r3c2 && this.props.predefinedNumbers.r2c3 !== this.props.predefinedNumbers.r3c2)
    // {
    // this.setState((prevState) => {return{
    // numbers: {
    //     ...prevState.numbers,
    //    r1c1: Math.floor((1+Math.random()*9)),
    //    check: Math.floor((1+Math.random()*9)),
    //    random3: Math.floor((1+Math.random()*9)),
    //          }
  // this.setState({r1c1:random1,r3c2:random2,r2c3:random3});
    //  e.preventDefault();
    // }
    // else
    // {    
    // this.startGame();
    // e.preventDefault();
    // }
  }

  result(e) {
    var r1c1=parseInt(this.props.predefinedNumbers.r1c1);
    var r1c2=parseInt(this.props.predefinedNumbers.r1c2);
    var r1c3=parseInt(this.props.predefinedNumbers.r1c3);
    var r2c1=parseInt(this.props.predefinedNumbers.r2c1);
    var r2c2=parseInt(this.props.predefinedNumbers.r2c2);
    var r2c3=parseInt(this.props.predefinedNumbers.r2c3);
    var r3c1=parseInt(this.props.predefinedNumbers.r3c1);
    var r3c2=parseInt(this.props.predefinedNumbers.r3c2);
    var r3c3=parseInt(this.props.predefinedNumbers.r3c3);
    var res = parseInt(this.props.predefinedNumbers.r1c1)+parseInt(this.props.predefinedNumbers.r1c2)+parseInt(this.props.predefinedNumbers.r1c3)+parseInt(this.props.predefinedNumbers.r2c1)+parseInt(this.props.predefinedNumbers.r2c2)+parseInt(this.props.predefinedNumbers.r2c3)+parseInt(this.props.predefinedNumbers.r3c1)+parseInt(this.props.predefinedNumbers.r3c2)+parseInt(this.props.predefinedNumbers.r3c3);
    var rowCheck = false;
    var colCheck = false;
   // var diagnolCheck = false;
    if(r1c1+r2c1+r3c1==6 && r1c2+r2c2+r3c2==6 && r1c3+r2c3+r3c3==6)
    rowCheck=true;
    else
    rowCheck=false;
    if(r1c1+r1c2+r1c3==6 && r2c1+r2c2+r2c3==6 && r3c1+r3c2+r3c3==6)
    colCheck=true;
    else 
    colCheck=false;
   // if(r1c1+r2c2+r3c3===15)
   // diagnolCheck=true;
    //else
    //diagnolCheck=false;
    if(res===18 && rowCheck && colCheck )
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
              <td><input type='text' value ={this.props.predefinedNumbers.r1c1} disabled /></td>
              <td><input type='text' id="r1c2" value ={this.props.predefinedNumbers.r1c2} onChange={this.changeState}/></td>
              <td><input type='text' id="r1c3" value ={this.props.predefinedNumbers.r1c3} onChange={this.changeState}/></td>
            </tr>
            <tr>
              <td><input type='text' id="r2c1" value ={this.props.predefinedNumbers.r2c1} onChange={this.changeState}/></td>
              <td><input type='text' id="r2c2" value ={this.props.predefinedNumbers.r2c2} onChange={this.changeState}/></td>
              <td><input type='text' value ={this.props.predefinedNumbers.r2c3} disabled /></td>
            </tr>
            <tr>
              <td><input type='text' id="r3c1" value ={this.props.predefinedNumbers.r3c1} onChange={this.changeState}/></td>
              <td><input type='text' value ={this.props.predefinedNumbers.r3c2} disabled /></td>
              <td><input type='text' id="r3c3" value ={this.props.predefinedNumbers.r3c3} onChange={this.changeState}/></td>
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

function mapStateToProps(state,ownProps) {
  return {
    predefinedNumbers:state.game
  };
}

export default connect(mapStateToProps)(App);
