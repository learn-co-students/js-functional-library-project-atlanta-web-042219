const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(array, duh) {
      let newCollection = []
      for (let i in array) newCollection.push(array[i])
      for (let x = 0; x < newCollection.length; x++) duh(newCollection[x])
      return array;
    },

    map: function(array, duh) {
      let newCollection = []
      for (let i in array) newCollection.push(array[i])
      for (let x = 0; x < newCollection.length; x++)
        newCollection[x] = duh(newCollection[x])
      return newCollection;
    },

    reduce: function(array, callback, acc = 0) {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
