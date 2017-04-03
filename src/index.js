function Matrix(dim = 0) {
  this.dim = dim;
  this.data = new Map();
  for( let i = 1; i <= dim; i++) {
    for( let j = 1; j <= dim; j++) {
      this.data.set(`${i}-${j}`,null);
    }
  }
}

Matrix.prototype.show = function() {
  console.log(this.data);
}

Matrix.prototype.size = function() {
  return this.data.size;
}

Matrix.prototype.set = function(data) {
  if(!Array.isArray(data)) {
    throw new Error('Data should be an array');
  }
  for( let i = 1, count = 0; i <= this.dim; i++) {
    for( let j = 1; j <= this.dim; j++) {
      this.data.set(`${i}-${j}`, data[count]);
      count++;
    }
  }
}

Matrix.prototype.get = function(row, col) {
  if(row > this.dim || col > this.dim) {
    throw new Error('out of bounds');
  }
  return this.data.get(`${row}-${col}`);
}

export default Matrix;
