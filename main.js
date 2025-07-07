class Jogo {
  constructor(titulo, preco, plataforma) {
    if (this.constructor === Jogo) {
      throw new Error("Classe abstrata não pode ser instanciada diretamente.");
    }
    this.titulo = titulo;
    this.preco = preco;
    this.plataforma = plataforma;
  }

  exibirDetalhes() {
    console.log(`${this.titulo} - ${this.plataforma} - R$${this.preco}`);
  }
}

// Jogo fisico
class JogoFisico extends Jogo {
  constructor(titulo, preco, plataforma, estoque) {
    super(titulo, preco, plataforma);
    this.estoque = estoque;
  }

  exibirDetalhes() {
    super.exibirDetalhes();
    console.log(`Tipo: Físico | Estoque: ${this.estoque} unidades`);
  }
}

//jogo digital
class JogoDigital extends Jogo {
  constructor(titulo, preco, plataforma, tamanhoDownload) {
    super(titulo, preco, plataforma);
    this.tamanhoDownload = tamanhoDownload;
  }

  exibirDetalhes() {
    super.exibirDetalhes();
    console.log(`Tipo: Digital | Tamanho: ${this.tamanhoDownload} GB`);
  }
}





const jogo1 = new JogoFisico("The Last of Us", 199.9, "PlayStation 4", 15);
const jogo2 = new JogoDigital("Uncharted 4", 149.9, "PlayStation 4", 45);
const jogo3 = new JogoFisico("God of War Ragnarokk", 179.9, "PlayStation 5", 10);


jogo1.exibirDetalhes();
console.log("--------------------");
jogo2.exibirDetalhes();
console.log("--------------------");
jogo3.exibirDetalhes();
