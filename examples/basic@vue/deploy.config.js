// ------------------------------------
// Deploy Config File
// ------------------------------------
module.exports = {
  ['local']: {
    environment: {
      api: {
        domain: 'http://192.168.1.214:7086', 
        apiPath: '/api/v1'
      },
    },
    sftp: {
      server: 'root:password@192.168.1.214:22',
      workspace: __dirname + '/dist',
      deployTo: '/home/path/to',
      patterns: ['.**/**', '**'],
    }
  }
}