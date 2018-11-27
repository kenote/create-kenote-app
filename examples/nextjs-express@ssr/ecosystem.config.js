// PM2 Configure
module.exports = {
  apps : [
    {
      name: 'app-name',
      script: './.next/production-server/index.js',
      watch: true,
      max_memory_restart: '300M',
      interpreter_args: '--harmony',
      instances: 1,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}