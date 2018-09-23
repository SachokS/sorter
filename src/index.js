class Sorter {
  constructor() {
    this.array = [];
     this.compareFunc=function(a,b){
       return a-b;
     }// your implementation
  }

  add(element) {
    this.array.push(element);// your implementation
  }

  at(index) {
    return this.array[index];// your implementation
  }

  get length() {
    return this.array.length;// your implementation
  }

  toArray() {
    return this.array;// your implementation
  }

  sort(indices) {
    indices.sort(function (a,b) {
      return a-b;
    });
    var arr = [];
    for(var i = 0; i < indices.length;i++){
      arr.push(this.array[indices[i]]);
    }
    arr.sort(this.compareFunc);
    for(var j = 0; j< indices.length;j++){
      this.array.splice(indices[j],1,arr[j]);
    }// your implementation
  }

  setComparator(compareFunction) {
    this.compareFunc=compareFunction;// your implementation
  }
}

module.exports = Sorter;
