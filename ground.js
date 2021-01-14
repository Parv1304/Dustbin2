class Ground
{
    constructor()
    {
        var option=
        {
            isStatic:true
        }
        this.body=Bodies.rectangle(600,350,1200,10,option);
        this.width=1200;
        this.height=10;
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x,pos.y,1200,10);
    }
}