const React = require("react");
let QuantityControl = require("./QuantityControl.js");
let {products,cartItems} = require('../data.js');

let Product = React.createClass({
  render() {
    let {id,name,price,imagePath} = this.props.product;

    return (
      <div className="product">
        <div className="product__display">
          <div className="product__img-wrapper">
            <img className="product__img" src={imagePath} />
          </div>
          <div className="product__control">
            {this.quantityControl(id)}
          </div>
          <div className="product__price">
            {'$' + price}
          </div>
        </div>
        <div className="product__description">
          <div className="product__name">
            {name}
          </div>
          <img className="product__heart" src="img/heart.svg" />
        </div>
      </div>
    );
  },
  quantityControl(id) {
    if (cartItems[id]) {
      return (<QuantityControl quantity={cartItems[id].quantity} variant="gray" />)
    } else {
      return (
        <a className="product__add">
          <img className="product__add__icon" src="img/cart-icon.svg" />
        </a>
      )
    }
  }
});

module.exports = Product;