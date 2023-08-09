const express = require('express')
require('./db')
const userRouter = require('./routes/user')

const app = express()
app.use(express.json())
app.use('/api/user', userRouter)

app.post(
  '/signin',
  (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password)
      return res.json({ error: 'email/ password missing!' })
    next()
  },
  (req, res) => {
    res.send('<h1>successfully signed-in</h1>')
  }
)

app.listen(8002, () => {
  console.log('The app is running on the port 8002')
})
