//During the test the env variable is set to test
require('dotenv').config();
process.env.NODE_ENV = 'test';

const Grid = require('../app/gridModel/grid')

const isValidEmailFormat = require('../app/validation/emailValidator')

//Require the dev-dependencies
let chai = require('chai');
let expect = chai.expect;

describe('Create Grid', () => {
	const _grid = new Grid()
	const grid = _grid.grid
	console.log('GRID')
	console.table(grid)
 /*
  * Test the dataset
  */
  describe('Grid functionality', () => {
	  it('it should be a 5x5 grid', async (done) => {
		expect(grid.length).to.equal(5)
		expect(grid[0].length).to.equal(5)
		done()
	  });
	  it('it should contain one X target', async (done) => {
		expect(grid.reduce((t,n)=>t+n.reduce((s,m)=>m=='X'?s+1:s,0),0)).to.equal(1)
		done()
	  });
	  it('it should stop you from leaving grid', async (done) => {
		try {
			_grid.checkLocation('right')
		  } catch (error) {
			expect(error.message).to.include('Out of range');
		  }
		  finally
		  {
			done()
		  }
	  });
  });

  
  describe('Email validation', () => {
	it('it should fail empty string & basic format test xxx@yyy.something', async (done) => {

		expect(isValidEmailFormat('')).to.be.false
		expect(isValidEmailFormat('someString@email')).to.be.false
		done()
	});
	it('passes sensible format', async (done) => {
		expect(isValidEmailFormat('someString@email.domain')).to.be.true
	  done()
	});
});
});