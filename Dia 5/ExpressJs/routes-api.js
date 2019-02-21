const express = require('express')
const router =express.Router();

//si me pide ruta respondo json
router.get('/',(req,res)=> {
    res.json({
        miprimerApi: 'Works'
    })
})

module.exports=router;