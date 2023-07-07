const { Router } = require('express');
const router = Router();
const products = require('../products.json');
const _ = require('underscore');
const e = require('express');

router.get('/',(req, res) => {
    res.send(products) 
});

router.post('/',(req, res) => {
    const {id, nombre, marca, descripción, precio, disponible} = req.body;
    if (id || nombre || marca || descripción || precio || disponible) {
        const id = products.length +1 ;
        const newProduct = {...req.body,id};
        products.push(newProduct);
        res.json(products);        
    } else {
        res.send('error');
    }
});

router.delete('/:id',(req,res) =>{
    const {id} = req.params;
    _.each(products, (product,i) =>{
        if (product.id == id) {
            products.splice(i,1);
        } 
       });
       res.send(products);
});

router.put('/:id', (req,res) =>{
    const {id} = req.params;
    const { nombre, marca, descripción, precio, disponible } = req.body;
    if (nombre && marca && descripción && precio && disponible) {
        _.each(products, (product,i) =>{
            if (product.id == id) {
                product.nombre = nombre;
                product.marca = marca;
                product.descripción = descripción;
                product.precio = precio;
                product.disponible = disponible;
            } 
        });
        res.json(products);
    } else {
        res.status(500).json({error: 'error'});
    }
    
})


module.exports = router;