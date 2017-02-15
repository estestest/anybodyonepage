var d= 0;
var Wimgn,Himgn,maxSizeimgWn,maxSizeimgHn;
var rand=0;
var soundPugno
var soundStarnuto
var soundTosse
var system

function preload(){
pugno=loadImage("Punch.png");
bocca=loadImage("Mouth.png");
naso =loadImage("Nose.png");
soundPugno=loadSound("pugno.mp3");
soundStarnuto=loadSound("starnuto.mp3");
soundTosse=loadSound("tosse.mp3");


sfondo=loadImage("sfondo.png");
}

function touchEnded() {
  if (d>66 && d<85) {
  animationPugno =true;
  soundPugno.play();
  fill(120,38,40);
  noStroke();
  rect(409,635,9,15);
  }
  if (d>287 && d<297){
  animationBocca=true;
  soundTosse.play();
  }
  if (d>537 && d<550){
  animationNaso=true;
  soundStarnuto.play();
  }
}

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};


 
 var Particle = function(position) {

  this.acceleration = createVector(0, 1);
  this.velocity = createVector(random(-200, 200), random(-200,200));
  this.position = position.copy();
  this.lifespan = 255.0;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display


// Is the particle still useful?
Particle.prototype.isDead = function(){
  if (this.lifespan < 50) {
    return true;
  } else {
    return false;
  }
};


ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 9);
    }
  }
}



function setup(){

  angleMode (DEGREES);
  frameRate(80);
  Wimgn=1/2+200;
  Himgn=1/2+200;
  maxSizeimgHn=285;
  maxSizeimgWn=285;
  animationPugno = false;
  animationBocca = false;
  animationNaso = false;
  system = new ParticleSystem(createVector(640, 350));
}

function draw() {
  createCanvas(1280,740);
  background(150);
  imageMode(CENTER);
  image(sfondo,width/2,height/2,1280,740);
  
  if (mouseIsPressed){
  d= d+1;
  if(d>583){
  d=0;
  }
  }
  
  push(); 
  if (animationPugno===true){
  frameRate(20);
  
  system.addParticle();
  Particle.prototype.display = function() {
  noStroke();
  fill(88,140,140, this.lifespan);
  //rotate(45);
  rect(this.position.x, this.position.y, 20,20);
  };
  system.run();
 
  Wimgn+=10;
  Himgn+=10;
  imageMode(CENTER);
  image(pugno,width/2,height/2,Wimgn,Himgn);
  //rand+= random(-5,5)
  if(Wimgn > maxSizeimgWn){
  Wimgn=1/2+200;
  }
  if(Himgn >maxSizeimgHn){
  Himgn=1/2+200;
  animationPugno = false;
  }
  soundPugno.isPlaying();
  }
  pop();
    
  push(); 
  if (animationBocca===true){
  frameRate(20);
 
  system.addParticle();
  Particle.prototype.display = function() {
  noStroke();
  fill(107,12,34, this.lifespan);
  rectMode(CENTER)
  rect(this.position.x, this.position.y, 40, 80);
  };
  system.run();

  Wimgn+=10;
  Himgn+=10;
  imageMode(CENTER);
  image(bocca,width/2,height/2,Wimgn,Himgn);
  if(Wimgn > maxSizeimgWn){
  Wimgn=1/2+200;
  }
  if(Himgn >maxSizeimgHn){
  Himgn=1/2+200;
  animationBocca = false;
  }
  soundTosse.isPlaying();
  }
  pop();

  push(); 
  if (animationNaso===true){
  frameRate(20);
  Wimgn+=10;
  Himgn+=10;
  imageMode(CENTER);
  image(naso,width/2,height/2,Wimgn,Himgn);
  
  system.addParticle();
  Particle.prototype.display = function() {
  noStroke();
  fill(204,203,96, this.lifespan);
  ellipse(this.position.x, this.position.y, 30, 30);
  };
  system.run();
  
  if(Wimgn > maxSizeimgWn){
  Wimgn=1/2+200;
  }
  if(Himgn >maxSizeimgHn){
  Himgn=1/2+200;
  animationNaso = false;
  }
  soundStarnuto.isPlaying();
  }
  pop();
  
  noStroke();
  if (mouseIsPressed){
  frameRate(50);
  fill(255);
  rect(342, 633, d, 17);
  if (d>67 && d<80){
  fill(88,140,140);
  rect(342, 633, d, 17);
  }
  if(d>287 && d<297){
  fill(107,12,34);
  rect(342,633,d,17);
  }
  if(d>537 && d<550){
  fill(204,203,96);
  rect(342,633,d,17);
  }
  }else{
  rect(342, 633, 0, 17);
  d=0;
  }
  
  
  return false;
}