class Base{
    constructor(x,y,width,height,angle){
        var option = {
            restitution: 0.3,
            friction:1.5,
            density:1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.hight = height;
        this.image = loadImage("Img/base.png")
        World.add(world,this.body);
    
    }
    display (){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.hight);
        pop();
    }
    
    }
    