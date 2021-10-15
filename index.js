/*  **API REST**
Nodejs (Lenguaje)
Express ( servidor web)
Native Driver ( conexion)
MongoDB (BDnoSQL)



	 Instalacion :
npm i mongodb express morgan body-parser errorhandler
*/

// Importaciones

const express =require('express')
const logger = require('morgan')
const mongodb = require('mongodb')
const mongo= mongodb.MongoClient;
const bodyParser = require('body-parser')
const url = 'mongodb://localhost:27017/701nosql'

let app= express();

// Middelwares

app.use(logger('dev'))
app.use(bodyParser.json())

// Conexion a la base de datos

mongo.MongoClient.connect(url,(error, database)=>{
	//Collection
	const estudiantesCollection=con.db('701nosql').collection('estudiantes')

	//Error
	if(err) {
		console.log('no se pudo conectar a la URL ', url)
	}
	//Mostrar a todos los estudiantes
	app.get('/estudiantes',(req, res) => {
		estudiantesCollection.find({}).toArray((err, estudiantes) =>{
			if(err) {
				console.log(err)
				return res.sendStatus(500)
			}

			res.send(JSON.stringify(estudiantes))
		})
	})

	
	app.post('/estudiantes', (req,res) => {
		estudiantesCollection.insert(req.body,(err,respuesta) => {
			if(err) {
				console.log(err)
				return res.sendStatus(500)
			}
			res.send(JSON.stringify(respuesta))
		})
	})


	app.put('/estudiantes/:id',(req,res) => {
		db.collection('estudiantes').update(
			{_id:mongodb.ObjectID(req.params.id)},
			{$set:req.body},
			(error, results) => {
				if(error) 	console.log(error)
					res.send(results);
					
			})
	})


	app.listen(3000, ()=>{
		console.log('Express server corriendo en el puesto 3000: \x1b[32m%s\x1b[0m','online');
	})

})


/*
var express = require('express');

app = express();

app.listen(3000, ()=>{
	console.log('Express server corriendo en el puesto 3000: \x1b[32m%s\x1b[0m','online');

});

*/