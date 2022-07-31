import mysql from 'mysql';

var connectDB = () => {
    //connect with database server
    // var conn = mysql.createConnection({ host: "localhost", user: "root", password: "" });
    var conn = mysql.createConnection({ host: "localhost", user: "root", password: "", database: 'mern6' });
    conn.connect(function (err) {
        if (!err) {
            console.log("Connect database server successfully!");
        }
        else {
            throw err;
        }
    });


    //insert, update, select, delete
    conn.end(function (err) {
        if (err) {
            return console.log('error:' + err.message);
        }
        console.log('Close the database connection successfully');
    });
}
// export{ conn};
 connectDB();


  /*
  
    let sql = `INSERT INTO queries(username,email,phone,gender) VALUES(?)`;
    let values = ['kripesh','kripeshstha@gmail.com','9841001245','female'];
    var conn = mysql.createConnection({ host: "localhost", user: "root", password: "", database: "mern6" });
    conn.connect(function (err) {
        if (err) throw err;
        conn.query(sql, [values], function (err, result) {
            if (!err) {
                // console.log(result.affectedRows);
                console.log("Insert record successfully")
            }
            else {
                throw err;
            }
        });
    });

    */