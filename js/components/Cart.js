const React = require("react");
const Ps = require("perfect-scrollbar");
let CartItem = require("./CartItem.js");
let {products,cartItems} = require('../data.js');

let Cart = React.createClass({
  componentDidMount() {
    let $cartContent = React.findDOMNode(this.refs.cartContent);
    Ps.initialize($cartContent);
  },
  render() {
    let children = []
    for (var key in cartItems){
      children.push(<CartItem key={key} cartItem={cartItems[key]}/>);
    };

    return (
      <div className="cart" >
        <h3 className="cart__title">Shopping Cart</h3>
        <div ref="cartContent" className="cart__content">
          <h3 className="cart__title cart__title--spacer">Shopping Cart</h3>
          {children}
        </div>
      </div>
    );
  }
});

module.exports = Cart;