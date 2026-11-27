import { Ocorrencia } from "../interfaces/ocorrencia";

export type RootStackParamList = {
  Home: undefined;
  Formulario: { ocorrencia?: Ocorrencia };
  Detalhes: { ocorrencia: Ocorrencia };
};