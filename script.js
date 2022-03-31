let Leonardo = {nome:"Leonardo", vitórias:2, empates:1, derrotas:1, pontos:0}
let Julia = {nome:"Julia", vitórias: 4, empates:5, derrotas: 2, pontos:2}
let Yasmin = {nome:"Yasmin", vitórias: 6, empates:4, derrotas: 2, pontos:5}

calculaPontos(Leonardo)

function calculaPontos(jogador) {
let pontos = (jogador.vitórias * 3) + jogador.empates
return pontos;
}
Leonardo.pontos = calculaPontos(Leonardo)
Julia.pontos = calculaPontos(Julia)
Yasmin.pontos = calculaPontos(Yasmin)

let Jogadores = [Leonardo, Julia, Yasmin]

function exibeJogadoresNaTela(Jogadores) {
    let elemento =""
    for (let i =0; i < Jogadores.length; i++ ) {
        elemento+= "<tr><td>"+ Jogadores[i].nome+"</td>"
        elemento+="<td>"+Jogadores[i].vitórias+"</td>"
        elemento+="<td>"+Jogadores[i].empates+"</td>"
        elemento+="<td>"+Jogadores[i].derrotas+"</td>"
        elemento+="<td>"+Jogadores[i].pontos+"</td>"
        elemento +=
        "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
      elemento +=
        "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
      elemento +=
        "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
      elemento += "</tr>";
    }
  
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
  }
  
  exibeJogadoresNaTela(Jogadores);
  
  function adicionarVitoria(i) {
    var jogador = Jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(Jogadores);
  }
  
  function adicionarEmpate(i) {
    var jogador = Jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(Jogadores);
  }
  
  function adicionarDerrota(i) {
    var jogador = Jogadores[i];
    jogador.derrotas++;
    exibeJogadoresNaTela(Jogadores);
  }
  