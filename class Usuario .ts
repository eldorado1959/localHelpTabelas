class Usuario {
  cpfUsuario: number | null;
  usuarioId: number;
  nome: string | null;
  idade: string | null;
  sexo: string | null;
  peso: number | null;
  altura: number | null;
  observacao: string | null;
  telefone: string | null;
  email: string | null;
  endereco: string | null;
  cidade: string | null;
  estado: string | null;

  constructor(
    usuarioId: number,
    cpfUsuario: number | null = null,
    nome: string | null = null,
    idade: string | null = null,
    sexo: string | null = null,
    peso: number | null = null,
    altura: number | null = null,
    observacao: string | null = null,
    telefone: string | null = null,
    email: string | null = null,
    endereco: string | null = null,
    cidade: string | null = null,
    estado: string | null = null
  ) {
    this.cpfUsuario = cpfUsuario;
    this.usuarioId = usuarioId;
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.observacao = observacao;
    this.telefone = telefone;
    this.email = email;
    this.endereco = endereco;
    this.cidade = cidade;
    this.estado = estado;
  }

  // Método para exibir detalhes do usuário
  exibirDetalhes(): void {
    console.log(`ID do Usuário: ${this.usuarioId}`);
    console.log(`CPF do Usuário: ${this.cpfUsuario}`);
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade}`);
    console.log(`Sexo: ${this.sexo}`);
    console.log(`Peso: ${this.peso}`);
    console.log(`Altura: ${this.altura}`);
    console.log(`Observação: ${this.observacao}`);
    console.log(`Telefone: ${this.telefone}`);
    console.log(`Email: ${this.email}`);
    console.log(`Endereço: ${this.endereco}`);
    console.log(`Cidade: ${this.cidade}`);
    console.log(`Estado: ${this.estado}`);
  }

  // Método para atualizar o endereço do usuário
  atualizarEndereco(novoEndereco: string, novaCidade: string, novoEstado: string): void {
    this.endereco = novoEndereco;
    this.cidade = novaCidade;
    this.estado = novoEstado;
  }

  // Método para atualizar o contato do usuário
  atualizarContato(novoTelefone: string, novoEmail: string): void {
    this.telefone = novoTelefone;
    this.email = novoEmail;
  }

  // Método para atualizar as características físicas do usuário
  atualizarCaracteristicasFisicas(novoPeso: number, novaAltura: number): void {
    this.peso = novoPeso;
    this.altura = novaAltura;
  }
}
