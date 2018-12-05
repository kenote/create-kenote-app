// ------------------------------------
// Deploy Config File
// ------------------------------------
const path = require('path')
const fs = require('fs-extra')
const template = require('lodash/template')

const ignore = [
  'node_modules/**/*',
  '.gitgnore',
  '.git/**',
  '.babelrc',
  'assets/**/*',
  'components/**/*',
  'dist/**/*',
  'layouts/**/*',
  'pages/**/*',
  'plugins/**/*',
  'server/**/*',
  'store/**/*',
  'deploy.*',
  'project.*',
  'backpack.config.js',
  'commit.js',
  'ecosystem.config.js',
  'nginx.default.conf',
  'nuxt.config.*',
  'tsconfig.*',
  'yarn*',
  'LICENSE',
  'README.md'
]

module.exports = {
  ['local']: {
    name: '本地网络',
    sftp: {
      server: 'root:vertexgame12@192.168.1.214:22',
      workspace: __dirname,
      deployTo: '/path/to',
      patterns: ['.**/**', '**'],
      ignore
    },
    scripts: {
      install: [
        'cd /path/to',
        'make install'
      ],
      start: [
        'cd /path/to',
        echoToFile('ecosystem.config.js', 'ecosystem.config.js', {
          'app_name': 'app-name'
        }),
        echoToFile('project.default.ini', 'project.ini', {
          'HOST': '0.0.0.0',
          'PORT': 4000
        }),
        echoToFile('nginx.default.conf', 'nginx.conf', {
          'name': 'app-name',
          'port': 4000,
          'server_name': '0.0.0.0',
          'server_port': 7000,
          'root_dir': '/path/to'
        }),
        'ln -s -f /path/to/nginx.conf /etc/nginx/conf.d/app-name.conf',
        'service nginx restart',
        'yarn start'
      ],
      restart: [
        'cd /path/to',
        'yarn restart'
      ],
      delete: [
        'cd /path/to',
        'yarn delete',
        'rm -rf /etc/nginx/conf.d/app-name.conf',
        'service nginx restart'
      ]
    }
  }
}

function echoToFile (tplfile, target, options = {}) {
  let compiled = template(fs.readFileSync(path.resolve(tplfile), 'utf-8'))
  let content = compiled(options)
  return `echo "${content}" > ${target}`
}