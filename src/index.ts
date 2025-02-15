import carregarPessoas from "./function/carregar-pessoas";
import sortearAzarado from "./function/sortear-azarado";
import terminal from "./ui/terminal";

const pessoas = carregarPessoas('src/data/dados.csv');
const azarado = sortearAzarado(pessoas);
console.log(azarado.toString())

terminal.white('\n\nO').brightRed(" AZARADO");
terminal.bold.brightGreen(' MAIS SORTUDO').white(" é: \n");
terminal.bold.brightYellow(azarado.toString());
terminal("\n\n 🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉")
console.log();