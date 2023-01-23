import chai from "chai";
import chaiHttp from "chai-http";
import app from "../..";
import { expect } from "chai";
chai.should()
chai.use(chaiHttp)


describe('User Registration', () => {
    it('should register a user', (done) => {
      chai.request(app)
        .post('/api/createUser')
        .send({firstName: 'angeline', lastName: 'callinee', email: 'angellicaline@gmail.com', password: '12345678',repeatPassword:'12345678'})
        .end((err, res) => {
            if (err) return done(err);
            console.log(res.body)

            expect(res.status).to.equal(201);
           
            res.body.should.have.property('status').eql('success');
            res.body.should.have.property('registeredUser');

            res.body.registeredUser.should.have.property('firstName')
            res.body.registeredUser.should.have.property('lastName')
            res.body.registeredUser.should.have.property('email')
            res.body.registeredUser.should.have.property('password')
            res.body.registeredUser.should.have.property('repeatPassword')
            done();
        });
    });
});
