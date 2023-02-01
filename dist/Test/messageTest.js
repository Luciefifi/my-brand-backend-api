"use strict";

var _chai = _interopRequireWildcard(require("chai"));
var _chaiHttp = _interopRequireDefault(require("chai-http"));
var _ = _interopRequireDefault(require(".."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
_chai.default.should();
_chai.default.use(_chaiHttp.default);

//create message test
describe('Contact Message', () => {
  it('should create a contact message', done => {
    _chai.default.request(_.default).post('/api/createMessage').send({
      fname: 'msfeheazzndt',
      lname: 'yousafhezntdz',
      email: 'mesafheeytzozdu@gmail.com',
      message: 'Hasdeslzfrn, Izwutfldd lik no inquire about your sevice.'
    }).end((err, res) => {
      if (err) return done(err);
      console.log(res.body);
      (0, _chai.expect)(res.status).to.equal(201);
      res.body.should.have.property('status').eql('success');
      res.body.should.have.property('data');
      res.body.data.should.have.property('fname');
      res.body.data.should.have.property('lname');
      res.body.data.should.have.property('email');
      res.body.data.should.have.property('message');
      done();
    });
  });
});

//get all message

describe("Get all messages", () => {
  it("It Should get all messages", done => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzc3NTM1MjI3NzExZDE3YWVkMzQxNSIsImlhdCI6MTY3NTA1NzU5MCwiZXhwIjoxNjc1MjMwMzkwfQ.VII3UucDGlL5gBYpf-jK-A8ooGs-3KmQW80jpcM2J2E";
    _chai.default.request(_.default).get("/api/getAllMessages").set('auth_token', `${token}`).end((err, res) => {
      (0, _chai.expect)(res.status).to.equal(200);
      (0, _chai.expect)(res.body).to.have.property('status').eql('success');
      (0, _chai.expect)(res.body).to.have.property('data');
      (0, _chai.expect)(res.body.data[0]).to.have.property('fname');
      (0, _chai.expect)(res.body.data[0]).to.have.property('lname');
      (0, _chai.expect)(res.body.data[0]).to.have.property('email');
      (0, _chai.expect)(res.body.data[0]).to.have.property('message');
      done();
    });
  });
});

//get single message

describe("get single message by id", () => {
  it("It should get a single message by id", done => {
    const id = "63ccd088410d44c9b9394b63";
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzc3NTM1MjI3NzExZDE3YWVkMzQxNSIsImlhdCI6MTY3NTA1NzU5MCwiZXhwIjoxNjc1MjMwMzkwfQ.VII3UucDGlL5gBYpf-jK-A8ooGs-3KmQW80jpcM2J2E";
    _chai.default.request(_.default).get(`/api/getSingleMessage/${id}`).set('auth_token', `${token}`).end((err, res) => {
      if (err) return done(err);
      (0, _chai.expect)(res.status).to.equal(200);
      (0, _chai.expect)(res.body).to.have.property('status').eql('success');
      (0, _chai.expect)(res.body).to.have.property('data');
      (0, _chai.expect)(res.body.data).to.have.property('fname');
      (0, _chai.expect)(res.body.data).to.have.property('lname');
      (0, _chai.expect)(res.body.data).to.have.property('email');
      (0, _chai.expect)(res.body.data).to.have.property('message');
      done();
    });
  });
});