import chai from "chai";
import chaiHttp from "chai-http";
import { expect } from "chai";
import app from "../..";
chai.should();
chai.use(chaiHttp);


describe('Contact Message', () => {
    it('should create a contact message with fname, lname, email, and message', (done) => {
      chai.request(app)
        .post('/api/createMessage')
        .send({fname: 'mesean', lname: 'yoeusan', email: 'mesaneyou@gmail.com', message: 'Haeslfnb, I wuldd lik to inquire about your service.'})
        .end((err, res) => {
            if (err) return done(err);
            console.log(res.body)

            expect(res.status).to.equal(201);
           
            res.body.should.have.property('status').eql('success');
            res.body.should.have.property('data');

            res.body.data.should.have.property('fname')
            res.body.data.should.have.property('lname')
            res.body.data.should.have.property('email')
            res.body.data.should.have.property('message')
            done();
        });
    });
});


