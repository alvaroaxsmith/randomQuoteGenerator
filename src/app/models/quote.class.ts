export class Quote {
  public frase: string;
  public autor: string;
  public livro: string;

  constructor(frase: string, autor: string, livro: string) {
    this.frase = frase;
    this.autor = autor;
    this.livro = livro;
  }
}
