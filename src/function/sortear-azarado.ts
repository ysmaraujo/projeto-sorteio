import Pessoa from "../model/pessoa";

export default function sortearAzarado(pessoas: Pessoa[]): Pessoa {
  let restantes = [...pessoas];

  for (let i = 0; i < pessoas.length; i++) {
    restantes = todosMenosUm(restantes);
  }
  return restantes[0];
}
// pessoas: Pessoa[] sempre vai ser array novo pq sempre vai tirar um sorteado
function todosMenosUm(pessoas: Pessoa[]): Pessoa[] {
  if (pessoas.length === 1) return pessoas;

  //Math.floor - arredonda pra baixo
  //Math.random - vai gerar numeros aleatórios de 0 - 1 e quando multiplica por pessoas.length, ele multiplica por 200 gerando numeros aleatorios de 0 - 200
  const sorteado = Math.floor(Math.random() * pessoas.length)
  // sorteado é o indice do sortudo que vai sair do sorteio
  // splice vai tirar o sorteado e a quantidade vai ser 1. Vai retornar esse valor e vai ter um novo array sem o sortudo
  return pessoas.splice(sorteado, 1)
}