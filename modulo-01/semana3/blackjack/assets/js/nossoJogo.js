import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


 console.log("Bem-vindo ao jogo blackjack");

 function jogar() {
   if(confirm("Deseja jogar uma rodada?")) {
      let cartasPC = [];
      let cartasJogador = [];
      let totalPtsPC = 0;
      let totalPtsJogador = 0;
     
      
      // Sortear cartas do computador
      cartasPC.push(comprarCarta());
      cartasPC.push(comprarCarta());
     
      // Sortear cartas do jogador
      cartasJogador.push(comprarCarta());
      cartasJogador.push(comprarCarta());
     
      for(let i = 0; i < cartasPC.length; i++) {
         totalPtsPC += cartasPC[i].valor;
      }
      
      for(let i = 0; i < cartasJogador.length; i++) {
        totalPtsJogador += cartasJogador[i].valor;
     }
     
     console.log("-------- RESULTADO ---------");
     console.log("Cartas dá máquina: ");
     console.log(cartasPC[0].texto + ' ' + cartasPC[1].texto);
     console.log("TOTAL DE PONTOS DA MÁQUINA:");
     console.log(totalPtsPC);
     console.log("--------------------------------");
     console.log("Suas cartas: ");
     console.log(cartasJogador[0].texto + ' ' + cartasJogador[1].texto);
     console.log("SEUS PONTOS:");
     console.log(totalPtsJogador);
     console.log("--------------------------------");
     if(totalPtsPC > totalPtsJogador) {
        console.log("A máquina venceu!");
     } else if(totalPtsJogador > totalPtsPC) {
        console.log("Você venceu!");
     } else {
        console.log("Empatou!");
     }
   } else {
      console.log("O jogo acabou!");
   }
 }

