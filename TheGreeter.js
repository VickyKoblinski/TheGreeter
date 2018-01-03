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
    },

    greet: function (isMorning) {
      let msg = this.greeting();

      if (isMorning) {
        msg = this.morningGreeting();
      }

      //Log message
      if (console) {
        console.log(msg);
      }

      //Makes the method chainable
      return this;
    },

    log: function () {
      if (console) {
        console.log(`${logMessages[this.lang]}: ${this.fullName()}`)
      }

      return this;
    },

    setLang: function (lang = 'en') {
      this.lang = lang;
      this.validate();
      return this;
    },

    $Greet: function (element, morning) {
      if (!$) {
        throw 'jQuery not found';
      }
      if (!element) {
        throw 'Missing jQuery selector';
      }

      let msg = this.greeting();

      if (morning) {
        msg = this.morningGreeting();
      }

      $(element).html(msg);

      return this;

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