const router=require('express').Router();
const Cart=require('../models/Cart');

//add item to cart
router.put('/:id', async(req, res) => {
    try {
        const updatedCart=Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.statusCode=200;
        res.json(updatedCart);
    }
    catch(err) {
        res.statusCode=404;
        res.json(err);
    }
})

//display all cart items
router.get('/', async(req, res) => {
    try {
        let cart=await Cart.find();
        res.statusCode=200;
        res.json(cart);
    }
    catch(err) {
        res.json(err);
    }
})

module.exports=router;