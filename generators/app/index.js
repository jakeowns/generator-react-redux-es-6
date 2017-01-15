'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the excellent ' + chalk.red('generator-react-redux-es-6') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'What is your app name?',
      default: 'react-redux-app'
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    // copy dot files
    this.fs.copy(
      this.templatePath('.*'),
      this.destinationRoot()
    );
    this.fs.copyTpl(
      this.templatePath('./**/*'),
      this.destinationRoot(),
      this.props
    );
  },

  install: function () {
    this.installDependencies();
  }
});
