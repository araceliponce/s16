const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: false
  },
  email: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('User', userSchema)
//schema distinto paraun usuario, unproducto, etc
//cuando exportas un modulo model/modelo colocas el nombre que va atener todo el que use este schema y su nombre real (userSchema en este caso)