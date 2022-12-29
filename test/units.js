//During the test the env variable is set to test
require('dotenv').config();
process.env.NODE_ENV = 'test';

const getTickers = require('../app/apis/getTickers')
const getEOD = require('../app/apis/getEOD')

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

//Our parent block
describe('Create dataset', () => {
 /*
  * Test the dataset
  */
  describe('/GET tickers', () => {
	  it('it should GET an array of tickers', async (done) => {
		getTickers().then((res)=>{
				expect(res.status).to.equal(200);
				expect(res.data.data).to.exist;
				expect(res.data.data).to.an('array');
				expect(res.data.data.length).to.be.greaterThan(0)
				expect(res.data.data[0].name).to.exist;
			})
			done()
	  });;
  });
  describe('/GET EOD prices', () => {
	  it('it should GET an array of latest prices', async (done) => {
		getEOD('msft','aapl').then((res)=>{
				expect(res.status).to.equal(200);
				expect(res.data.data).to.exist;
				expect(res.data.data).to.an('array');
				expect(res.data.data.length).to.be.greaterThan(0)
				expect(res.data.data[0].close).to.exist;
			})
			done()
	  });
  });

});
  