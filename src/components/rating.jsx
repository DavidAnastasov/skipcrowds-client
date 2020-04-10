import React, { Component } from "react";
import "./styles/rating.css";

class Rating extends Component {
  state = {
    stars: [5, 4, 3, 2, 1],
  };
  render() {
    return (
      <div className="rating">
        {this.state.stars.map((star, i) => (
          <React.Fragment key={`holder_${i}`}>
            <input
              id={`rate_${i}`}
              key={`input_${i}`}
              type="radio"
              name="rating"
              value={i}
              onChange={() => this.props.onChange(star)}
            ></input>
            <label htmlFor={`rate_${i}`} key={`label_${i}`}>
              ☆
            </label>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default Rating;
