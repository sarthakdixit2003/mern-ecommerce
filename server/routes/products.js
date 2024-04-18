const router=require("express").Router();
const Product=require('../models/Product');

//Get Products by id
router.get('/:id', async(req, res) => {
    try{
        let product=await Product.findById(req.params.id);
        res.statusCode=200;
        res.json({data: product});
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
        if(!products)
            res.json({ msg: 'not found'})
        // console.log(typeof products);
        // console.log(products);
        res.statusCode=200;
        res.json({count: products.length, data: products});
    }
    catch(err) {
        res.statusCode=500;
        res.json(err);
    }
})

module.exports=router;