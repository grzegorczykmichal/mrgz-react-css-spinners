const express = require("express");
const { createElement } = require("react");
const { renderToString } = require("react-dom/server");
const Spinenrs = require("mrgz-react-css-spinners");

const app = express();

app.get("*", (req, res) => {
  const ripple = renderToString(createElement(Spinenrs.Ripple));
  const ring = renderToString(createElement(Spinenrs.Ring));
  const ellipsis = renderToString(createElement(Spinenrs.Ellipsis));
  const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Spinners Example</title>
      <style>html{background: tomato}</style>
    </head>
    <body>
      ${ripple}
      ${ring}
      ${ellipsis}
    </body>
  </html>
  `;
  res.send(html);
});

app.listen(3333, () => {
  console.log("Listening on localhost:3333");
});
