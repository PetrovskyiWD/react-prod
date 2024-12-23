const fs = require('fs')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')
const path = require('path')

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800)
  })

  next()
})

server.post('/login', (req, res) => {
  const { username, password } = req.body
  const db = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json'), 'utf-8'))
  const { users = [] } = db

  const user = users.find(user => user.username === username && user.password === password)

  if (user) {
    return res.json(user)
  }

  return res.status(401).json({ message: 'Auth Error' })
})

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  next()
})

server.use(router);

server.listen(8000, () => {
  console.log('JSON Server is running on port 8000')
})
