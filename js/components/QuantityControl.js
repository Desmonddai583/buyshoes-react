const React = require("react");

let QuantityControl = React.createClass({
  render() {
    let style = this.props.variant ? 'adjust-qty--'+this.props.variant : '';

    return (
      <div className={"adjust-qty " + style}>
        <a className="adjust-qty__button">-</a>
        <div className="adjust-qty__number">{this.props.quantity}</div>
        <a className="adjust-qty__button">+</a>
      </div>
    );
  }
});

module.exports = QuantityControl;