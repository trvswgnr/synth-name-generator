(() => {

  const path = require('path');
  const mkdir = require('mkdirp');
  const get_dir_name = path.dirname;
  const sass = require('node-sass');
  const pug = require('pug');
  const fs = require('fs');
  const babel = require("@babel/core");

  const settings = {
    pug: {
      input: './src/pug/index.pug',
      output: './index.html'
    },
    sass: {
      input: './src/sass/style.scss',
      output: './assets/css/style.css'
    },
    babel: {
      input: './src/babel/index.js',
      output: './assets/js/index.js'
    }
  };

  // use this instead of fs.writeFile(); to create directory if it doesnt exist
  const writeFile = (path, contents, cb) => {
    mkdir(get_dir_name(path), err => {
      if (err) { return cb(err); }
      fs.writeFile(path, contents, cb);
    });
  }

  /* compile sass -> css */
  sass.render({
      file: settings.sass.input,
      outFile: settings.sass.output,
    }, (err, result) => {
    writeFile(settings.sass.output, result.css, err => {
      if (err) { return console.log(err); }
      console.log(`compiled ${settings.sass.input} to ${settings.sass.output}`);
    });
  });

  /* compile pug -> html */
  pug.renderFile(settings.pug.input, {}, (err, result) => {
    writeFile(settings.pug.output, result, err => {
      if (err) { return console.log(err); }
      console.log(`compiled ${settings.pug.input} to ${settings.pug.output}`);
    });
  });

  /* compile babel es6 -> js */
  babel.transformFileAsync(settings.babel.input, {
      sourceMaps: "inline",
      minified: true
    }).then(result => {
    writeFile(settings.babel.output, result.code, err => {
      if (err) { return console.log(err); }
      console.log(`compiled ${settings.babel.input} to ${settings.babel.output}`);
    });
  });

})();
