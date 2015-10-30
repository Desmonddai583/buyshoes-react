const React = require("react");
let App = require("./components/App.js");

window.onload = () => {
  React.render(React.createElement(App, null), document.querySelector("#root"));
};