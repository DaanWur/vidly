const mongoose = require('mongoose');
const Joi = require('joi');

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
})

const Genre = mongoose.model('Genre', genreSchema);



function validateGenere(genere) {
    const scheme = {
        name: Joi.string().min(4).required()
    };
    return Joi.validate(genere, scheme);
}


exports.genreSchema = genreSchema;
exports.Genre = Genre;
exports.validate = validateGenere;