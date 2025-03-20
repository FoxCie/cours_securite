const express = require('express');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const session = require('express-session');
const db = require('./db');
const { spawn } = require('child_process');

var csrf = require('@dr.pogodin/csurf');
var csrfProtection = csrf();

const app = express();
const port = 3000;

const SECRET_KEY = crypto.randomUUID();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: true,
}));

function isAuthenticated (req, res, next) {
    if (req.session.user) {
        next();
    } else {
        return res.redirect('/login');
    }
}

app.get('/', (req, res) => {
    res.redirect('login');
})

app.get('/signup', csrfProtection, (req, res) => {
    res.render('signup', {csrfToken: req.csrfToken(), msg:""});
})

app.post('/signup', csrfProtection, (req, res) => {
    const { username, password } = req.body;
    const query = `INSERT INTO Users (username, password) VALUES (?,?)`;
    db.run(query, [username, password],
    function (error){
        if (error){
            console.log(error.message);
            return res.status(500).send('Registration failed');
        }
        res.render('signup',{csrfToken: req.csrfToken(),msg:'User registered successfully'});
    });
});


app.get('/login', csrfProtection,(req, res) => {
    res.render('login', {csrfToken: req.csrfToken(),msg:""});
})

app.post('/login', csrfProtection, async (req, res) => {
    const { username, password } = req.body;
    const query = `SELECT * FROM Users WHERE username = ? AND password = ?`;

    try {
        const rows = await new Promise((resolve, reject) => {
            db.all(query, [username, password], (error, rows) => {
                if (error) {
                    return reject(error);
                }
                resolve(rows);
            });
        });

        if (rows.length === 0) {
            return res.render('login',{csrfToken: req.csrfToken(),msg:'Wrong username/password for '+username});
        } else {
            req.session.user = username
            return res.redirect("/notes");
        }

    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Internal server error');
    }
});

app.get('/notes', isAuthenticated, csrfProtection, async (req, res) => {
    const query = `SELECT Notes.id, Notes.content as content from Notes JOIN Users On Notes.owner = Users.id WHERE Users.username = ?`;
    let notes = [];
    try {
        notes = await new Promise((resolve, reject) => {
            db.all(query, req.session.user, (error, rows) => {
                if (error) {
                    return reject(error);
                }
                resolve(rows);
            });
        });

    } catch (error) {
        console.error(error.message);
        return res.status(500).send('Internal server error');
    }

    return res.render('notes', {notes: notes, csrfToken: req.csrfToken(), user: req.session.user});
});

app.post('/notes', isAuthenticated, csrfProtection, async (req, res) => {
    const {note} = req.body;
    const queryUserId = `SELECT id FROM Users WHERE username = ?`;
    const query = `INSERT INTO Notes(owner, content) VALUES(?, '${note}')`;

    try {
        await new Promise((resolve, reject) => {
            db.get(queryUserId, req.session.user, (err, row) => {
                if (err) {
                    return reject(err);
                }
                db.run(query, row.id, (err) => {
                    if (err === null) {
                        resolve();
                    } else {
                        return reject(err);
                    }
                });
            });
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send('Internal server error');
    }

    return res.redirect('/notes');
});

app.get('/validate', isAuthenticated, csrfProtection, async (req, res) => {
    return res.render('validate', {csrfToken: req.csrfToken(), user: req.session.user});
});

app.post('/validate', isAuthenticated, csrfProtection, async (req, res) => {
    const {flag} = req.body;
    const queryUserId = `SELECT id FROM Users WHERE username = 'admin'`;
    const query = `SELECT Notes.content FROM Notes JOIN Users on Notes.owner = Users.id WHERE Users.username = 'admin'`;

    realFlag = null;
    try {
        realFlag = await new Promise((resolve, reject) => {
            db.get(query, (err, row) => {
                if (err) {
                    return reject(err);
                }
                resolve(row.content);
            });
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send('Internal server error');
    }

    msg = 'Le flag proposé n\'est pas le flag attendu.';
    type = 'danger';
    if (flag === realFlag) {
        msg = 'Bien joué, vous avez trouvé le flag !';
        type = 'success';
    }

    return res.render('validate', {csrfToken: req.csrfToken(), msg: msg, user: req.session.user, type: type});
});

app.listen(port,() => { 
    console.log(`App listening on port ${port}`)
});
