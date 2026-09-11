// const { createClient }  = require('redis');

// const redisClient = createClient({
//     username: 'default',
//     password: process.env.REDIS_PASS,
//     socket: {
//         host: 'redis-19934.c212.ap-south-1-1.ec2.redns.redis-cloud.com',
//         port: 19934
//     }
// });

const{ createClient } =require('redis');
require('dotenv').config();
const User = require('../models/user');

const redisClient = createClient({
    username: 'default',
    password: 'MRIzWw5x1REgC6i4oe9TX3Ze8scHfLRk',
    socket: {
        host: 'redis-12420.crce281.ap-south-1-3.ec2.cloud.redislabs.com',
        port: 12420
    }

});
module.exports = redisClient;