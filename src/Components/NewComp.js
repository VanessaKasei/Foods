import React, { Component } from 'react';
import BellA from "../Images/BellA.png";
import BellB from "../Images/BellB.png";

export class NewComp extends Component {
  constructor(props) {
     super(props);

      this.state = {
        message: "subscribe to simplilearn!",
        sub: "subscribe",
        imageURL: BellA, 
      };
    }
  styles = {
    fontStyle: "italic",
    color: "purple"
  };
Buttonchange = ()=>{
  this.setState({
    message: "Hit the bell icon to never miss an update",
    sub: "Subscribed"
  });
};
imageChange= ()=> {
  this.setState({
    imageURL: BellB,
    message: "Thank you. Happy learning!"
  })
}
  render() {
    return (
      <div className='App'>
        <h1 style={this.styles}>{this.state.message}</h1>
        <button onClick={this.Buttonchange}> 
          {this.state.sub}
        </button>
        <p>
          <img  style={{width:"30px", height: "30px"}} 
          onClick={this.imageChange}
          src={this.state.imageURL} alt='' />
        </p>
      </div>
    );
  }
}

export default NewComp;