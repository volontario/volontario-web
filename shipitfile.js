module.exports = function(shipit) {
  require('shipit-deploy')(shipit);

  var pkg = require('./package.json');

  shipit.initConfig({
    default: {
      workspace: '/tmp/volontario-web-workspace',
      deployTo: '/var/www/volontario-web',
      repositoryUrl: pkg.repository.url,
      ignores: ['.git', 'node_modules']
    },

    production: {
      servers: ['oriba.xyz']
    }
  });
};
