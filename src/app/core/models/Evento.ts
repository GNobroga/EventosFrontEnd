import Lote from "./Lote";
import PalestranteEvento from "./PalestranteEvento";
import RedeSocial from "./RedeSocial";

export default interface Evento {
   id: number;
   local: string;
   dataEvento?: Date;
   tema: string;
   qntPessoas: number;
   imageURL: string;
   telefone: string;
   email: string;
   lotes: Lote[];
   redesSociais: RedeSocial[];
   palestrantesEventos: PalestranteEvento[];
}
