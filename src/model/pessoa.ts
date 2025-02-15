export default class Pessoa {
  constructor(readonly nome: string, readonly email: string) {}

  get emailMascarado() {
    const regex = /(.{1,2})(.*)(@.*)/;
    return this.email.replace(regex, (_, g1, g2, g3) => {
      return g1 + "***" + g3;
    });
  }

  toString(): string {
    return `${this.nome} <${this.emailMascarado}>`;
  }
}