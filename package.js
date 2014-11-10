Package.describe({
  summary: "Use Bower packages in your Meteor app(bow version 1.3.12)",
  name: "bozhao:bower",
  git: "https://github.com/yubozhao/meteor-bower.git",
  version: "0.1.12"
});

Package._transitional_registerBuildPlugin({
  name: "bower",
  use: [
    "meteor",
    "underscore",
  ],
  sources: [
    "plugin/bower.js",
    "plugin/handler.js",
  ],
  npmDependencies: {
    "bower": "1.3.12",
    "glob": "3.2.9"
  }
});

// XXX Tests?
