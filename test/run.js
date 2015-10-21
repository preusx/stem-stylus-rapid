var testRunnerConfig = {
  describe: 'Stem stylus color scheme',
  stylus: {
    use: function plugin(stylus) {
      stylus.include(__dirname + '../');
    },
    import: [
      '../bower_components/stem-stylus-utils',
      '../bower_components/stem-stylus-bem',
      '../bower_components/stem-stylus-grid',
      '../bower_components/stem-stylus-typo',
      '../bower_components/stem-stylus-color-scheme',
      '../index'
      ]
  }
}

require('stylus-test-runner')(testRunnerConfig)