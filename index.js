const express = require('express');
const bodyparser = require('body-parser');
const mysql = require("mysql2");
const cors = require('cors');
const server = express();
server.use((cors()));
server.use(bodyparser.json());
//database connection

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rescuemanagement",
});

db.connect(function (error) {
    if(error){
        console.log("Error Connectiong to DB");
    }
    else{
        console.log("Successfully Connected to DB");
    }
});

//Establish the port

server.listen(8080, function check(error){
    if(error){
        console.log("Error...!!!");
    }
    else{
        console.log("Started...!!! 8080");
    }
});
    server.post("/api/rescue_details/add", (req,res) => {
        let tagNumber= req.body.tagnumber;
        let dogName= req.body.dogname;
        let colourName= req.body.colourname;
        let intialSymptom= req.body.intialsymptom;
        let takenTo= req.body.takento;
        let intialActionTaken= req.body.intialactiontaken;
        let locationDetails= req.body.locationdetails;

        let qr = `insert into rescue_details(tagnumber,dogname,colourname,intialsymptom,takento,intialactiontaken,locationdetails) value('${tagNumber}','${dogName}','${colourName}','${intialSymptom}','${takenTo}','${intialActionTaken}','${locationDetails}')`;

        db.query(qr, (err,results) => {
            if(err){console.log(err)}
            res.send({
                message: "Rescue added successfully",
                data:results
            });
        });
    });
//get All data
    server.get('/api/rescue_details', (req, res)=> {
        let qrr = 'SELECT * FROM rescue_details';
        db.query(qrr, (err,results)=>{
            if(err){
                console.log(err, 'errs');
            }
            if(results.length>0){
                res.send({
                    message: 'All rescue Details',
                    data: results
                });
            }
        });
    });

//Search the Records

    server.get("/api/rescue_details/:tagnumber", (req, res) => {
        var tagnumber = req.params.tagnumber;
        var sql = "SELECT * FROM rescue_details WHERE tagnumber=" + tagnumber;
        db.query(sql, function (error, result) {
        if (error) {
            console.log("Error Connecting to DB");
        } else {
            res.send({ status: true, data: result });
        }
        });
    });

//Update the Records
    server.put("/api/rescue_details/update/:tagnumber", (req, res) => {
        //console.log(req.body, "update data");
        let tagnumber= req.params.tagnumber;
        let dogname= req.body.dogname;
        let colourname= req.body.colourname;
        let intialsymptom= req.body.intialsymptom;
        let takento= req.body.takento;
        let intialactiontaken= req.body.intialactiontaken;
        let locationdetails= req.body.locationdetails;

        let qr = `update rescue_details set dogname = '${dogname}', colourname = '${colourname}', intialsymptom = '${intialsymptom}', takento = '${takento}', intialactiontaken = '${intialactiontaken}', locationdetails =' ${locationdetails}'
        where tagnumber = ${tagnumber}`;
        db.query(qr,(err,results)=> {
            if(err){
                console.log(err);
            }
            res.send({
                message: "Updated",
                data: results
            })
        })
    });


//Delete the Records
    server.delete("/api/rescue_details/add/:tagnumber", (req, res) => {
        let tagnumber = req.params.tagnumber;
        let qr = `delete from rescue_details where tagnumber = '${tagnumber}' `;
        db.query(qr, (err,result)=>{
            if(err){
                console.log(err);
            }
            res.send({
                message: "Rescue Deleted"
            })
        })
    });
