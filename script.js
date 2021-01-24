let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); /*desenha o que vai acontecer no canvas */
let box = 32; /*32px */
let snake =[];
snake[0] = {
  x: 8 * box,
  y: 8 * box
}

function criarBG() { /* criar background*/
      context.fillStyle = "lightgreen"; /*estilo */
      context.fillRect(0, 0, 16 * box, 16 * box); /*desenho do retangulo onde vai acontecer o jogo*/
}

function criarCobrinha() {
      for(i=0; i <snake.length; i++){
          context.fillStyle = "green";
          context.fillRect(snake[i].x, snake[i].y, box, box);
      }

}


criarBG();
criarCobrinha();

/*adicionar um elemento e retirar o ultimo*/