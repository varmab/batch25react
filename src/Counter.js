import React, { Component} from 'react'

class Counter extends Component{
    constructor(){
        super();
        this.state={
            count:0,
            disabled:true
        }
    }

    increment=()=>{
        this.setState({
            count:this.state.count+1,
            disabled:false
        })
    }

    decrement=()=>{
        this.setState({
            count:this.state.count-1
        },()=>{
            if(this.state.count<1){
                this.setState({
                    disabled:true
                })
            }
        })
    }

    render(){
        console.log("rendering...")
        return(
            <React.Fragment>
                <h1>Counter</h1>
                <h3>{this.state.count}</h3>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement} disabled={this.state.disabled}>Decrement</button>
            </React.Fragment>
        )
    }
}

export default Counter;