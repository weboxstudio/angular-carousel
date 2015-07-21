var packageName = 'weboxstudio:angular-carousel';
var where = 'client';
var version = '0.3.13';
var summary = 'Angular Carousel - Mobile friendly touch carousel for AngularJS';
var gitLink = 'https://github.com/weboxstudio/angular-carousel.git';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: summary,
  git: gitLink,
  documentation: documentationFile
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']); // Meteor versions

  api.use('urigo:angular@0.9.3', where);
  api.use('angular:angular-touch@1.4.2', where);

  api.addFiles('dist/angular-carousel.js', where);
  api.addFiles('dist/angular-carousel.css', where);
});