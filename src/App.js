import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{

  state = {
    planets: [
      { name: 'Mars', age:3000000},
      { name: 'Mercury', age:3499999},
      { name: 'Jupiter', age:5600000},
      { name: 'Neptune', age:1000000}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      planets: [
        { name: 'Mars', age:3000001},
        { name: 'Mercury', age:3500000},
        { name: 'Jupiter', age:5600001},
        { name: 'Neptune', age:1000001}
      ]
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Hello Github</h1>
  
        <Person name={this.state.planets[0].name} age={this.state.planets[0].age}/>
        <Person name={this.state.planets[1].name} age={this.state.planets[1].age}/>
        <Person name={this.state.planets[2].name} age={this.state.planets[2].age}>Too old...</Person>
        <Person name={this.state.planets[3].name} age={this.state.planets[3].age}/>
  
        <button onClick={this.switchNameHandler}>One year later</button>
  
      </div>
    );
  }
}

export default App;
