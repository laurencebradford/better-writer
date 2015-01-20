Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/language', function () {
	this.render('language');
});

Router.route('/format', function () {
	this.render('format');
});

Router.route('/tools', function () {
	this.render('tools');
});

Router.route('/resources', function () {
	this.render('resources');
});