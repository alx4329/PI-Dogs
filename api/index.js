//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { Raza, Temperamento } = require('./src/db');
const { conn } = require('./src/db.js');
const nunjucks = require('nunjucks');
const express = require('express');
const app = express();
const fetch = require("node-fetch");
// Syncing all the models at once.


app.engine('html', nunjucks.render);

 async function loadTemps(){
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
    // const newTemps = Temperamento.create({nombre: temps[0]});
    let newTemps = temps.map((temp)=> Temperamento.create({nombre: temp}))
    Promise.all(newTemps)
      .then(console.log('temperamentos cargados'))
}

conn.sync({ force: true }).then(() => {
  loadTemps();
  server.listen(3001, () => {
    console.log('listening at 3001'); // eslint-disable-line no-console
  });
});
module.exports.loadTemps = loadTemps;
