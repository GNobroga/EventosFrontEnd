import Evento from "./Evento";

export default interface Lote {
 Id: number;
 nome: string;
 preco: number;
 dataInicio?: Date;
 dataFim?: Date;
 quantidade: number;
 eventoId: number;
 evento: Evento;
}
