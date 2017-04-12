import { assert, expect } from 'chai';
import Matrix from '../lib';

describe('Matrix', function() {

  it('should start empty', function() {
    let mat = new Matrix();
  
    expect(mat.data.size).to.equal(0);
  });

  it('should give correct size', function() {
    let mat1 = new Matrix(3);
    let mat2 = new Matrix(5);
    let mat3 = new Matrix(9);

    expect(mat1.size()).to.equal(9);
    expect(mat2.size()).to.equal(25);
    expect(mat3.size()).to.equal(81);
  });

  it('should throw error', function() {
    let mat = new Matrix(3);

    expect(() => mat.set(2)).to.throw(Error);
  })

  it('should take input correctly', function() {
    let mat = new Matrix(2);
    mat.set([1,2,3,4]);

    let correct = new Map();
    correct.set('1-1', 1);
    correct.set('1-2', 2);
    correct.set('2-1', 3);
    correct.set('2-2', 4);

    expect(mat.data).to.deep.equal(correct);
  });

  it('should retrieve data correctly', function() {
    let mat = new Matrix(2);
    mat.set(['1-1', '1-2', '2-1', '2-2']);

    expect(mat.get(1,2)).to.equal('1-2');
  })
});

