import express from 'express'

const routes = express.Router()

const users = ['Ginholuca', 'DeusLuca', 'BruniinX']

routes.get('/users', (req, res) => {
  return res.json({ ok: true })

  // res.json(users)
})

// app.get('/users/:id', (req, res) => {
//   const id = Number(req.params.id)

//   const user = users[id]

//   return res.json(user)
// })

// app.post('/users', (req, res) => {
//   const data = req.body

//   const user = {
//     name: data.name,
//     email: data.email
//   }

//   return res.json(user)
// })

export default routes
