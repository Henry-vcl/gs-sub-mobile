import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ocorrencia } from '../interfaces/ocorrencia';

const KEY = '@zelabairro_ocorrencias';

// CREATE
export async function criarOcorrencia(nova: Omit<Ocorrencia, 'id'>): Promise<void> {
  try {
    const ocorrencias = await obterOcorrencias();
    const novaOcorrencia = { ...nova, id: Date.now().toString() };
    await AsyncStorage.setItem(KEY, JSON.stringify([...ocorrencias, novaOcorrencia]));
  } catch (erro) {
    console.error("Erro ao salvar ocorrência:", erro);
  }
}

// READ
export async function obterOcorrencias(): Promise<Ocorrencia[]> {
  try {
    const dados = await AsyncStorage.getItem(KEY);
    return dados ? JSON.parse(dados) : [];
  } catch (erro) {
    console.error("Erro ao obter ocorrências:", erro);
    return [];
  }
}

// UPDATE
export async function editarOcorrencia(editada: Ocorrencia): Promise<void> {
  try {
    const ocorrencias = await obterOcorrencias();
    const atualizadas = ocorrencias.map(o => o.id === editada.id ? editada : o);
    await AsyncStorage.setItem(KEY, JSON.stringify(atualizadas));
  } catch (erro) {
    console.error("Erro ao editar ocorrência:", erro);
  }
}

// DELETE
export async function excluirOcorrencia(id: string): Promise<void> {
  try {
    const ocorrencias = await obterOcorrencias();
    const filtradas = ocorrencias.filter(o => o.id !== id);
    await AsyncStorage.setItem(KEY, JSON.stringify(filtradas));
  } catch (erro) {
    console.error("Erro ao excluir ocorrência:", erro);
  }
}