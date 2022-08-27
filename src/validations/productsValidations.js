const {check} = require('express-validator');

module.exports = [
    check('name')
        .notEmpty().withMessage("Debes completar el nombre").bail()
        .isLength({min:5}).withMessage("El nombre debe tener al menos 5 caracteres"),
    check('price')
        .notEmpty().withMessage("Debes completar el precio").bail()
        .isNumeric({
            no_symbols : true
        }).withMessage("Debes ingresar solo numeros enteros positivos"),
    check('discount')
        .notEmpty().withMessage("Debes completar el descuento").bail()
        .isNumeric({
            no_symbols : true
        }).withMessage("Debes ingresar solo numeros enteros positivos"),
    check('category')
        .notEmpty().withMessage("Debes elegir la categoria"),
    check('description')
        .notEmpty().withMessage("Debes completar la descripcion")    
    
];