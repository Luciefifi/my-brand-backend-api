import chai from "chai";
import chaiHttp from "chai-http";
import app from "../..";
import { expect } from "chai";
chai.should()
chai.use(chaiHttp)

//user registration
describe('User Registration', () => {
    it('should register a user', (done) => {
      chai.request(app)
        .post('/api/createUser')
        .send({firstName: 'angesljineetas', lastName: 'calslinheeteas', email: 'angselhlicatlinseea@gmail.com', password: '12345678',repeatPassword:'12345678'})
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


//login

describe('Login', () => {
    it('should be able to login', (done) => {
      chai.request(app)
        .post('/api/login')
        .send({ email: 'angellicaline@gmail.com', password: '12345678'})
        .end((err, res) => {
            if (err) return done(err);
            console.log(res.body)

            expect(res.status).to.equal(200);
           
            res.body.should.have.property('status').eql('success');
            res.body.should.have.property('successMessage');
            res.body.should.have.property('token');
            
        
            done();
        });
    });
});

//get single user 
describe("get single user by id", () => {
    it("It should get a single user  by specified  id" , (done) => {
        const id = "63c77535227711d17aed3415"
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzc3NTM1MjI3NzExZDE3YWVkMzQxNSIsImlhdCI6MTY3NDgwMjcxNywiZXhwIjoxNjc0OTc1NTE3fQ.28W4erXi0XpmZ37-hDTPuDTfizxIFpqGKhAa7gufCTE"


        chai.request(app)
        .get(`/api/getSingleUser/${id}`)
       .set('auth_token',`${token}`)
        .end((err,res)=>{
            if (err) return done(err);
            console.log(res.body)
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('status').eql('success');
            expect(res.body).to.have.property('data');
           expect(res.body.data).to.have.property('firstName')
            expect(res.body.data).to.have.property('lastName');
             expect(res.body.data).to.have.property('email');
          expect(res.body.data).to.have.property('password');
          expect(res.body.data).to.have.property('repeatPassword');
         



          
            done();
        });
    });
});


//get all users
describe("Get all users", () => {
    it("It Should get all users", (done) => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzc3NTM1MjI3NzExZDE3YWVkMzQxNSIsImlhdCI6MTY3NDgwMjcxNywiZXhwIjoxNjc0OTc1NTE3fQ.28W4erXi0XpmZ37-hDTPuDTfizxIFpqGKhAa7gufCTE"


      chai
        .request(app)
       .get("/api/getAllusers")
       .set('auth_token',`${token}`)
        .end((err, res) => {
            console.log(res.body)
          res.should.have.status(200);
          res.body.should.have.property('status')
          res.body.should.have.property('allUsers')

          
          done();
        })
       
    });
  });
