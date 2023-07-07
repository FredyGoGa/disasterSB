const { Router } = require('express');
const router = Router();



router.get('/skaters', (req, res) =>{
    res.send('skaters de la sabana');
});

router.get('/products', (req, res) =>{
 
    res.send('productos');
});
 

module.exports = router;