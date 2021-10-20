import React, {Component} from 'react';
import './Counter.css';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            count: this.props.startingCount,
            name:"leila"
        }
        this.Counter=this.Counter.bind(this)
    }
    Counter(){
        this.setState({
            count:this.state.count +1
        })
    }
    render(){
        console.log("render");
        return(
            <div id="Counter">
              <h1>{this.state.count}</h1>
              <button onClick={this.Counter}>Click Me</button>

            </div>
        )
    }
}
export default Counter;