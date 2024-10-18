class Localizacoes {
  localizacaoId: number;
  latitude: number | null;
  longitude: number | null;
  endereco: string | null;
  cidade: string | null;
  estado: string | null;
  pais: string | null;

  constructor(
    localizacaoId: number,
    latitude: number | null = null,
    longitude: number | null = null,
    endereco: string | null = null,
    cidade: string | null = null,
    estado: string | null = null,
    pais: string | null = null
  ) {
    this.localizacaoId = localizacaoId;
    this.latitude = latitude;
    this.longitude = longitude;
    this.endereco = endereco;
    this.cidade = cidade;
    this.estado = estado;
    this.pais = pais;
  }

  // Método para exibir os detalhes da localização
  exibirDetalhes(): void {
    console.log(`ID da Localização: ${this.localizacaoId}`);
    console.log(`Latitude: ${this.latitude}`);
    console.log(`Longitude: ${this.longitude}`);
    console.log(`Endereço: ${this.endereco}`);
    console.log(`Cidade: ${this.cidade}`);
    console.log(`Estado: ${this.estado}`);
    console.log(`País: ${this.pais}`);
  }

  // Método para atualizar a localização (latitude e longitude)
  atualizarCoordenadas(novaLatitude: number, novaLongitude: number): void {
    this.latitude = novaLatitude;
    this.longitude = novaLongitude;
  }

  // Método para atualizar o endereço completo
  atualizarEndereco(
    novoEndereco: string,
    novaCidade: string,
    novoEstado: string,
    novoPais: string
  ): void {
    this.endereco = novoEndereco;
    this.cidade = novaCidade;
    this.estado = novoEstado;
    this.pais = novoPais;
  }
}
