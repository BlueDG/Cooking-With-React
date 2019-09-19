import React, { Component } from "react";
import { Theme } from "./App";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.initialValue
    };
  }

  render() {
    return (
      <Theme.Consumer>
        {color => (
          <div>
            <button style={color} onClick={() => this.changeValue(-1)}>
              -
            </button>
            <span>{this.state.value}</span>
            <button style={color} onClick={() => this.changeValue(+1)}>
              +
            </button>
          </div>
        )}
      </Theme.Consumer>
    );
  }

  changeValue(v) {
    this.setState(prevValue => {
      return { value: prevValue.value + v };
    });
  }
}
