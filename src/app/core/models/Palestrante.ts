import PalestranteEvento from "./PalestranteEvento";
import RedeSocial from "./RedeSocial";

export default interface Palestrante {
    id: number;
    nome: string;
    miniCurriculo: string;
    telefone: string;
    email: string;
    redesSociais: RedeSocial[];
    palestrantesEventos: PalestranteEvento[];
}
