class ball{
    constructor(x,y,r){
      var options={
          isStatic:false,
          restitution:0.3,
          frition = 0.5,
          density : 1.2
      }
      this.x = x;
      this.y = y;
      this.r = r
      this.body = Matter.Bodies.circle(this.x,this.y,this.r/2,options)
      World.add(world,this.body);
    }
    display(){
        var paperpos = this.body.position;

        push()
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill("red")
        ecllipse(56,46,55,55);
        pop()
    }
}