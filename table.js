class Table{
  
constructor(x,y,width,height){
  this.x = x; 
  this.y = y;    
  this.width = width;
  this.height = height;
  this.table_image = loadImage("./assets/table.png");                                                                                                                    

}
  
display(){
    push();
    translate(this.x,this.y);
    imageMode(CENTER);
    image(this.table_image,0,0,this.width,this.height);
    pop();
}

}