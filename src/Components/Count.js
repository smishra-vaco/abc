import React, { PureComponent } from "react";

export default class Count extends PureComponent {
  render() {
    console.log("count is rendered");
    return <span>{this.props.countValue}</span>;
  }
}
