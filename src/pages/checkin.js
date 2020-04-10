import React, { Component } from "react";
import "./styles/checkin.css";
import Rating from "../components/rating";

class CheckIn extends Component {
  state = {};

  handleRating(rating) {
    console.log(rating);
  }

  render() {
    return (
      <div className="background">
        <div className="holder">
          <img src="/images/logo.png" alt="logo"></img>
          <span className="stop">Stop the spread with less crowds</span>

          <span className="thanks">THANK YOU FOR CHECKING IN</span>

          {/* <span className="youjust">You just checked in at</span>

          <span className="placeName">Lisa Centar</span> */}

          <span className="crowded">How crowded is the place?</span>

          <Rating onChange={this.handleRating} />

          <span className="wantlive">Want live information?</span>
          <button className="download">Download our app</button>
        </div>
      </div>
    );
  }
}

export default CheckIn;
