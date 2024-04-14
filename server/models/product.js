const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
    },
    detail: {
        type: String,
    }
})

exports.Product = mongoose.model('Product', productSchema);
