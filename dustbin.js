class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
        }


        line1=createSprite(352,650,200,20);
	line1.shapeColor=color("red")
	line1.isStatic = true;

	line2=createSprite(245,610,20,100);
	line2.shapeColor=color("red")
	line2.isStatic = true;

	line3=createSprite(460,610,20,100);
	line3.shapeColor=color("red")
	line3.isStatic = true;
    }

}
function display() {
    line1.display();
    line2.display();
    line3.display();
    
}
