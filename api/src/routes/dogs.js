const { Router } = require('express');
//const { Raza , Temperamento } = require('../models');
// var {Sequelize } = require('sequelize');
// const Raza  = require('../models/Raza');
// const Temperamento = require('../models/Temperamento')
const { conn } = require('../db.js');
const { Raza, Temperamento } = require('../db');
const router = require('express').Router();
const fetch = require("node-fetch");


/* router.get('/dogs', function(req, res){
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(resp=>(resp.json()) )
        .then(data => {return data})
        .catch((error)=> {res.json({ error })});

        console.log(data);

})
 */
router.get('/dogs', async function(req, res){
    const errorNombre= "The one you're looking for doesn't exist"
    try {
        let pedido ;
        let name = req.query.name;
        if(name) {
            pedido =  await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
            let answer = await pedido.json();
            if(answer.length >0) {
                res.send(answer);
                } else {
                        let dbDogs = await Raza.findAll({
                            where: {
                                nombre: name
                            },
                        include: Temperamento
                        })
                        if(dbDogs.length === 0) console.log(errorNombre)
                        res.json(dbDogs)
                    } 
        } else {    
                pedido =  await fetch('https://api.thedogapi.com/v1/breeds');                
                let apiDogs = await pedido.json();                
                let dbDogs = await Raza.findAll();
                todosLosPerros=apiDogs.concat(dbDogs);
                res.json(todosLosPerros)   
            }
    }
    catch(error){
        console.log(error);
    }
})

router.get('/dogs/:idRaza', async function(req, res){
    let idRaza = req.params.idRaza;
    try {
        let pedido ;
        let dogToDetail ={};
        pedido =  await fetch('https://api.thedogapi.com/v1/breeds');
        let perros = await pedido.json();
        let dog = perros.find((perro)=>(perro.id == idRaza))
        if(dog){
        dogToDetail = {
            nombre : dog.name,
            temperamento : dog.temperament,
            altura: dog.height.metric,
            peso: dog.weight.metric,
            img: dog.image,
            vida: dog.life_span,
            imageId: dog.image.id
        }} else {
            dogToDetail = await Raza.findAll({
            where: {
                id: idRaza
            },
        include: Temperamento
        })}
        console.log('Perro encontrado');
        res.send(dogToDetail)
    }
    catch(error){
        console.log(error);
    }
})

router.post('/dog',async function(req,res){
    console.log(req.body);
    let {name, hmin, hmax, wmin, wmax, life_span, temps, newTemps,image,maxId} = req.body;
    let altura = hmin + ' - ' + hmax;
    //console.log(altura);
    let id = maxId+1;

    let peso = wmin+ ' - ' + wmax;
    let tempsId = [];
    if(temps) tempsId = temps;
    if(newTemps){
        let tempers = newTemps.map((element)=> Temperamento.create({nombre: element}))
        await Promise.all(tempers).then((valores)=>
            valores.map((item)=>{tempsId.push(item.id)})
        )
        // Promise.all(tempers).then(console.log(tempsId))
        ;}
        console.log(tempsId)
    
        const newPerro = await Raza.create({
            id: id,
            name: name,
            height: altura,
            weight: peso,
            life_span: life_span,
            imageURL: image
            
        })
    
    await newPerro.setTemperamentos(tempsId)
    const dogCreated = await Raza.findOne({
        where: {
            id: newPerro.id
        },
        include: Temperamento
    })
    res.json(dogCreated)
})

module.exports = router;

/* 
let firstRandomEight = Math.floor(Math.random()*todosLosPerros.length);
let eightDogs = todosLosPerros.slice(firstRandomEight,firstRandomEight+8);

console.log(eightDogs);  */