'use strict'
const User = require('../user/user')
const Handlebars = require('Handlebars');



module.exports = async function (fastify, opts,done) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })

  fastify.get("/login", function (req, reply) {
    try{
      return reply.sendFile("index.html");
    }catch(err){
      console.log("err",err)
    }
});

fastify.get("/verify", async function (request, reply) {
  const mobileNo = request.query.mobile_no;
  const password = request.query.password;
 
  const user = await User.findOne({
    password: password,
    phone_number: mobileNo,
  });

  if(user){
    return reply.send({
      success:1
    })
  }else{
    return reply.send({
      success:0
    })
  }
});
  // fastify.get('/login', async function (request, reply) {
  //   let user_name = request.query.user_name;
  //   let user = await User.find({})
  //   return { root: user }
  // })
  done();
  }
