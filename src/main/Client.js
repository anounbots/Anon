const { Client } = require('discord.js');

/**
 * Set these options to choose on how the framework works
 * @typedef {Object} Options
 * @prop {boolean} [selfbot=false] Say if its a selfbot or not
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
          this.selfbot = !!options.selfbot
      }
 }