import React, { Component } from "react";

export default class Count extends Component {
  render() {
    return <span>{this.props.countValue}</span>;
  }
}
