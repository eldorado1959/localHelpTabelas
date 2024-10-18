

class ChamadasEmergencia {
  chamadaId: number;
  usuarioId: number | null;
  servicoId: number | null;
  localizacaoId: number | null;
  dataHora: Date | null;
  descricao: string | null;

  constructor(
    chamadaId: number,
    usuarioId: number | null = null,
    servicoId: number | null = null,
    localizacaoId: number | null = null,
    dataHora: Date | null = null,
    descricao: string | null = null
  ) {
    this.chamadaId = chamadaId;
    this.usuarioId = usuarioId;
    this.servicoId = servicoId;
    this.localizacaoId = localizacaoId;
    this.dataHora = dataHora;
    this.descricao = descricao;
  }

  // Método para exibir as informações da chamada
  exibirDetalhes(): void {
    console.log(`ID da Chamada: ${this.chamadaId}`);
    console.log(`ID do Usuário: ${this.usuarioId}`);
    console.log(`ID do Serviço: ${this.servicoId}`);
    console.log(`ID da Localização: ${this.localizacaoId}`);
    console.log(`Data e Hora: ${this.dataHora}`);
    console.log(`Descrição: ${this.descricao};
    }
  }

