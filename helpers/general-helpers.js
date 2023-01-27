import supertest from 'supertest';

function login(email, password){
  return supertest(process.env.BASE_URL)
    .post('/v5/user/login')
    .send({email, password})
}
function register(firstName, lastName, email, password){
  return supertest(process.env.BASE_URL)
    .post('/v5/user')
    .send({firstName,lastName, email, password})
}
function  randomEmail(){
  return 'User_' + Date.now() + '@gmail.com'
}

export {login, register,  randomEmail}