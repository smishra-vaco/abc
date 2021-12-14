import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <button onClick={this.props.clickHandler}>{this.props.symbol}</button>
    );
  }
}
