function setup(){
createCanvas(650,600)
}

function draw(){
  background (255,246,238)
  noStroke()
  
  //redbig
  fill(232,70,52)
  rect(1,1,100,600)
  if (mouseIsPressed){
    fill(37,130,22)
  rect(1,1,100,600)
  }
  

  //backgroundlike
  fill(255,246,238);
  rect(45,240,30,40)
  
  //Blue
  fill(82,110,188);
  rect(199,1,21,600);

  //blacklong
  fill(0,0,0);
  rect(210,150,9,260);
  
  //smol
  fill(255,246,238)
  rect(206,480,15,6)
 
  
  //yellow
  fill(255,255,10);
  rect(285,100,120,400);
    if(mouseX>285 && mouseX<405){
    fill(100,20,165)
    rect(285,100,120,400)
    }
    
  
  //blackie
  fill(0,0,0);
  rect(318,259,28,28);
  
  //redsmall
  fill(232,70,52);
  rect(460,260,95,27);
    
  }
  
