import { CategoriaZelaBairro, StatusOcorrencia } from "../types/categoria";

export interface Ocorrencia {
  id: string;
  titulo: string;
  categoria: CategoriaZelaBairro;
  orgaoResponsavel: string;
  endereco: string;
  referencia: string;
  urgencia: "Baixa" | "Média" | "Alta";
  descricao: string;
  protocolo?: string; 
  status: StatusOcorrencia;
}