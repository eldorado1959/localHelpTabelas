class RespostaAtendimento {
  respostaId: number;
  chamadaId: number | null;
  tempoResposta: number | null;
  status: string | null;
  detalhes: string | null;

  constructor(
    respostaId: number,
    chamadaId: number | null = null,
    tempoResposta: number | null = null,
    status: string | null = null,
    detalhes: string | null = null
  ) {
    this.respostaId = respostaId;
    this.chamadaId = chamadaId;
    this.tempoResposta = tempoResposta;
    this.status = status;
    this.detalhes = detalhes;
  }

  // Método para exibir os detalhes da resposta de atendimento
  exibirDetalhes(): void {
    console.log(`ID da Resposta: ${this.respostaId}`);
    console.log(`ID da Chamada: ${this.chamadaId}`);
    console.log(`Tempo de Resposta: ${this.tempoResposta} minutos`);
    console.log(`Status: ${this.status}`);
    console.log(`Detalhes: ${this.detalhes}`);
  }

  // Método para atualizar o status da resposta
  atualizarStatus(novoStatus: string): void {
    this.status = novoStatus;
  }

  // Método para atualizar os detalhes da resposta
  atualizarDetalhes(novosDetalhes: string): void {
    this.detalhes = novosDetalhes;
  }
}
