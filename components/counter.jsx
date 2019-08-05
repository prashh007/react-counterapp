import React,{Component} from "react";

export default class Counter extends Component{
  render(){
    let {value, onIncrement, onDecrement} = this.props;
    
    return 
       (<div>
        <span className="m-2">
          {value}
        </span>
        <button onClick={onIncrement} className="btn btn-secondary btn-sm m-2">
          <i class="fa fa-plus"></i> +
        </button>
        <button onClick={handleDecrement} className="btn btn-secondary btn-sm m-2" disabled={counter === 0 ? true : false}>
          Decrement
        </button>
        <button onClick={onDecrement} className="btn btn-secondary btn-sm m-2" disabled={value === 0 ? true : false}>
          Reset
        </button>
      </div>)
    
  }
}