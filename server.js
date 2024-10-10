// Listen to the Server
const express = require ("express")
const app = express()
const mysql = require('mysql2')
const dotenv = require('dotenv')

// Configure environment Variable
dotenv.config();


// create a connection object to database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


//test the connection with database
db.connect((err) => {
    // if the connection isnt successful
    if(err) {
       return console.log('Error connecting to the database:', err)
    }

    // if Connection is successful 
    console.log('Successfully connected to Mysql: ', db.threadId)
})


// ASSIGNMENT 1. Retrieve all patients
// Create a ```GET``` endpoint that retrieves all patients and displays
//Retrieve all patients from the databse
// app.get('/patients', (req, res) => {
//     const getPatients= "SELECT patient_id, first_name, last_name, date_of_birth  FROM patients" 
//     db.query(getPatients, (err, data) => {
//         // if there is an error
//         if(err){
//             return res.status(400).send("failed to get patients")
//         } 
//        // if there is no err
//        res.status(200).send(data)
//     })
// })



// ASSIGNMENT ## 2. Retrieve all providers
// Create a ```GET``` endpoint that displays all providers 

app.get('', (req, res) => {
    const getPatients= "SELECT  first_name, last_name, provider_specialty  FROM providers" 
    db.query(getPatients, (err, data) => {
        // if there is an error
        if(err){
            return res.status(400).send("failed to get providers")
        } 
       // if there is no err
       res.status(200).send(data)
    })
})


// ASIGNMENT ## 3. Filter patients by First Name
// Create a ```GET``` endpoint that retrieves all patients by their first name
app.get('', (req, res) => {
    const getPatients= "SELECT  first_name FROM patients" 
    db.query(getPatients, (err, data) => {
        // if there is an error
        if(err){
            return res.status(400).send("failed to get patients")
        } 
       // if there is no err
       res.status(200).send(data)
    })
})

//start server and  listen to the server
app.listen(3300, () => {
    console.log('Server is readily connected on port 3300')
})



// ASSINMENT ## 4. Retrieve all providers by their specialty
// Create a ```GET``` endpoint that retrieves all providers by their specialty
app.get('', (req, res) => {
    const getPatients= "SELECT  provider_speialty FROM providers" 
    db.query(getPatients, (err, data) => {
        // if there is an error
        if(err){
            return res.status(400).send("failed to get provider_speialty")
        } 
       // if there is no err
       res.status(200).send(data)
    })
})

//start server and  listen to the server
app.listen(3300, () => {
    console.log('Server is readily connected on port 3300')
})