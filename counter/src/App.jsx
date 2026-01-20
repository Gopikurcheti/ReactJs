import React, { Component } from 'react'
import './App.css'

export class App extends Component {

  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }

  changeValue = () => {
    this.setState({
      count: this.state.count +1
    })
    
  }
  render() {
    return (
      <>
      <div className='parent'>
      <h1>Counter App</h1>
      <button onClick={this.changeValue}>Yoou have clicked {this.state.count}</button>
      </div>
      </>
    )
  }
}

export default App;