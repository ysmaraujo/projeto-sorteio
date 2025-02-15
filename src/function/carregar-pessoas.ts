import fs from "fs";
import Pessoa from "../model/pessoa";

export default function carregarPessoas(arquivo: string): Pessoa[] {
  const conteudo = fs.readFileSync(arquivo, "utf8");
  const linhas = conteudo.split('\n');

  const pessoas = linhas
    .filter((l) => l.trim().length > 0)
    .map((linha) => {
      const [nome, email] = linha.split(";");
      return new Pessoa(nome, email);
  });

  return pessoas;
}

