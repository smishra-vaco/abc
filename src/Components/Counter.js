import React, { PureComponent } from "react";
import Button from "./Button";
import Count from "./Count";

export default class Counter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <Button clickHandler={this.handleDecrement} symbol={"-"} />
        <Count countValue={this.state.count} />
        <Button clickHandler={this.handleIncrement} symbol={"+"} />
      </div>
    );
  }
}
