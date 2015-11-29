const newtaburl = require('resource:///modules/NewTabURL.jsm').NewTabURL;
exports.main = function (options, callbacks) {
  newtaburl.override("https://galliumos.org/home/");
};
exports.onUnload = function (reason) {
  newtaburl.reset();
};
