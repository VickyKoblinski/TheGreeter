(function (global, $) {

  /**
   * Creates a new TheGreeter object
   * @constructor
   * @param {string} fname First name
   * @param {string} lname Last name
   * @param {string} [lang="en"] Language
   */
  const TheGreeter = function (fname, lname, lang) {
    return new TheGreeter.init(fname, lname, lang);
  }

  // Used for validation
  const supportedLangs = ['en', 'jp'];

  // Data store for all greetings
  const greetings = {
    defaultGreetings: {
      en: 'Hello',
      jp: 'Konnichiwa'
    },
    morningGreetings: {
      en: 'Good morning',
      jp: 'Ohayō'
    },
    logMessages: {
      en: 'Logged in',
      jp: 'Roguin shita'
    }
  }

  // Public methods
  TheGreeter.prototype = {

    /**
     * Person's Full Name
     * @return {string}
     */
    fullName: function () {
      return `${this.fname} ${this.lname}`;
    },

    /**
     * Checks if language is supported.
     * Throws error if language is unsupported.
     */
    validate: function () {
      if (supportedLangs.indexOf(this.lang) === -1) {
        throw "Invalid language";
      }
    },

    /**
     * Basic greeting
     * @return {string}
     */
    greeting: function () {
      return `${greetings.defaultGreetings[this.lang]} ${this.fname}!`;
    },

    /**
     * Morning greeting
     * @return {string}
     */
    morningGreeting: function () {
      return `${greetings.morningGreetings[this.lang]} ${this.fname}.`;
    },

    /**
     * Gets approprate greeting
     * @param {bool} isMorning sets if should be morning greeting
     * @return {this} chainable
     */
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

    /**
     * Prints name and language to console
     * @return {this} chainable
     */
    log: function () {
      if (console) {
        console.log(`${greetings.logMessages[this.lang]}: ${this.fullName()}`)
      }

      return this;
    },

    /**
     * Sets language on the fly
     * @param {string} [lang="en"]
     * @returns {this} chainable
     */
    setLang: function (lang = 'en') {
      this.lang = lang;
      this.validate();
      return this;
    },

    /**
     * Prints greeting to HTML element
     * @param {string} element jQuery selector
     * @param {bool} [morning=false] for displaying morning greeting 
     * @return {this} chainable
     */
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

  //Called by constuctor to create object
  TheGreeter.init = function (fname, lname, lang) {
    this.fname = fname || "Unknown";
    this.lname = lname || "Unknown";
    this.lang = lang || "en";
  }

  //Points init to TheGreeter's prototype
  TheGreeter.init.prototype = TheGreeter.prototype;

  //Exposes TheGreeter/G to the global context
  global.TheGreeter = global.G = TheGreeter;

})(window, jQuery);