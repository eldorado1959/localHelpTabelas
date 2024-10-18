class ServicosEmergencia {
  servicoId: number;
  nomeServico: string | null;
  descricao: string | null;
  telefone: string | null;

  constructor(
    servicoId: number,
    nomeServico: string | null = null,
    descricao: string | null = null,
    telefone: string | null = null
  ) {
    this.servicoId = servicoId;
    this.nomeServico = nomeServico;
    this.descricao = descricao;
    this.telefone = telefone;
  }

  // Método para exibir detalhes do serviço de emergência
  exibirDetalhes(): void {
    console.log

    