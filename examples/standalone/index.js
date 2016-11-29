/*

   JSX Transpiled with https://jsx-live.now.sh/

  <div>
    <h1>Hola!</h1>
    <h2>Hoy es {new Date().toLocaleTimeString()}.</h2>
  </div>

 */

"use strict";

var element = React.createElement(
 "div",
 null,
 React.createElement(
   "h1",
   null,
   "Hola!"
 ),
 React.createElement(
   "h2",
   null,
   "Hoy es ",
   new Date().toLocaleTimeString(),
   "."
 )
);

console.log('Server Rendered String: ', ReactDOMServer.renderToString(element))

ReactDOM.render(
  element,
  document.getElementById('root')
);
