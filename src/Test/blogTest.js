import chai from "chai";
import chaiHttp from "chai-http";
import app from "../..";
import fs from 'fs'

 chai.should();
chai.use(chaiHttp);


// create a blog
describe('create a blog', () => {
    it('should create a new blog post with all fields filled', (done) => {
        const image = fs.readFileSync('/Users/andelarwanda/Desktop/My Projects/server/src/images/1673610548664brand.PNG')
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzc3NTM1MjI3NzExZDE3YWVkMzQxNSIsImlhdCI6MTY3NDM4OTk2MSwiZXhwIjoxNjc0NTYyNzYxfQ.IwS0YBb6XIVp18cCTiAt-gPe4glIH_Ampnfb75DH5uw"
       chai. request(app)
            .post('/api/create')
            .set('auth_token',`${token}`)
            .field('title', 'Test Blog')
            .field('description', 'this is a description of  Blog')
            .field('blogBody', 'This is a test blog post')
            .attach('image', image, '1673610548664brand.PNG')
            .end((err, res) => {
                console.log(res.body)
                res.should.have.status(201);
                res.body.should.have.property('status')
                 res.body.should.have.property('data')
                res.body.data.should.have.property('title');
                res.body.data.should.have.property('description');
                res.body.data.should.have.property('image');
                res.body.data.should.have.property('blogBody');
                done();
            });
    });
});

// Test get all Posts
describe("Get all posts", () => {
    it("It Should get all Posts", (done) => {
      chai
        .request(app)
       .get("/api/getAllBlogs")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property('status')
          res.body.should.have.property('data')
          done();
        })
       
    });
  });




  