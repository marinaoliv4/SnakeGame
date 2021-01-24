let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); /*desenha o que vai acontecer no canvas */
let box = 32; /*32px */

function criarBG() { /* criar background*/
      context.fillStyle = "lightgreen"; /*estilo */
      context.fillRect(0, 0, 16 * box, 16 * box); /*desenho do retangulo onde vai acontecer o jogo*/
}

criarBG()