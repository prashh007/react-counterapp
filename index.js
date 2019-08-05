import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  state = {
    counter : 0
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
    let {counter} = this.state;
    return (
      <div>
        <span className="m-2">
          {this.state.counter}
        </span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm m-2">
          <i class="fa fa-plus"></i> +
        </button>
        <button onClick={this.handleDecrement} className="btn btn-secondary btn-sm m-2" disabled={counter===0 ? true : false}>
          Decrement
        </button>
        <button onClick={this.handleReset} className="btn btn-secondary btn-sm m-2" disabled={counter===0 ? true : false}>
          Reset
        </button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
