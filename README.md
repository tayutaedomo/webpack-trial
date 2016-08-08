# webpack-trial
Try webpack.


# Setup on your local
```
$ git clone git@github.com:tayutaedomo/webpack-trial.git
$ cd webpack-trial
$ npm install
```


# Getting Started
See: http://webpack.github.io/docs/tutorials/getting-started/

```
$ ./node_modules/.bin/webpack public/javascripts/getting_started/entry.js public/javascripts/getting_started/bundle.js
Hash: 2b9d7d14ea1bfa7f4bce
Version: webpack 1.13.1
Time: 42ms
    Asset     Size  Chunks             Chunk Names
bundle.js  1.42 kB       0  [emitted]  main
   [0] ./public/javascripts/getting_started/entry.js 30 bytes {0} [built]
```

```
$ ./node_modules/.bin/webpack public/javascripts/getting_started/entry.js public/javascripts/getting_started/bundle.js
Hash: f79b30975992e3fb3d91
Version: webpack 1.13.1
Time: 54ms
    Asset     Size  Chunks             Chunk Names
bundle.js  1.58 kB       0  [emitted]  main
   [0] ./public/javascripts/getting_started/entry.js 73 bytes {0} [built]
   [1] ./public/javascripts/getting_started/content.js 47 bytes {0} [built]
```

