// const mongoose_users = require('../../config/users')
// const Schema                = mongoose_users.Schema;
const mongoose = require('mongoose');
const users_conn  = require('../config/db');
const Schema    = mongoose.Schema;


const userModel = new Schema({
    name              : { type: String },
    phone_number              : { type: String },
    email_id                : { type: String },
    city             : { type: String },
    state               : { type: String },
    address                  : { type: String },
    education              : { type: String},
    hobby               : { type: String },
    user_name                     : { type: String },
    password              : { type: String },
    created_at              : { type: Number, default: Date.now() },
    updated_at              : { type: Number, default: Date.now() },
    last_active             : { type: Number, default: Date.now() },
});

module.exports = users_conn.model('User', userModel, 'user');