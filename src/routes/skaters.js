const { Router } = require('express');
const router = Router();
const skaters = require('../sample.json');
const _ = require('underscore');
const e = require('express');

router.get('/', (req, res) =>{
    res.send(skaters);
});

router.post('/',(req, res) =>{
    const {id, nombre, apellidos, especialidas, edad, departamento } = req.body;
    if (id || nombre || apellidos || especialidas || edad || departamento) {
        const id = skaters.length +1 ;
        const newSkater = {...req.body,id};
        skaters.push(newSkater);
        res.json(skaters);        
    }else{
        res.send('error');
    }
});

router.delete('/:id',(req,res) =>{
    const {id} = req.params;
    _.each(skaters, (skater,i) => {
        if (skater.id == id) {
            skaters.splice(i,1);
        }
    });
    res.send(skaters);
});

router.put('/:id', (req,res) => {
    const {id} = req.params;
    const { nombre, apellidos, especialidas, edad, departamento } = req.body;
    if (nombre && apellidos && especialidas && edad && departamento) {
        _.each(skaters, (skater, i) =>{
            if (skater.id == id ) {
                skater.nombre = nombre;
                skater.apellidos = apellidos;
                skater.especialidas = especialidas;
                skater.edad = edad;
                skater.departamento = departamento;
            }
        });
        res.json(skaters);        
    }else{
        res.status(500).json({error: 'error.'});
    }


})

module.exports = router;