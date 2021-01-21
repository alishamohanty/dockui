module.exports = {
  host: process.env.DOCKER_UI_HOST || 'localhost',
  port: process.env.DOCKER_UI_PORT || 9898,
  debugger: 9999,
  environment: process.env.NODE_ENV || 'development',
  user: 'user',
  password: 'password',
  https: process.env.DOCKER_UI_HTTPS || true,
  httpsProto: process.env.DOCKER_UI_HTTPS_PROTO || true,
  secret: process.env.DOCKER_UI_SECRET || 'secret'
}
