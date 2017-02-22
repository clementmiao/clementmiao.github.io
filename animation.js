var nums = Array.apply(null, Array(20)).map(function (_, i) {return i + 1;});

var ArrayLength = nums.length;

for (var i = 0; i < ArrayLength; i++) {
  var path = document.querySelector('#svg_' + nums[i].toString());
  var length = path.getTotalLength();
  path.style.strokeDashoffset = length;
  window.requestAnimFrame;
}
