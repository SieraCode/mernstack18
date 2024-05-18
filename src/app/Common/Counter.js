import React from 'react'

export default class Counter extends React.Component{
    constructor (props) {
        super(props)

        this.state = {
            counter: 0
        }

        this.increment = () => this.setState({counter: this.state.counter+1})
    }

    render (){
        return 
        <div>
            <button onClick={this.increment}>Increment</button>
            <div className="counter">
                Counter: {this.state.counter}
            </div>
         </div>
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('Component Did Update')
    }

}