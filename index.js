import bodyParser from 'body-parser'
import express from 'express'
import session from 'express-session'
import sslify from 'express-sslify'
import http from 'http'
import path from 'path'
import api from './api-dockui/routes'
import config from './config'

const app = express()
const server = http.createServer(app)

const port = config.port
const host = config.host
const assets = config.environment === 'production' ? 'dist' : 'build'

if(config.https)
{
  app.use(sslify.HTTPS(
    {
      trustProtoHeader: config.httpsProto
    }
  ))
}

app.use(express.static(path.join(__dirname, assets)))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(session({
  key: 'docker-ui.sid',
  secret: config.secret,
  resave: false,
  saveUninitialized: true
}))

app.use('/', api)
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, `${assets}/index.html`))
})

server.listen(port, host, error => {
  if(error)
    throw error 
  console.info(`Listening to  ${host}:${port}`);
})

