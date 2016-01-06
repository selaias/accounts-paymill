Package.describe({
  name: 'selaias:accounts-paymill',
  version: '0.2.0',
  summary: 'Login service for Paymill accounts',
  git: 'https://github.com/selaias/accounts-paymill.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  
  api.versionsFrom('1.0.3.1');
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  
  api.use('selaias:oauth-paymill@0.2.0', ['client', 'server']);

  api.addFiles("paymill.js");

});

