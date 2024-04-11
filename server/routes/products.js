const router=require("express").Router();
const Product=require('../models/Product');

//Get Products by id
router.get('/:id', async(req, res) => {
    try{
        let product=await Product.findById(req.params.id);
        res.statusCode=200;
        res.json(product);
    }
    catch(err) {
        res.statusCode=500;
        res.json(err);
    }
})

//Get all Products
router.get('/', async (req, res) => {
    try {
        let products= await Product.find();
        // console.log(products);
        res.statusCode=200;
        res.json(products);
    }
    catch(err) {
        res.statusCode=500;
        res.json(err);
    }
})

module.exports=router;