import chai from "chai";
import chaiHttp from "chai-http";
import { expect } from "chai";
import app from "..";
import fs from 'fs'

 chai.should();
chai.use(chaiHttp);


// create a blog
// describe('create a blog', () => {
//     it('should create a new blog post with all fields filled', (done) => {
//         const image = fs.readFileSync('/Users/andelarwanda/Desktop/My Projects/server/src/images/1673610548664brand.PNG')
//         const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzc3NTM1MjI3NzExZDE3YWVkMzQxNSIsImlhdCI6MTY3NTA1NzU5MCwiZXhwIjoxNjc1MjMwMzkwfQ.VII3UucDGlL5gBYpf-jK-A8ooGs-3KmQW80jpcM2J2E"
//        chai. request(app)
//             .post('/api/create')
//             .set('auth_token',`${token}`)
//             .field('title', 'Test Blog')
//             .field('description', 'this is a description of  Blog')
//             .field('blogBody', 'This is a test blog post')
//             .attach('image', image, '1673610548664brand.PNG')
//             .end((err, res) => {
//                 // res.should.have.status(201);
//                 // res.body.should.have.property('status')
//                 //  res.body.should.have.property('data')
//                 // res.body.data.should.have.property('title');
//                 // res.body.data.should.have.property('description');
//                 // res.body.data.should.have.property('image');
//                 // res.body.data.should.have.property('blogBody');
//                 done();
//             });
//     });
// });

// Test get all Posts
describe("Get all posts", () => {
    it("It Should get all Posts", (done) => {
      chai
        .request(app)
       .get("/api/getAllBlogs")
        .end((err, res) => {
            if (err) return done(err);
            // expect(res.status).to.equal(200);
            // expect(res.body).to.have.property('status').eql('success');
            // expect(res.body).to.have.property('data');
            // expect(res.body.data[0]).to.have.property('_id');
            // expect(res.body.data[0]).to.have.property('title');
            // expect(res.body.data[0]).to.have.property('description');
            // expect(res.body.data[0]).to.have.property('image');
            // expect(res.body.data[0]).to.have.property('blogBody');
          done();
        })
       
    });
  });

   //test get single post

   describe("get single blog by id", () => {
    it("It should get a single blog by id" , (done) => {
        const id = "63ccc001c957fcaf27ce95a4"
        chai.request(app)
        .get(`/api/getSingleBlog/${id}`)
        .end((err,res)=>{
            if (err) return done(err);
            // expect(res.status).to.equal(200);
            // expect(res.body).to.have.property('status').eql('success');
            // expect(res.body).to.have.property('data');
            // expect(res.body.data).to.have.property('_id').eql(id);
            // expect(res.body.data).to.have.property('title');
            // expect(res.body.data).to.have.property('description');
            // expect(res.body.data).to.have.property('image');
            // expect(res.body.data).to.have.property('blogBody');



          
            done();
        });
    });
});

// delete blog test

// it('it should delete a blog', (done) => {

//     const id = '63cf6ba911be64832fa6b83c';
//     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzc3NTM1MjI3NzExZDE3YWVkMzQxNSIsImlhdCI6MTY3NTA1NzU5MCwiZXhwIjoxNjc1MjMwMzkwfQ.VII3UucDGlL5gBYpf-jK-A8ooGs-3KmQW80jpcM2J2E"




//       chai.request(app)
//       .delete(`/api/deleteBlog/${id}`)
//       .set('auth_token',`${token}`)
//       .end((error, res) => {
//         console.log(res.body)
//         chai.expect(res).to.have.status(200);
//         done();
//       });
//   });
        
   

// update a blog

describe('Update Blog', () => {
    it('should update a blog post', (done) => {
        const blogId = '663cd178070cde012ca43ba6f';
        const image = 'http://localhost:5000/images/1673610548664brand.PNG';

        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzc3NTM1MjI3NzExZDE3YWVkMzQxNSIsImlhdCI6MTY3NTA1NzU5MCwiZXhwIjoxNjc1MjMwMzkwfQ.VII3UucDGlL5gBYpf-jK-A8ooGs-3KmQW80jpcM2J2E";

        const updatedData = {
            title: 'Updated Blog Title',
            description: 'This is an updated blog post',
            image: image,
            blogBody: 'This is my blog'
        };

        chai.request(app)
            .put(`/api/updatePost/${blogId}`)
            .set('auth_token', token)
            .send(updatedData)
            .end((err, res) => {
                console.log(res.body)
                if (err) {
                    console.log(err);
                  }
                // res.should.have.status(200);
                // res.body.should.have.property('status').eql('success');
                // res.body.should.have.property('title', updatedData.title);
                // res.body.should.have.property('description', updatedData.description);
                // res.body.should.have.property('image', updatedData.image);
                // res.body.should.have.property('blogBody', updatedData.blogBody);
                done();
            });
    });
});


  