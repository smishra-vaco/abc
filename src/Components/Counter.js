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

  render() {
    const handleIncrement = () => {
      this.setState({ count: this.state.count + 1 });
    };

    const handleDecrement = () => {
      this.setState({ count: this.state.count - 1 });
    };

    return (
      <div>
        <Button clickHandler={handleDecrement} symbol={"-"} />
        <Count countValue={this.state.count} />
        <Button clickHandler={handleIncrement} symbol={"+"} />
      </div>
    );
  }
}
