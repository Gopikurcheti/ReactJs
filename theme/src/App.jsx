import React from 'react'
import './App.css'

export class App extends React.Component{

  constructor(){
    super();
    this.state={
      main:'light',
      child:'light'
    }
  }

  changeToDark = () =>{
    this.setState({
      main:'black',
      child:'black'
    })
  }

  changeToLight = () =>{
    this.setState({
      main:'light',
      child:'light'
    })
  }

  render(){
    return(
      <>

        <div className={this.state.main}>
          <div>

            <h1 id={this.state.child}>This is a theme Project</h1>
            <h2 id={this.state.child}>Where the things will change</h2>

          </div>

          <div>
            <img onClick={this.changeToLight}
            src='https://png.pngtree.com/png-vector/20250612/ourmid/pngtree-bright-sun-symbol-clipart-png-image_16524644.png' width='50'/>

            <img  onClick={this.changeToDark}
            src='https://assets.vogue.in/photos/6772461aca29c2e87fba9be9/4:3/w_6728,h_5046,c_limit/1454962321' width='50' height='50'/>
          </div>


        </div>
      </>
    )
  }
}

export default App;