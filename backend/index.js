const express = require("express");
const cors = require("cors");
const TokenGenerator = require('uuid-token-generator');
const app = express()
const port = 3000;
const tokgen2 = new TokenGenerator(256, TokenGenerator.BASE62);
app.use(cors());
app.use(express.urlencoded({ extended: false }))
var mysql = require('mysql');
//connessione al database
var con = mysql.createConnection({
    host: "sql11.freemysqlhosting.net",
    port: 3306,
    user: "sql11506293",
    password: "1siKhnMzKI",
    database: "sql11506293"

});

// login

app.post('/api/login/', function (request, response) {
    const user = request.body.email;
    const pass = request.body.password;
    console.log( request.body.email)
    if (user && pass) {
        con.query('SELECT * FROM user WHERE nickname = ? AND password = ?', [user, pass], function (error, results, fields) {
            ciao = JSON.stringify(results);
            if (ciao == "[]") {
                response.json("error");
            } else {
                token = tokgen2.generate();
                createlogin(results, token);
                response.json(token);
            }

        });

    }
});

function createlogin(results, token) {

    con.query("INSERT INTO `login` (`id`, `nickname`, `token`, `admin`) VALUES (NULL, '" + results[0].nickname + "', '" +token+ "', '" + results[0].admin +"')", function (err, rows) {
        if (err)
            throw err;

    });



}

app.get("/api/verify/:token", function (request, response) {

con.query('SELECT * FROM login WHERE token = ? ', [request.params.token], function (error, results, fields) {
    response.json(results);
       
})});




//chiamate post
app.get("/api/prodotti", function (request, response) {
    con.query('SELECT * FROM prodotti ', function (err, rows) {
        if (err)
            throw err;
        console.log('ho inviato la lista dei prodotti');
        response.json(rows);
    });
});








app.listen(port, () => console.log('Server attivo sulla porta 3000'));