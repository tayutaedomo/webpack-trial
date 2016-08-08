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

## SETUP THE COMPILATION
```
$ ./node_modules/.bin/webpack public/javascripts/getting_started/entry.js public/javascripts/getting_started/bundle.js
Hash: 2b9d7d14ea1bfa7f4bce
Version: webpack 1.13.1
Time: 42ms
    Asset     Size  Chunks             Chunk Names
bundle.js  1.42 kB       0  [emitted]  main
   [0] ./public/javascripts/getting_started/entry.js 30 bytes {0} [built]
```

## SECOND FILE
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

## THE FIRST LOADER
```
$ ./node_modules/.bin/webpack public/javascripts/getting_started/entry.js public/javascripts/getting_started/bundle.js
Hash: 1d99b3f71d9fdb4da69b
Version: webpack 1.13.1
Time: 693ms
    Asset     Size  Chunks             Chunk Names
bundle.js  11.8 kB       0  [emitted]  main
   [0] ./public/javascripts/getting_started/entry.js 140 bytes {0} [built]
   [5] ./public/javascripts/getting_started/content.js 47 bytes {0} [built]
    + 4 hidden modules
```

## BINDING LOADERS
```
$ ./node_modules/.bin/webpack public/javascripts/getting_started/entry.js public/javascripts/getting_started/bundle.js --module-bind 'css=style!css'
Hash: ec88ecd517045d49900f
Version: webpack 1.13.1
Time: 641ms
    Asset     Size  Chunks             Chunk Names
bundle.js  11.9 kB       0  [emitted]  main
   [0] ./public/javascripts/getting_started/entry.js 198 bytes {0} [built]
   [5] ./public/javascripts/getting_started/content.js 47 bytes {0} [built]
    + 4 hidden modules
```

## A CONFIG FILE
```
$ ./node_modules/.bin/webpack
Hash: a961554edb803c33642d
Version: webpack 1.13.1
Time: 689ms
                                         Asset     Size  Chunks             Chunk Names
./public/javascripts/getting_started/bundle.js  11.9 kB       0  [emitted]  main
   [0] ./public/javascripts/getting_started/entry.js 198 bytes {0} [built]
   [5] ./public/javascripts/getting_started/content.js 47 bytes {0} [built]
    + 4 hidden modules
```

## A PRETTIER OUTPUT
```
$ ./node_modules/.bin/webpack --progresHash: a961554edb803c33642d                
Version: webpack 1.13.1
Time: 673ms
                                         Asset     Size  Chunks             Chunk Names
./public/javascripts/getting_started/bundle.js  11.9 kB       0  [emitted]  main
   [0] ./public/javascripts/getting_started/entry.js 198 bytes {0} [built]
   [5] ./public/javascripts/getting_started/content.js 47 bytes {0} [built]
    + 4 hidden modules
```

