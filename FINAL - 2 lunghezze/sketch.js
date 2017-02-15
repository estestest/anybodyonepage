  var fr=100;
  var rectX=0;
  var ran=-80;
  var ran2=-600;
  var animationkm=false;
  var wimg2,himg2,wimg2max=150,himg2max=150;
  var animationGastro=false;
  var rectximgg= 898;
  var rectximgd= 15543;
  var rectximgn= 3194;
  var rectximgv= 7988;

function preload(){
  img=loadImage("libraries/BACKGROUND.png");
  img1=loadImage("libraries/TOPdna.png");
  img2=loadImage("libraries/TOPnervi.png");
  img3=loadImage("libraries/TOPvene.png");
  img4=loadImage("libraries/TOPgastrointestinale.png");
  }

function setup(){
  createCanvas(1280,740);
  frameRate(fr);
  }

function draw(){
  //primo rettangolo a dx speed
  var x=1260;
  var y=0;
  var rect_width=20;
  var rect_height=740;
  
  //primo rettangolo a sx speed
  var x1=0;
  var y1=0;
  var rect_width1=20;
  var rect_height1=740;  
 
  //secondo rettangolo a dx medium speed
  var x2=1200;
  var y2=0;
  var rect_width2=60;
  var rect_height2=740;
  
  //secondo rettangolo a sx medium speed
  var x3=20;
  var y3=0;
  var rect_width3=60;
  var rect_height3=740;
  
 /* //terzo rettangolo a dx slow speed
  var x4=1190;
  var y4=0;
  var rect_width4=30;
  var rect_height4=740;*/
  
  //terzo rettangolo a sx slow speed
  var x5=60;
  var y5=0;
  var rect_width5=30;
  var rect_height5=740;
  
  //variabili per zoom - primo zoom
  var ximg1=0 ;
  var yimg1=40;
  var rect_widthimg1= 1280;
  var rect_heightimg1=60;

  //variabili numeri
  //var km= rectX+640;
  //var c= map(km,640,228131456,0,145000)
  //var km2=(rectX*rectX)+640;
  //var d=map(km2,640,228131456,0,16000000000)

  background(150);
  //primo rettangolo a dx rapido
  push();
  rectX=rectX-=1;
  cursor(HAND);
  if (mouseX>x && mouseX<x+rect_width && mouseY>y && mouseY<y+rect_height && rectX>-(16384-1280)){
  rectX= rectX-=5
  frameRate(fr); 
  }else{
  rectX=rectX+=1
  frameRate(fr); //make frameRate 30 FPS
  }
  pop();
  
  //primo rettangolo a sx rapido
  push();
  rectX = rectX-=1;
  cursor(HAND)
  if (mouseX>x1 && mouseX<x1+rect_width1 && mouseY>y1 && mouseY<y1+rect_height1 && rectX<0 ){
  rectX= rectX+=5
  frameRate(fr);
  }else{
  rectX=rectX+=1
  frameRate(fr); //make frameRate 30 FPS
  }
  pop();
 
  //secondo rettangolo a sx medio
  push();
  rectX=rectX-=1;
  cursor(HAND)
  if (mouseX>x3 && mouseX<x3+rect_width3 && mouseY>y3 && mouseY<rect_height3 && rectX<0 ){
  rectX=rectX+=2
  frameRate(fr);
  }else{
  rectX=rectX+=1
  frameRate(fr); // make frameRate 30 FPS
  }
  pop();
 
  //secondo rettangolo a dx medio
  push();
  rectX= rectX-=1;
  if(mouseX>x2 && mouseX<x2+rect_width2 && mouseY>y2 && mouseY<y2+rect_height2 && rectX>-(16384-1280)){
  rectX= rectX-=2
  frameRate(fr);
  } else {
  rectX=rectX+=1
  frameRate(fr); //make frameRate 30 FPS
  }
  pop();

  //stampa immagine background
  image(img,rectX,0);
  /*pop()
  if(animationkm=== true ){
  image(img3,width/2,height/2+200,100,100);
  }
  if(rectX<ran && rectX>ran2 ){
  animationkm =true;}
  else{animationkm = false}*/
  

  //stampa zoom dna
  push();
  if(mouseX>80 && mouseX<1200 && mouseY>178 && mouseY<230){
  if(mouseX<rectximgd+rectX){
  noCursor();
  imageMode(CENTER);
  image(img1,mouseX,mouseY,150,150);
  }}
  pop();
  
  //stampa zoom vene
  push();
  if(mouseX>80 && mouseX<1200 && mouseY>270 && mouseY<320){
  if(mouseX<rectximgv+rectX){
  noCursor();
  imageMode(CENTER);
  image(img3,mouseX,mouseY,150,150);
  }}
  pop();
  
  //stampa zoom nervi
  push();
  if(mouseX>80 && mouseX<1200 && mouseY>360 && mouseY<403){
  if (mouseX<rectximgn+rectX){
  noCursor();
  imageMode(CENTER);
  image(img2,mouseX,mouseY,150,150);
  }}
  pop();

  //stampa zoom gastro
  push();
  if(mouseX>80 && mouseX<1200 && mouseY>448 && mouseY<500 && rectX>-898 && rectX<898){
  if(mouseX<rectximgg+rectX){
  noCursor();
  imageMode(CENTER);
  image(img4,mouseX,mouseY,150,150);
  }}
  pop();
  //console.log(c);
}
