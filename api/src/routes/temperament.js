const { Router } = require('express');
//const { Raza , Temperamento } = require('../models');
const { Raza, Temperamento } = require('../db');
const { conn } = require('../db.js');
const router = require('express').Router();
const fetch = require("node-fetch");
// var funcion = require('../../index');
// Importar todos los routers;

// Ejemplo: const authRouter = require('./auth.js');


router.get('/temperament', async function(req, res){
    // const amount = await Temperamento.count();
    // console.log(amount);
   
    
    var temperaments = await Temperamento.findAll();
        
    //console.log(temperaments.length);
    if(temperaments.length>0) res.status(200).json(temperaments);
    else
    {
        let pedido = await fetch('https://api.thedogapi.com/v1/breeds');
        let perros = await pedido.json();
        let temps =[];
        let rawTemps = perros.map((perro)=>{
            if(perro.temperament) {
                estePerro = perro.temperament.split(", ");
                for (i=0 ; i<estePerro.length ; i++) {
                    if(!temps.includes(estePerro[i])) temps.push(estePerro[i]);        
                }
            }
        })
    
    let newTemps = temps.map((temp)=> Temperamento.create({nombre: temp}))
    Promise.all(newTemps)
      .then(()=>{
            console.log('temperamentos cargados')
            res.status(200).json(temps)
        
        })
        // let carga = new Promise(()=>funcion.loadTemps())
            
        //         carga.then(Temperamento.findAll()
        //             .then((temps)=>res.status(200).json(temps))
        //         )    
            
        }
   
})


module.exports = router;
