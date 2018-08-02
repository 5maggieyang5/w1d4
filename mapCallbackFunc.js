function map(arr, method) {
  var newArr = [];
  for (var a of arr) {
    newArr.push(method(a));
  }
  console.log(newArr);
}


var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});