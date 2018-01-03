(function (global, $) {

  const TheGreeter = function (fname, lname, lang) {
    return new TheGreeter.init(fname, lname, lang);
  }

  const supportedLangs = ['en', 'jp'];

  const defaultGreetings = {
    en: 'Hello',
    jp: 'Konnichiwa'
  };

  const morningGreetings = {
    en: 'Good morning',
    jp: 'Ohayō'
  };

  const logMessages = {
    en: 'Logged in',
    jp: 'Roguin shita'
  };

  TheGreeter.prototype = {

    fullName: function () {
      return `${this.fname} ${this.lname}`;
    },

    validate: function () {
      if (supportedLangs.indexOf(this.lang) === -1) {
        throw "Invalid language";
      }
    },

    greeting: function () {
      return `${defaultGreetings[this.lang]} ${this.fname}!`;
    },

    morningGreeting: function () {
      return `${morningGreetings[this.lang]} ${this.fname}.`;
    }

  };

  TheGreeter.init = function (fname, lname, lang) {
    this.fname = fname || "Unknown";
    this.lname = lname || "Unknown";
    this.lang = lang || "en";
  }

  TheGreeter.init.prototype = TheGreeter.prototype;

  global.TheGreeter = global.G = TheGreeter;

})(window, jQuery);