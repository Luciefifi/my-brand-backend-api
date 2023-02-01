"use strict";

var _chai = _interopRequireWildcard(require("chai"));
var _chaiHttp = _interopRequireDefault(require("chai-http"));
var _ = _interopRequireDefault(require(".."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
_chai.default.should();
_chai.default.use(_chaiHttp.default);

//user registration
describe('User Registration', () => {
  it('should register a user', done => {
    _chai.default.request(_.default).post('/api/createUser').send({
      firstName: 'angelzzdjineetead',
      lastName: 'casldinehzzeetead',
      email: 'angdelezzhlicatlinsead@gmail.com',
      password: '12345678',
      repeatPassword: '12345678'
    }).end((err, res) => {
      if (err) return done(err);
      (0, _chai.expect)(res.status).to.equal(201);
      res.body.should.have.property('status').eql('success');
      res.body.should.have.property('registeredUser');
      res.body.registeredUser.should.have.property('firstName');
      res.body.registeredUser.should.have.property('lastName');
      res.body.registeredUser.should.have.property('email');
      res.body.registeredUser.should.have.property('password');
      res.body.registeredUser.should.have.property('repeatPassword');
      done();
    });
  });
});

//login

describe('Login', () => {
  it('should be able to login', done => {
    _chai.default.request(_.default).post('/api/login').send({
      email: 'angellicaline@gmail.com',
      password: '12345678'
    }).end((err, res) => {
      if (err) return done(err);
      (0, _chai.expect)(res.status).to.equal(200);
      res.body.should.have.property('status').eql('success');
      res.body.should.have.property('successMessage');
      res.body.should.have.property('token');
      done();
    });
  });
});

//get single user 
describe("get single user by id", () => {
  it("It should get a single user  by specified  id", done => {
    const id = "63c77535227711d17aed3415";
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzc3NTM1MjI3NzExZDE3YWVkMzQxNSIsImlhdCI6MTY3NTA1NzU5MCwiZXhwIjoxNjc1MjMwMzkwfQ.VII3UucDGlL5gBYpf-jK-A8ooGs-3KmQW80jpcM2J2E";
    _chai.default.request(_.default).get(`/api/getSingleUser/${id}`).set('auth_token', `${token}`).end((err, res) => {
      if (err) return done(err);
      (0, _chai.expect)(res.status).to.equal(200);
      (0, _chai.expect)(res.body).to.have.property('status').eql('success');
      (0, _chai.expect)(res.body).to.have.property('data');
      (0, _chai.expect)(res.body.data).to.have.property('firstName');
      (0, _chai.expect)(res.body.data).to.have.property('lastName');
      (0, _chai.expect)(res.body.data).to.have.property('email');
      (0, _chai.expect)(res.body.data).to.have.property('password');
      (0, _chai.expect)(res.body.data).to.have.property('repeatPassword');
      done();
    });
  });
});

//get all users
describe("Get all users", () => {
  it("It Should get all users", done => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzc3NTM1MjI3NzExZDE3YWVkMzQxNSIsImlhdCI6MTY3NTA1NzU5MCwiZXhwIjoxNjc1MjMwMzkwfQ.VII3UucDGlL5gBYpf-jK-A8ooGs-3KmQW80jpcM2J2E";
    _chai.default.request(_.default).get("/api/getAllusers").set('auth_token', `${token}`).end((err, res) => {
      if (err) return done(err);
      (0, _chai.expect)(res.status).to.equal(200);
      (0, _chai.expect)(res.body).to.have.property('status').eql('success');
      (0, _chai.expect)(res.body).to.have.property('allUsers');
      (0, _chai.expect)(res.body.allUsers[0]).to.have.property('firstName');
      (0, _chai.expect)(res.body.allUsers[0]).to.have.property('lastName');
      (0, _chai.expect)(res.body.allUsers[0]).to.have.property('email');
      (0, _chai.expect)(res.body.allUsers[0]).to.have.property('password');
      (0, _chai.expect)(res.body.allUsers[0]).to.have.property('repeatPassword');
      (0, _chai.expect)(res.body.allUsers[0]).to.have.property('role');
      (0, _chai.expect)(res.body.allUsers[0]).to.have.property('isVerified');
      (0, _chai.expect)(res.body.allUsers[0]).to.have.property('dateCreated');
      done();
    });
  });
});