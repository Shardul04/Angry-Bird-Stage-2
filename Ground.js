class Ground{
    constructor(){
        var option = {isStatic: true}
        this.body = Bodies.rectangle(600,390,1200,20,option);
        this.width = 1200;
        this.hight = 20;
        World.add(world,this.body);
    }
    display (){
        var pos = this.body.position;
       fill("Brown")
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.hight);
    }
}