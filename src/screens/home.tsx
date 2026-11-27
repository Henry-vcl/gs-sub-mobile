import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { obterOcorrencias } from '../services/storage';
import { Ocorrencia } from '../interfaces/ocorrencia';
import { OcorrenciaCard } from '../components/OcorrenciaCard';
import { styles } from '../styles/app.styles';

export function Home({ navigation }: any) {
  const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', carregarDados);
    return unsubscribe;
  }, [navigation]);

  async function carregarDados() {
    setLoading(true); setError(false);
    try {
      const dados = await obterOcorrencias();
      setOcorrencias(dados);
    } catch (e) { setError(true); } finally { setLoading(false); }
  }

  if (loading) return <View style={styles.centralizado}><ActivityIndicator size="large" color="#0284c7" /></View>;
  if (error) return <View style={styles.centralizado}><Text style={styles.erro}>Erro ao carregar os dados.</Text></View>;

  return (
    <View style={styles.container}>
      {ocorrencias.length === 0 ? (
        <View style={styles.centralizado}><Text style={styles.vazio}>Nenhuma ocorrência registrada no seu bairro.</Text></View>
      ) : (
        <FlatList
          data={ocorrencias}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <OcorrenciaCard ocorrencia={item} onPress={() => navigation.navigate('Detalhes', { ocorrencia: item })} />}
        />
      )}
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Formulario')}>
        <Text style={styles.textoBotao}>+ Registrar Ocorrência</Text>
      </TouchableOpacity>
    </View>
  );
}