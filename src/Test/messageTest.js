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
        .send({fname: 'msfeheazzndt', lname: 'yousafhezntdz', email: 'mesafheeytzozdu@gmail.com', message: 'Hasdeslzfrn, Izwutfldd lik no inquire about your sevice.'})
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
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzc3NTM1MjI3NzExZDE3YWVkMzQxNSIsImlhdCI6MTY3NTA1NzU5MCwiZXhwIjoxNjc1MjMwMzkwfQ.VII3UucDGlL5gBYpf-jK-A8ooGs-3KmQW80jpcM2J2E";

    chai
      .request(app)
      .get("/api/getAllMessages")
      .set('auth_token',`${token}`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('status').eql('success');
        expect(res.body).to.have.property('data');
        expect(res.body.data[0]).to.have.property('fname');
        expect(res.body.data[0]).to.have.property('lname');
        expect(res.body.data[0]).to.have.property('email');
        expect(res.body.data[0]).to.have.property('message');
        done();
      });
  });
});



   //get single message



   describe("get single message by id", () => {
    it("It should get a single message by id" , (done) => {
        const id = "63ccd088410d44c9b9394b63"
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzc3NTM1MjI3NzExZDE3YWVkMzQxNSIsImlhdCI6MTY3NTA1NzU5MCwiZXhwIjoxNjc1MjMwMzkwfQ.VII3UucDGlL5gBYpf-jK-A8ooGs-3KmQW80jpcM2J2E";



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



