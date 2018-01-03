(function (global, $) {

  const TheGreeter = function (fname, lname, lang) {
    return new TheGreeter.init(fname, lname, lang);
  }

  TheGreeter.prototype = {};

  TheGreeter.init = function (fname, lname, lang) {
    this.fname = fname || "Unknown";
    this.lname = lname || "Unknown";
    this.lang = lang || "en";
  }

  TheGreeter.init.prototype = TheGreeter.prototype;

  global.TheGreeter = global.G = TheGreeter;

})(window, jQuery);