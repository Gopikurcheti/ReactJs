import React from "react"

class Laptop extends React.Component {
  constructor(props){
    super(props);

    this.state={
      name:"Raghava",
      age:22
    }

  }
   render(){
    return(
      <>
          <h1>My name is {this.state.name} and I am {this.state.age} years old</h1>
      </>
    )
   }

}

export default Laptop;