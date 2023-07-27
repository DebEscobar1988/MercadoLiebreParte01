const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'))
});
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/register.html'))
});

/* al presionar enviar en el formulario de registro redirecciona al login */
app.post("/login", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'))
});
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'))
});

/* al presionar enviar en el formulario de login redirecciona al home */
app.post("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'))
});
app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
})