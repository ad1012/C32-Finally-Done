class Ground{
    constructor(x,y,h,w){
        var options={
            isStatic : true,
          }

          this.w = w;
          this.h = h;
          
          this.ground = Bodies.rectangle(x,y,w,h,options)
          
          World.add(world,this.ground);
    }

    display(){
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,20);
    }
}