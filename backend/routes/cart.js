const express = require("express");
const Dish = require("../models/dish");
const Cart = require("../models/cart");
const router = express.Router();

const dishes = [];
router.post("", (req, res, next) => {
    console.log(req.body);
    console.log(req.body._id);
    Dish.findById(req.body._id).then(Dish => {
        if (Dish) {
            console.log(Dish.id);
            Cart.push(Dish)
            res.status(200).json({message: "Dish added to cart", dish: Dish});
        } else {
            res.status(404).json({ message: "Dish not found!" });
        }
    });
});

router.get("", (req, res, next) => {
    res.status(200).json({
        message: "cart fetched successfully!",
        Dishes: Cart
    });
});

router.delete("", (req, res, next) => {
    console.log(req.body)
    // var cartx = Cart
    // var index = cartx.indexOf(req.body.id);
    // if (index > -1) {
    //     cartx.splice(index, 1);
    // }
    // Cart = cartx
    res.status(200).json({
        message: "item removed from cart!",
        Dishes: cartx
    });
});

module.exports = router;
