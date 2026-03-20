const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const db = new sqlite3.Database('./portfolio.db');

db.all("SELECT * FROM experience", (err, exp) => {
    db.all("SELECT * FROM projects", (err, proj) => {
        db.all("SELECT * FROM stack", (err, stack) => {
            const data = { experience: exp, projects: proj, stack: stack };
            fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
            console.log("Data exported to data.json");
            db.close();
        });
    });
});
