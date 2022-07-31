import {join} from 'path'
import mysql from 'mysql';
import { query } from 'express';
// import {conn } from './mydb.js';
// var mysql = require("mysql");

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mern6",
});

conn.connect((err) => {
    if (err) {
      console.log("Error occurred", err);
    } else {
      console.log("Connected to MySQL Server");
    }
});

const homeController = (request, response)=>{
    response.render(join(process.cwd(), 'views', 'index'));
}


const addController = (request, response)=>{
    response.render(join(process.cwd(), 'views', 'add'));
}

const addStudentController = (request,response)=>{
    const formData = request.query;
    var sql = "INSERT INTO queries (username, phone, email,gender) VALUES ('"+formData.name+"','"+formData.phone+"','"+formData.email+"','"+formData.male+"')";
    // console.log('sql',sql);
    conn.query(sql, function (err, result) {
      
     console.log('result',result);
    });
   
}
    const searchStudentController = (request,response)=>{
        //fetch data from the form 

     const {phone} = request.query;
        
     let query = "select * from queries where phone=?";
     conn.query(query,[phone],(err,results) =>{
            console.log('result',results); 
            request.flash("msg", "Saved successfully");
            res.render("add", { msg: request.flash(msg)});
    })

}
    const updateStudentController = (request,response)=>{
        //fetch data from the form 

        const { phone } = req.query;

        let qry = "select * from test where phoneno=?";
        mysql.query(qry, [phone], (err, results) => {
            if (err) throw err
            else {
                if (results.length > 0) {
                    res.render("update", { mesg1: true, mesg2: false, data: results })
                } else {
    
                    res.render("update", { mesg1: false, mesg2: true })
    
                }
    
            }
        });
    }
const searchController = (request, response)=>{
    response.render(join(process.cwd(), 'views', 'search'));
}

const updateController = (request, response)=>{
    response.render(join(process.cwd(), 'views', 'update'));
}


const deleteController = (request, response)=>{
    response.render(join(process.cwd(), 'views', 'delete'));
}

export{homeController,addController, searchController,updateController, deleteController,addStudentController,searchStudentController,updateStudentController}