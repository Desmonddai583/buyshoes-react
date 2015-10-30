const React = require("react");
let SiteTitle = require("./SiteTitle.js");
let Products = require("./Products.js");
let Cart = require("./Cart.js");
let Checkout = require("./Checkout.js");

let App = React.createClass({
  displayName: "App",

  render: function render() {
    return (
      <div className="site">
        <div className="bg">
          <div className="bg__img">
          </div>
        </div>
        <div className="site__main">
          <div className="site__left-sidebar">
            <SiteTitle/>
          </div>
          <div className="site__content">
            <Products/>
          </div>
        </div> 
        <div className="site__right-sidebar">
          <Cart/>
          <Checkout/>
        </div> 
        <a className="site__right-sidebar-toggle">
          <img src="img/arrow-icon.svg" />
        </a>
      </div>
    );
  }
});

module.exports = App;