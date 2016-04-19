exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce(function(a, b) {
      return a + b;
    });
  },

  remove: function(arr, item) {
    return arr.filter(function(a) {
      return a !== item;
    });
  },

  removeWithoutCopy: function(arr, item) {
    while (arr.indexOf(item) !== -1) {
      arr.splice(arr.indexOf(item), 1);
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.splice(0, 0, item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var filteredArr = arr.filter(function(a) {
      return a === item;
    });
    return filteredArr.length;
    // var n = 0;
    // for (var i = 0; i < arr.length; i++) {
    //     if (arr[i] === item) {
    //         n = n + 1;
    //     }
    // }
    // return n;
  },

  duplicates: function(arr) {
    // var duplicates = [];
    // var tab = arr.sort();
    // for (var i = 0; i < tab.length - 1; i++){
    //   if (tab[i] === tab[i+1] && duplicates.indexOf(tab[i]) === -1) {
    //     duplicates.push(tab[i]);
    //   }
    // }
    // return duplicates;
    var duplicates = [];
    var obj = {};
    var objSize = 0;
    for (var i = 0; i < arr.length; i++) {
      obj[arr[i]] = 0;
      var tailleCourante = Object.keys(obj).length;
      if (tailleCourante === objSize && duplicates.indexOf(arr[i]) === -1) {
        //l'objet n'a pas grandi : c'est un duplicata.
        duplicates.push(arr[i]);
      }
      else {
        objSize = tailleCourante;
      }
    }
    return duplicates;
  },

  square: function(arr) {
    return arr.map(function(a) {
      return a * a;
    });
  },

  findAllOccurrences: function(arr, target) {
    // var res = [];
    // for (var i = 0; i < arr.length; i++) {
    //   if (arr[i] === target){
    //     res.push(i);
    //   }
    // }
    // return res;
    var res = [];
    arr.reduce(function(a, e, i) {
      if (e === target){
        res.push(i);
      }
    }, []);
    return res;

  }

};
