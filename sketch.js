function setup() {
  createCanvas(800, 784);
  background(240, 240, 240);
}

function draw() {
  //quadrado vermelho
  fill(random(240, 250), 30, 2);
  stroke(0);
  strokeWeight(10);
  quad(0, 0, width/2.3, 0, width/2.3, height/2.5, 0, height/2.5);

  //dois retangulos brancos
  stroke(0);
  strokeWeight(10);
  line(0, 2*height/3.5, 800, 2*height/3.5);

//quadrado branco1
  stroke(0);
  strokeWeight(10);
  line(width/2.3, height/2.5, 800,height/2.5);

  //retangulo amarelo
  fill(random(235, 250), 221, 0)
  stroke(0);
  strokeWeight(8);
  quad(0, 2*height/3.5, width/8, 2*height/3.5, width/8, 784, 0, 784);

  //linha vertical quadrado azul
  stroke(0);
  strokeWeight(8);
  line(width/1.3, 2*height/3.5, width/1.3, 800);

  //quadrado azul
  fill(1, 39, random(110, 125));
  stroke(0);
  strokeWeight(10);
  quad(width/2.3, 2*height/3.5, width/1.3, 2*height/3.5, width/1.3, height/1.05, width/2.3, height/1.05);


  //linha divsoria vertical
  stroke(0);
  strokeWeight(8);
  line(width/2.3, 0, width/2.3, 800);

}
