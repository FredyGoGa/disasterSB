const { Router } = require('express');
const router = Router();



router.get('/', (req, res) =>{
    res.json({"Title":"datos de mi servidor local"});
});

router.get('/skaters', (req, res) =>{
 
    res.send('skaters');
});
 

module.exports = router;