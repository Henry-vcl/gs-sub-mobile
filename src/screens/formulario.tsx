import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { criarOcorrencia, editarOcorrencia } from '../services/storage';
import { CategoriaZelaBairro, StatusOcorrencia } from '../types/categoria';
import { styles } from '../styles/app.styles';

export function Formulario({ route, navigation }: any) {
  const ocorrenciaEdicao = route.params?.ocorrencia;

  const [titulo, setTitulo] = useState(ocorrenciaEdicao?.titulo || '');
  const [categoria, setCategoria] = useState(ocorrenciaEdicao?.categoria || 'Iluminação');
  const [endereco, setEndereco] = useState(ocorrenciaEdicao?.endereco || '');
  const [descricao, setDescricao] = useState(ocorrenciaEdicao?.descricao || '');
  const [status, setStatus] = useState(ocorrenciaEdicao?.status || 'Aberta');

  async function salvar() {
    if (!titulo || !endereco) return Alert.alert("Erro", "Título e Endereço são obrigatórios.");

    const dados = {
      titulo,
      categoria: categoria as CategoriaZelaBairro,
      orgaoResponsavel: "Prefeitura",
      endereco,
      referencia: "",
      urgencia: "Média" as "Média",
      descricao,
      status: status as StatusOcorrencia
    };

    if (ocorrenciaEdicao) {
      await editarOcorrencia({ ...dados, id: ocorrenciaEdicao.id });
    } else {
      await criarOcorrencia(dados);
    }
    navigation.goBack();
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>O que aconteceu? (Ex: Poste apagado)</Text>
      <TextInput style={styles.input} value={titulo} onChangeText={setTitulo} />

      <Text style={styles.titulo}>Categoria (Iluminação, Asfalto, Lixo/Descarte)</Text>
      <TextInput style={styles.input} value={categoria} onChangeText={setCategoria} />

      <Text style={styles.titulo}>Endereço do problema</Text>
      <TextInput style={styles.input} value={endereco} onChangeText={setEndereco} />

      <Text style={styles.titulo}>Descrição detalhada</Text>
      <TextInput style={styles.input} value={descricao} onChangeText={setDescricao} multiline numberOfLines={3} />

      {ocorrenciaEdicao && (
        <>
          <Text style={styles.titulo}>Status (Aberta, Em Andamento, Resolvida)</Text>
          <TextInput style={styles.input} value={status} onChangeText={setStatus} />
        </>
      )}

      <TouchableOpacity style={styles.botao} onPress={salvar}>
        <Text style={styles.textoBotao}>Salvar Ocorrência</Text>
      </TouchableOpacity>
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}