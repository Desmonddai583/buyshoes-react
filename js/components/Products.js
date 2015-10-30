const React = require("react");
let Product = require("./Product.js");
let {products,cartItems} = require('../data.js');

let Products = React.createClass({
  render() {
    let children = []
    for (var key in products){
      children.push(<Product key={key}  product={products[key]}/>);
    };

    return (
      <div className="products">
        {children}
      </div>
    );
  }
});

module.exports = Products;