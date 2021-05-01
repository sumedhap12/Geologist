class Iron{
constructor(x,y)
{
	var options={
		resititution:0.8,
		friction:3,
		density:30
    }
        this.body = Bodies.rectangle(x, y, 100, 80, options);
		this.x=x;
		this.y=y;
        this.width = 100;
        this.height = 80;
		World.add(world, this.body);

	}
	display()
	{
        
        strokeWeight(3);
        stroke('white')
        fill('black')
        rectMode(CENTER)
        rect(600, 550, this.width, this.height);
        
	}














}