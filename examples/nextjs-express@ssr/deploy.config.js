// ------------------------------------
// Deploy Config File
// ------------------------------------

const ignore = [
  'node_modules/**/*',
  '.gitgnore',
  '.git/**',
  '.babelrc',
  'components/**/*',
  'layouts/**/*',
  'pages/**/*',
  'redux/**/*',
  'server/**/*',
  'static/**/*',
  'styles/**/*',
  'deploy.*',
  'project.ini',
  'next.config.*',
  'nodemon.json',
  'tsconfig.*',
  'yarn*',
  'LICENSE',
  'README.md'
]

module.exports = {
  ['local']: {
    name: '本地网络',
    sftp: {
      server: 'root:password@192.168.1.214:22',
      workspace: __dirname,
      deployTo: '/home/path/to',
      patterns: ['.**/**', '**'],
      ignore
    }
  }
}