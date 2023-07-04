const { Router } = require('express');
const router = Router();

router.get('./skaters', (req, res) =>{
    res.send('skaters de la sabana');
});

module.exports = router;