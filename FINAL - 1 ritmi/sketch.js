//cuore
var animationCuore, radius, maxRadius;
var imgCuore;
var Wimg,Himg,maxSizeimgW,maxSizeimgH;
var soundCuore
var cuoreOn = false;
//polmoni
var animationPolmoni, radius, maxRadius;
var imgPolmoni;
var WimgP,HimgP,maxSizeimgWP,maxSizeimgHP;
var soundPolmoni;
var polmoniOn = false;
//ciglia
var animationCiglia, radius, maxRadius;
var imgCiglia;
var WimgC,HimgC,maxSizeimgWC,maxSizeimgHC;
var soundCiglia;
var cigliaOn = false;
//sangue
var animationSangue, radius, maxRadius;
var imgSangue;
var WimgS,HimgS,maxSizeimgWS,maxSizeimgHS;
var soundSangue;
var sangueOn = false;
//deglutizione
var animationDeg, radius, maxRadius;
var imgDeg;
var WimgD,HimgD,maxSizeimgWD,maxSizeimgHD;
var soundDeg;
var deglutizioneOn = false;

var myFont;
var backc;
var backs;
var backd;
var backciglia;
var backp;
var i;

function preload() {
  
   backc= loadImage ("file/cuoreBack.png");
   backs= loadImage ("file/sangueBack.png");
   backd= loadImage ("file/deglutizioneBack.png");
   backciglia= loadImage ("file/cigliaBack.png");
   backp= loadImage ("file/polmoniBack.png");
   myFont = loadFont('file/font/Arsenal-Regular.ttf');
   
  //img cuore
  imgCuore = loadImage("file/Cuore.png");
  soundCuore = loadSound('file/cuore.mp3');
  //img polmoni
  imgPolmoni = loadImage("file/Polmoni.png");
  soundPolmoni = loadSound('file/Polmoni.mp3');
  //img ciglia
  imgCiglia = loadImage("file/Ciglia.png");
  soundCiglia = loadSound('file/Ciglia.mp3');
  //img sangue
  imgSangue = loadImage("file/Sangue.png");
  soundSangue = loadSound('file/Sangue.mp3');
  //img deglutizione
  imgDeg = loadImage("file/Deglutizione.png");
  soundDeg = loadSound('file/Deg.mp3');
  }

function setup() {
  createCanvas(1280,740);
  frameRate(10);
    
  // define important variables
   
  // variabile cuore
  animationCuore = false;
  radius = height/10;
  maxRadius = height*0.7;
  Wimg=279/10;
  Himg=391/10;
  maxSizeimgH=391;
  maxSizeimgW=279;
  
  //variabile polmoni
  animationPolmoni = false;
  radius = height/10;
  maxRadius = height*0.7;
  WimgP=400/10;
  HimgP=401/10;
  maxSizeimgHP=401;
  maxSizeimgWP=400;
  
  //variabile ciglia
  animationCiglia = false;
  radius = height/10;
  maxRadius = height*0.7;
  WimgC=400/10;
  HimgC=333/10;
  maxSizeimgHC=333;
  maxSizeimgWC=400;
  
  //variabile sangue
  animationSangue = false;
  radius = height/10;
  maxRadius = height*0.7;
  WimgS=350/10;
  HimgS=563/10;
  maxSizeimgHS=563;
  maxSizeimgWS=350;

  //variabile Deglutizione
  animationDeg = false;
  radius = height/10;
  maxRadius = height*0.7;
  WimgD=332/10;
  HimgD=355/10;
  maxSizeimgHD=355;
  maxSizeimgWD=332;
  }

function draw() {
  background(150);
  
  //immagini grafiche di background
  
  imageMode(CENTER);
  image(backc,width*1/6, height*2/8,400,400);
  image(backs,width*2/6, height*4.7/8,400,400);
  image(backd,width*3/6, height*2/8,400,400);
  image(backciglia,width*4/6, height*4.7/8,400,400);
  image(backp,width*5/6, height*2/8,400,400);
 
  // linee della tastiera 
 
  stroke(255);
  strokeWeight(2);
  line(width*0.5/21,height*7.1/8,width*20.5/21,height*7.1/8);
  line(width*0.5/21,height*7.7/8,width*20.5/21,height*7.7/8);
  for(i=1;i<21;i++){
  stroke(255);
  strokeWeight(0.5);
  line(width*i/21,height*6.95/8,width*i/21,height*7.85/8);
  }
  
  //LETTERA A - SFONDO
  
    if(millis() % 857 < 400){
    noStroke();
    fill(107,12,34);
    rectMode(CENTER);
    rect(width*4.5/21,height*7.4/8,59,54);
    cuoreOn = true;
    }else{
    cuoreOn=false;
    }
    
  //LETTERA S 
  
    if(millis() % 180000 < 800){
    noStroke();
    fill(88,140,140);
    rectMode(CENTER);
    rect(width*6.5/21,height*7.4/8,59,54);
    sangueOn = true;
    }else{
    sangueOn = false;
    }
    
  //LETTERA K
  
    if(millis() % 4615 < 500){
    noStroke();
    fill(2,66,76);
    rectMode(CENTER);
    rect(width*14.5/21,height*7.4/8,59,54);
    cigliaOn=true;
    }else{
      cigliaOn=false;
    }
    
    
  //LETTERA L
  
    if(millis() % 3333 < 500){
    noStroke();
    fill(199,68,74);
    rectMode(CENTER);
    rect(width*16.5/21,height*7.4/8,59,54);
    polmoniOn= true;
    }else{
      polmoniOn=false;
    }
    
  //SPACEBAR
  
    if(millis() % 20000 < 1000 ){
    noStroke()
    fill(204,203,96);
    rect(width*10.5/21,height*7.4/8,304,54);
    deglutizioneOn= true;
    }else{
    deglutizioneOn= false;
    }
  
 //lettere
 
  fill(255)
  textFont(myFont);
  textAlign(CENTER);  
  textSize(40);
  text('A',width*4.5/21,height*7.55/8);
  text('S',width*6.5/21,height*7.55/8);
  text('K',width*14.5/21,height*7.55/8);
  text('L',width*16.5/21,height*7.55/8);

  text('S',width*8.5/21,height*7.55/8);
  text('P',width*9.5/21,height*7.55/8);
  text('A',width*10.5/21,height*7.55/8);
  text('C',width*11.5/21,height*7.55/8);
  text('E',width*12.5/21,height*7.55/8);
  
  //Animazione Cuore
  
  if(animationCuore===true) {
    // Animation speed, has to be bigger than 0
    radius += 100; 
    Wimg +=30;
    Himg+=42;
    soundCuore.isPlaying()
    
    // Calculate opacity
    var circleOpacity = map(radius,height/10,maxRadius,255,0);
    var imageOpacity= map(radius,height/10,maxRadius,50,255);
    
    // Draw ellipse
    fill(107,12,34, circleOpacity);
    noStroke();
    ellipse(width*1/6,height*2/8,radius);
    tint(255,imageOpacity)
    imageMode(CENTER)
    image(imgCuore, width*1/6, height*2/8,Wimg,Himg);
    
   
    // Reset animation when limit is reached
    if(radius > maxRadius) {
      radius = height/10;
      animationCuore = false;
    }
    if(Wimg > maxSizeimgW){
        Wimg=279/10;
    }
    if(Himg >maxSizeimgH){
        Himg=391/10;
    } 
  }
 
  //Animazione polmoni
  
  if(animationPolmoni===true) {
    //Animation speed, has to be bigger than 0
    radius += 100; 
    WimgP +=36;
    HimgP+=36;
    soundPolmoni.isPlaying()
    
    // Calculate opacity
    var circleOpacityP = map(radius,height/10,maxRadius,255,0);
    var imageOpacityP= map(radius,height/10,maxRadius,50,255);
    
    // Draw ellipse
    fill(199,68,74, circleOpacityP);
    noStroke();
    ellipse(width*5/6,height*2/8,radius)
    tint(255,imageOpacityP)
    imageMode(CENTER);
    image(imgPolmoni, width*5/6, height*2/8,WimgP,HimgP);
    
   
   // Reset animation when limit is reached
    if(radius > maxRadius) {
      radius = height/10;
      animationPolmoni = false;
    }
    if(WimgP > maxSizeimgWP){
        WimgP=400/10;
    }
    if(HimgP >maxSizeimgHP){
        HimgP=401/10;
    } 
  }
  
  //Animazione CIGLIA
  
  if(animationCiglia===true) {
    // Animation speed, has to be bigger than 0
    radius += 100; 
    WimgC +=30;
    HimgC+=25;
    soundCiglia.isPlaying()
    
    // Calculate opacity
    var circleOpacityC = map(radius,height/10,maxRadius,255,0);
    var imageOpacityC= map(radius,height/10,maxRadius,50,255);
    
    // Draw ellipse
    fill(2,66,76, circleOpacityC);
    noStroke();
    ellipse(width*4/6,height*4.7/8,radius)
    tint(255,imageOpacityC)
    imageMode(CENTER);
    image(imgCiglia, width*4/6, height*4.7/8,WimgC,HimgC);
    
   
   // Reset animation when limit is reached
    if(radius > maxRadius) {
      radius = height/10;
      animationCiglia = false;
    }
    if(WimgC > maxSizeimgWC){
        WimgP=400/10;
    }
    if(HimgC >maxSizeimgHC){
        HimgC=333/10;
    } 
  }
  
  //Animazione SANGUE
  
  if(animationSangue===true) {
    // Animation speed, has to be bigger than 0
    radius += 100; 
    WimgS +=36;
    HimgS+=57;
    soundSangue.isPlaying()
    
    // Calculate opacity
    var circleOpacityS = map(radius,height/10,maxRadius,255,0);
    var imageOpacityS= map(radius,height/10,maxRadius,50,255);
    
    // Draw ellipse
    fill(88,140,140, circleOpacityS);
    noStroke();
    ellipse(width*2/6,height*4.7/8,radius)
    tint(255,imageOpacityS)
    imageMode(CENTER);
    image(imgSangue, width*2/6, height*4.7/8,WimgS,HimgS);
    
   // Reset animation when limit is reached
    if(radius > maxRadius) {
      radius = height/10;
      animationSangue = false;
    }
    if(WimgS > maxSizeimgWS){
        WimgS=350/10;
    }
    if(HimgS >maxSizeimgHS){
        HimgS=563/10;
    } 
  }
  
  //Animazione dEG
  
  if(animationDeg===true) {
    // Animation speed, has to be bigger than 0
    radius += 100; 
    WimgD +=33;
    HimgD+=36;
    soundDeg.isPlaying()
    
    // Calculate opacity
    var circleOpacityD = map(radius,height/10,maxRadius,255,0);
    var imageOpacityD= map(radius,height/10,maxRadius,50,255);
    
    // Draw ellipse
    fill(204,203,96, circleOpacityD);
    noStroke();
    ellipse(width*3/6,height*2/8,radius)
    tint(255,imageOpacityD)
    imageMode(CENTER);
    image(imgDeg, width*3/6, height*2/8,WimgD,HimgD);
    
   
   // Reset animation when limit is reached
    if(radius > maxRadius) {
      radius = height/10;
      animationDeg = false;
    }
    if(WimgD > maxSizeimgWD){
        WimgD=332/10;
    }
    if(HimgD >maxSizeimgHD){
        HimgD=355/10;
    } 
  }

}

function keyPressed() {
  
 //lettera A

 if (keyCode === 65 && cuoreOn=== true) {
    // Update important variables
   animationCuore = true;
    radius = height/10;
    Himg=391/10;
    Wimg=279/10;
    soundCuore.play();
  } 
   //return false; // prevent default

 //lettera s
 
 if (keyCode == 83 && sangueOn === true) {
    // Update important variables
    animationSangue = true;
    radius = height/10;
    HimgS=563/10;
    WimgS=350/10;
    soundSangue.play();
  } 
  
 //LETTERA K

  if (keyCode == 75 && cigliaOn===true) {
    // Update important variables
    animationCiglia = true;
    radius = height/10;
    HimgC=333/10;
    WimgC=400/10;
    soundCiglia.play();
  } 
  
 //LETTERA L
 
  if (keyCode == 76 && polmoniOn===true) {
    // Update important variables
    animationPolmoni = true;
    radius = height/10;
    HimgP=400/10;
    WimgP=401/10;
    soundPolmoni.play();
  } 
   
 //SPACE
 
  if (keyCode == 32 && deglutizioneOn===true) {
    // Update important variables
    animationDeg = true;
    radius = height/10;
    HimgD=355/10;
    WimgD=332/10;
    soundDeg.play();
  } 

  return false; // prevent default
}