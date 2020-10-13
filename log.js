class Log extends Base{
    constructor(x,y,width,height,angle){
        super (x,y,width,height,angle)  
         Matter.Body.setAngle(this.body,angle);
         this.image = loadImage("Img/wood2.png")
        
    }
    
    
    }
    