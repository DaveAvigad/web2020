/* from last week */

// Hoisting
(function () {
  function setAllVals() {
    console.log(x);

    console.log(getIt());

    var x = 1;

    function getIt() {
      return 2;
    }
  }

  setAllVals();

})();

// this
(function () {

  var fullname = 'John Doe';

  var obj = {
    fullname: 'Colin Ihrig',
    prop: {
      fullname: 'Aurelio De Rosa',

      getFullname: function () {
        return this.fullname;
      }
    }
  };
  // debugger;
  console.warn(obj.prop.getFullname());
  var test = obj.prop.getFullname;
  console.warn(test()); // what happen, why?
})()

/* new: exercises list */

var list = document.getElementById('ex-list');
var str = '';

for (var i = 1; i < 9; i++) {
  str += '<li><a href="' + i + '.html">ex' + i + ' | </a></li>';
}

list.innerHTML = str;
