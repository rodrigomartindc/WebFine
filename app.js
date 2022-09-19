const express = require('express');
const app = express();
const path = require('path');
const particlesJS = require('particles.js')



app.use(express.static(path.resolve(__dirname, '')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

particlesJS.load('particles.js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});


app.listen(3003, () => {
    console.log('Servidor corriendo en http://localhost:3003')
})


