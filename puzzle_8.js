function move(orientation, total){
	var step=0;
  while (step<total){
    orientation();
  	step=step+1;
  }
}
var sequence =0;
while (sequence<4){
  var orientation = down;
  if (sequence % 2 == 1) {
    orientation = up;
  }
  move(orientation, 8);
  right();
	right();
  sequence = sequence + 1;
}
down();
down();
down();
down();
down();
down();
down();
down();
right();
