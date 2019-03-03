import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe } from 'mocha';
import app from '../../app';

chai.use(chaiHttp);
chai.should();

describe('USER REQUEST CONTROLLER API ENDPOINT', () => {
    it("should get all users request", (done) => {
        chai.request(app)
            .get('/api/v1/users/requests')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
             });
    });

    it("should get a single users request", (done) => {
        const id = 1;
        chai.request(app)
            .get(`/api/v1/users/requests/${id}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
             });
    });

    
    it('should create a SINGLE request on /requests/ POST ', (done) => {
        const request = {
            id:3,
            requesting: 'engineering',
            name: 'Mario',
            email: 'mario@gmail.com',
        };
        chai.request(app)
          .post('/api/v1/users/requests')
          .send(request)
          .end((error, res) => {
            res.should.have.status(201);
            res.body.should.be.an('object');
            done();
          });
      });

      it('should edit a SINGLE request on /requests/<id> PUT', (done) => {
        const request = {
            requesting: 'engineering',
            name: 'Mario',
            email: 'mario@gmail.com',
        };
        chai.request(app)
          .put('/api/v1/users/requests/1')
          .send(request)
          .end((error, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
          });
      });

      it('should delete a SINGLE request on /requests/<id> DELETE', (done) => {
        chai.request(app)
          .delete('/api/v1/users/requests/1')
          .end((error, res) => {
            res.should.have.status(201);
            res.body.should.be.a('object');
            done();
          });
      });

});