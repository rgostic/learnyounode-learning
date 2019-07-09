var input = process.argv.slice(2, process.argv.length);

var sum = 0;

input.forEach(function(num){
  sum += parseInt(num, 10);
});

console.log(sum);