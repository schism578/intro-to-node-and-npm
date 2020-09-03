const chalk = require('chalk-animation');

const validMethods = [ `glitch`, `karaoke`, `neon`, `pulse`, `radar`, `rainbow` ];
  // grab third position in args array
 const scriptArg = process.argv[2]
  // check the arg is valid and use it or default to 'rainbow'
 const method = validMethods.includes(scriptArg) ? scriptArg : 'rainbow';

  function animateString(string) {
    // use the method that was selected
   const animation = chalk[method](string)

  setTimeout(() => animation.stop(), 1300)
}

module.exports = { animateString }; // named export