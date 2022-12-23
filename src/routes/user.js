const express = require("express");
const router = express.Router();

const userSchema = require("../models/user")


//create user
router.post('/users', (req, res) => {
  // res.send("crear usuario")
  // posiblemente no estaba entendiendo el formato de req.body, po eso lo pasa a json colocando: app.use(express.json())  en el primer index.js
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }))
})
//puede ser otra ruta api/users   /



//get all users
router.get('/users', (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }))
})


//get one user by their id
router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }))
})


//update one user by their id and update them
router.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;

  userSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }))
})

//delete one user 
router.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }))
})

module.exports = router;