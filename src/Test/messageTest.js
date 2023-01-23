import chai from "chai";
import chaiHttp from "chai-http";
import { expect } from "chai";
import app from "../..";
chai.should();
chai.use(chaiHttp);


describe('Contact Message', () => {
    it('should create a contact message', (done) => {
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

//get all message

describe("Get all messages", () => {
    it("It Should get all messages", (done) => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzc3NTM1MjI3NzExZDE3YWVkMzQxNSIsImlhdCI6MTY3NDM4OTk2MSwiZXhwIjoxNjc0NTYyNzYxfQ.IwS0YBb6XIVp18cCTiAt-gPe4glIH_Ampnfb75DH5uw"

      chai
        .request(app)
       .get("/api/getAllMessages")
       .set('auth_token',`${token}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('status')
          res.body.should.have.property('data')

          
          done();
        })
       
    });
  });


