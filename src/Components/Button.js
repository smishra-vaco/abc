import React, { PureComponent } from "react";

export default class Button extends PureComponent {
  render() {
    console.log("button rendered");
    return (
      <button onClick={this.props.clickHandler}>{this.props.symbol}</button>
    );
  }
}
