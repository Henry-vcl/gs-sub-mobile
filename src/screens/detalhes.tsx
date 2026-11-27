import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { excluirOcorrencia } from '../services/storage';
import { styles } from '../styles/app.styles';

export function Detalhes({ route, navigation }: any) {
  const { ocorrencia } = route.params;

  async function deletar() {
    await excluirOcorrencia(ocorrencia.id);
    navigation.navigate('Home');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>{ocorrencia.titulo}</Text>
        <Text style={styles.texto}>Status Atual: {ocorrencia.status}</Text>
        <Text style={styles.texto}>Categoria: {ocorrencia.categoria}</Text>
        <Text style={styles.texto}>Órgão: {ocorrencia.orgaoResponsavel}</Text>
        <Text style={styles.texto}>Endereço: {ocorrencia.endereco}</Text>
        {ocorrencia.referencia ? (
          <Text style={styles.texto}>Referência: {ocorrencia.referencia}</Text>
        ) : null}
        <Text style={styles.texto}>Urgência: {ocorrencia.urgencia}</Text>
        {ocorrencia.protocolo ? (
          <Text style={styles.texto}>Protocolo: {ocorrencia.protocolo}</Text>
        ) : null}
        {ocorrencia.descricao ? (
          <Text style={[styles.texto, { marginTop: 10, fontStyle: 'italic' }]}>
            "{ocorrencia.descricao}"
          </Text>
        ) : null}
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Formulario', { ocorrencia })}
      >
        <Text style={styles.textoBotao}>Editar / Atualizar Status</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoExcluir} onPress={deletar}>
        <Text style={styles.textoBotao}>Excluir Registro</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}