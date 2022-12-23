// npm init --yes
// npm i express   (i | install --save?)
//escribes
// npm i nodemon -D

// package.json (lin 6), agregamos un comando a scripts :   "scripts": {... ,   "start": "nodemon src/index.js"  },
// ya podemos usar npm run start (is alwayswatching)

// clear
//npm i mongoose
//obtienes lallave 
//no la copias en script.js, instalas otro modulo   :
// npm i dotenv (para variables de ambiente customizadas)


//crear archivo .env y copiar alli la clave
//acabar de escribir la connection con mongoose
//npm run start :>[MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.  (Use`node --trace-deprecation ...` to show where the warning was created)
//21:30


//en src crear routes/ y alli: user.js
//una extension REST client o usar postman por ejm
//escribir aqui app.use('/api')

// ### para separar las distintas peticiones (post,get,update,delete) en un archivo http




const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
//asi, sin .js
const userRoutes = require("./routes/user"); //no lo habia escrito, necesariopara app.use()

const app = express();
// const port = 3030
const port = process.env.PORT || 9000; //  si estuvieramos usando un hosting usaria ese port, si no usa el otro


// middleware
app.use(express.json()) //express.json antes de la ruta
//anteponer /api a todas las rutas|endpoints
app.use('/api', userRoutes);


app.get('/', (request, response) => {
  // response.statusCode()
  response.send('welcome to here')
});

//mongodb connetion 
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('conectado a mongodb atlas'))
  .catch((error) => console.error(error))




app.listen(port, () => {
  console.log(`el servido está en http://localhost:${port}`)
})