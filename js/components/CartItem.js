const React = require("react");
let QuantityControl = require("./QuantityControl.js");
let {products,cartItems} = require('../data.js');

let CartItem = React.createClass({
  render() {
    let {id,quantity} = this.props.cartItem;
    let priceString;
    if (quantity > 1) {
      priceString = products[id].price + ' x ' + quantity;
    } else {
      priceString = products[id].price;
    }

    return (
      <div className="cart-item">
        <div className="cart-item__top-part">
          <div className="cart-item__image">
            <img src={products[id].imagePath}/>
          </div>

          <div className="cart-item__top-part__middle">
            <div className="cart-item__title">
              {products[id].name}
            </div>

            <div className="cart-item__price">
              {priceString}
            </div>
          </div>

          <img className="cart-item__trash" src="img/trash-icon.svg"/>
        </div>


        <div className="cart-item__qty">
          <QuantityControl quantity={quantity}/>
        </div>
      </div>
    );
  }
});

module.exports = CartItem;