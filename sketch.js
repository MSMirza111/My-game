
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var table,ball;







function setup(){
 createCanvas(940,580);
  
 engine = Engine.create();
 world = engine.world;

 table = new Table(442, 330, 900, 500);
 ball = new Ball(140,250,40,10);

   Engine.run(engine);
  
}
  


 function draw(){
 background("black");




 table.display();
 ball.display();

 Engine.update(engine);

 drawSprites();


 }




