import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ocorrencia } from '../interfaces/ocorrencia';
import { styles } from '../styles/app.styles';

interface Props {
  ocorrencia: Ocorrencia;
  onPress: () => void;
}

export function OcorrenciaCard({ ocorrencia, onPress }: Props) {
  
  const corStatus = ocorrencia.status === "Aberta" ? "#dc2626" : 
                    ocorrencia.status === "Resolvida" ? "#16a34a" : "#ca8a04";

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={[styles.statusBadge, { backgroundColor: corStatus }]}>
        <Text style={styles.statusTexto}>{ocorrencia.status.toUpperCase()}</Text>
      </View>
      <Text style={styles.titulo}>{ocorrencia.titulo}</Text>
      <Text style={styles.texto}>Categoria: {ocorrencia.categoria}</Text>
      <Text style={styles.texto}>Endereço: {ocorrencia.endereco}</Text>
    </TouchableOpacity>
  );
}