const sqlite3 = require('sqlite3').verbose();
const filepath = "./user.db";
const crypto = require('crypto');
const fs = require("fs");


function createDbConnection() {
    if (fs.existsSync(filepath)) {
        return new sqlite3.Database(filepath);
    } else {
        const db = new sqlite3.Database(filepath, (error) => {
            if (error) {
                throw new Error('Could not open database ' + filepath);
                return console.error(error.message);
            }
        });
        db.serialize(function() {
            createTable(db);
            createFlag(db);
        });
        console.log("Connection with SQLite has been established");
        return db;
    }
}

function createTable(db) {
    db.serialize(function() {
        console.log('Table Users...');
        db.exec(`
    CREATE TABLE Users
    (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        username VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
    );
  `);
        console.log('Table Notes...');
        db.exec(`
    CREATE TABLE Notes
    (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        content TEXT,
        owner INTEGER NOT NULL,
        CONSTRAINT 'fk_note_has_owner' FOREIGN KEY(owner) REFERENCES Users(id)
    );
  `);
    });
}

function createFlag(db){
    db.serialize(function() {
        console.error('Creating flag...');
        const userStmt = db.prepare('INSERT INTO Users (username, password) VALUES (?, ?)');
        userStmt.run('admin', crypto.randomUUID());
        userStmt.finalize();

        id = null;
        db.get("SELECT * FROM Users WHERE username = 'admin'", (err, row) => {
            if (typeof row !== 'undefined') {
                id = row.id;
                const stmt = db.prepare("INSERT INTO Notes (content, owner) VALUES (?, ?)");
                stmt.run('Flag{' + crypto.randomUUID() + '}', id);
                stmt.finalize();
            } else {
                console.error(err);
                throw new Error('Id not found');
            }
        });
    });
}

module.exports = createDbConnection();
