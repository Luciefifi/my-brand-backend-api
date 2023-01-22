import chai from "chai";
import chaiHttp from "chai-http";
import app from "../..";
import fs from 'fs'

 chai.should();
chai.use(chaiHttp);

// create a blog
describe('Blog Creation with Image', () => {
    it('should create a new blog post ', (done) => {
        const image = fs.readFileSync('/Users/andelarwanda/Desktop/My Projects/server/src/images/1673610548664brand.PNG')
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzc3NTM1MjI3NzExZDE3YWVkMzQxNSIsImlhdCI6MTY3NDM3MDc5MywiZXhwIjoxNjc0NTQzNTkzfQ.rql1NUuohaX8-OKR7EXKCjuP3P2n_Ekur3Sd-uXnj4U"
       chai. request(app)
            .post('/api/create')
            .set('auth_token',`${token}`)
            .field('title', 'Test Blog')
            .field('description', 'this is a description of  Blog')
            .field('blogBody', 'This is a test blog post')
            .attach('image', image, '1673610548664brand')
            .end((err, res) => {
                // res.should.have.status(200);
                // res.body.should.have.property('status')
                // res.body.should.have.property('data')
                res.body.should.have.property('status').eql('success');
                res.body.data.should.have.property('title');
                res.body.data.should.have.property('description');
                res.body.data.should.have.property('image');
                res.body.data.should.have.property('blogBody');
                done();
            });
    });
});




  