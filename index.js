import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
// import 'font-awesome/dist/css/font-awesome.css';
import Counter from './components/counter';

class App extends Component {
  state = {
    counters: [
      {id:0, value:1},
      {id:1, value:0},
      {id:2, value:3},
      {id:3, value:2}
    ]
  }
  handleIncrement = () =>{
    this.setState({counter:this.state.counter+1});
  }
  handleDecrement = () =>{
    this.setState({counter:this.state.counter-1});
  }
  handleReset = () =>{
    this.setState({counter:0});
  }

  render() {
    
    let {counters} = this.state;
    return (
      <div>
        {counters.map( c => <Counter key={c.id} value={c.value} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>) } 
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
