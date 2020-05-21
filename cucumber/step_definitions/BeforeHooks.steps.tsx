import { Before } from "cucumber";
var jsdom = require("jsdom");
const { JSDOM } = jsdom;

Before(() => {
  const DEFAULT_HTML = '<html><body><div id="container"></div></body></html>';

  var globalbrowser = global as any;
  globalbrowser.window = new JSDOM(DEFAULT_HTML, {
    /*JSDOM Setup*/
  }).window;
  globalbrowser.document = window.document;
  globalbrowser.navigator = {
    userAgent: "node.js",
  };
});
