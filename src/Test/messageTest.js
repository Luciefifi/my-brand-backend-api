import chai from "chai";
import chaiHttp from "chai-http";
import { expect } from "chai";
import app from "../..";
chai.should();
chai.use(chaiHttp);

//create message test
describe('Contact Message', () => {
    it('should create a contact message', (done) => {
      chai.request(app)
        .post('/api/createMessage')
        .send({fname: 'meseand', lname: 'yoeusand', email: 'mesaneyodu@gmail.com', message: 'Hadeslfnb, I wuldd lik to inquire about your service.'})
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


   //get single message



   describe("get single message by id", () => {
    it("It should get a single message by id" , (done) => {
        const id = "63cdff17fef1c8aeeaad9599"
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzc3NTM1MjI3NzExZDE3YWVkMzQxNSIsImlhdCI6MTY3NDM4OTk2MSwiZXhwIjoxNjc0NTYyNzYxfQ.IwS0YBb6XIVp18cCTiAt-gPe4glIH_Ampnfb75DH5uw"

        chai.request(app)
        .get(`/api/getSingleMessage/${id}`)
       .set('auth_token',`${token}`)
        .end((err,res)=>{
            if (err) return done(err);
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('status').eql('success');
            expect(res.body).to.have.property('data');
           expect(res.body.data).to.have.property('fname')
            expect(res.body.data).to.have.property('lname');
             expect(res.body.data).to.have.property('email');
          expect(res.body.data).to.have.property('message');
         



          
            done();
        });
    });
});



