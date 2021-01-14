class Paper
{
    constructor(x,y,r)
    {
        this.x=x;
        this.y=y;
        this.r=r;
        var option=
        {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(this.x,this.y,this.r,{isStatic:false,restitution:0.3,friction:0.5,density:1.2});
        this.image=loadImage("paper.png");
        World.add(world,this.body);
    }
    display()
    {
        imageMode(CENTER);
        image(this.image,this.x,this.y,50,100);
    }
}