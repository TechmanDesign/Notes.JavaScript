function draw_b() {
  var b_canvas = document.getElementById("b");
  var b_context = b_canvas.getContext("2d");
  b_context.fillRect(50, 25, 150, 100);
}

// Rectangular Shape Example
function draw() {
  var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.fillRect(25,25,100,100);
}

//JavaScript magic at its fullest; the power to let one name or string refer to another one.
var x = document.images;
for (var i=0;i<x.length;i++)
{
  var theName = x[i].name;
  theStatus[theName] = 'normal';
}
