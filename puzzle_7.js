var sequence=0
function move() {
	while(getColor()!="red"&& sequence % 2 == 0){
		down()
  }
  while(getColor()!="red"&& sequence % 2 == 1) {
		up()
	}
}
while (sequence <4){
	move();
	right();
	right();
	sequence=sequence+1;
}
	while(getColor()!="red"&& sequence % 2 == 0){
		down()
  }
right();
