const { Client } = require('discord.js');

/**
 * Set these options to choose on how the framework works
 * @typedef {Object} Options
 * @prop {boolean} [selfbot=false] Say if its a selfbot or not.
 * @prop {string|string[]} [ownersID=''] The ID of the owners.
 */

 class AnonClient extends Client {
     /**
      * Client of this framework.
      * @param {Options} [options={}]
      * @param {ClientOptions} [clientOptions]
      */
      constructor(options = {}, clientOptions){
          super(clientOptions || options);

          /**
           * Choose if this is a selfbot or not.
           * @type {boolean}
           */
          this.selfbot = !!options.selfbot;

          /**
           * ID(s) of the owner(s)
           * @type {string}
           */
          this.ownersID = options.ownersID;
      }
 }