module.exports = function(shipit) {
  require('shipit-deploy')(shipit);

  var pkg = require('./package.json');

  shipit.initConfig({
    default: {
      workspace: '/tmp/volontario-web-workspace',
      deployTo: '/var/www/volontario-web',
      repositoryUrl: pkg.repository.url,
      ignores: ['.git']
    },

    production: {
      servers: ['oriba.xyz']
    }
  });

  shipit.on('deployed', function() {
    shipit.remoteCopy('node_modules', '/var/www/volontario-web/current/').then(function() {
      shipit.remote('cd /var/www/volontario-web/current && npm install && bower install && grunt build');
    });
  });
};
