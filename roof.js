class Roof
{
    constructor(x,y)
{
    var options={
        isStatic: true,
        restitution: 0.3,
        friction: 0.5,
        density:1.2
    }
this.x=x;
this.y=y;

this.body = Bodies.circle(this.x, this.y, options)
World.add(world,this.body)

}
display()
{


   push()
   translate(paperpos.x, paperpos.y)
   rectMode(CENTER)
   strokkeWeight(3);
   fill(255,0,255)
   ellipse(0,0,this.r, this.r)
   pop()
}
}