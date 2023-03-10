import {login, register} from '../helpers/general-helpers';
import {expect} from 'chai';
const chance = require('chance').Chance();


describe('Space trimming test', ()=> {
  let testEmail = ' james' + Date.now() + '@pirate.com '
  let res

  before(async () => {
    await register(chance.first(), chance.last(), testEmail, process.env.PASSWORD)
    res = await  login(testEmail.trim(), process.env.PASSWORD)
  })

  it('check if spaces are trimmed', () => {
    expect(res.statusCode).to.eq(200)
  });

  it('check if spaces trimmed during registration by logging in ', async() => {
    expect(res.body.message).to.eq('Auth success')
  });

  it('check the email in response is equal to trimmed email', () => {
    expect(res.body.payload.user.email).to.eq(testEmail.trim())
  })
})