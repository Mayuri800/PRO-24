class ground{
    constructor(x,y){
        var options={
            isStatic:true,

        }
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(this.x,this.y,width,height);
    }
    display(){
        push()
        var pos = this.body.position;
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("brown");
        strokeWeight(3);
        pop()
    }
}