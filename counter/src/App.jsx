import React from "react"
import './App.css'

class App extends React.Component{

  constructor(props){
    super(props);

      this.state={
        count:0
      }
  }

  myFun =()=>{
    this.setState({
      count: this.state.count + 1
    })
  }

  render(){
    return(
      <>
        <div className='container'>
         <button onClick={this.myFun}>You have clicked {this.state.count} times</button>      

        </div>
      </>
    )
  }
}

export default App;