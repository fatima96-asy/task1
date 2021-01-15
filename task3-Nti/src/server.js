const path = require('path')
const hbs = require('hbs')
const express = require('express')
const getapidata=require('./utils/getapidata')

const { response } = require('express')
const { callbackify } = require('util')

const app = express()

const publicDirectory = path.join(__dirname, '../public')

const partialsDirectory = path.join(__dirname, '../frontend/partial')
const viewsDirectory = path.join(__dirname, '../frontend/views')

app.set('view engine', 'hbs')
app.set('views', viewsDirectory)
hbs.registerPartials(partialsDirectory)

app.use(express.static(publicDirectory))

app.get('', (req, res)=>{
    
    getapidata((error,data)=>{
        if(error) res.send(error)
        else res.send(data.body)
        
    })
   // res.render('index')
   
})


app.listen(3000)