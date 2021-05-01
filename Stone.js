class Stone {
    constructor(x, y) {
     
        var options={
            resititution:0.8,
            friction:0.9,
            density:12
        }
      this.body = Bodies.rectangle(x, y, 60, 50, options);
      this.x=x;
	  this.y=y;
      this.width = 60;
      this.height = 50;
      World.add(world, this.body);
    };

    display(){
    
      strokeWeight(3);
        stroke('white')
        fill('brown')
        rectMode(CENTER)
        rect(950, 570, this.width, this.height);
        
    };
  };