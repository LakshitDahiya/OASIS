class Form{
constructor(){
this.input = createInput("name")
this.button = createButton("Play")
this.greeting = createElement("h2")
}
hide(){
this.greeting.hide()
this.button.hide()
this.input.hide();
}
display(){
var title = createElement('h1');
title.html("oasis");
title.position(750,100);
this.input.position(600,450);
this.button.position(600,500);
this.button.mousePressed(function(){
this.input.hide();
this.button.hide();
player.name = this.input.value();    
playerCount += 1;
player.index = playerCount()
player.update();
player.updateCount(playerCount);
this.greeting.html("GET READY TO RACE" + player.name);
this.greeting.position(500,500);

});
}
}