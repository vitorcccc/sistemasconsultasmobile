/**
 * =============================================================================
 * TELA: MinhasConsultas
 * =============================================================================
 * 
 * Responsável: Victoria Moura (RM555474)
 * 
 * Tela de minhas consultas do paciente (em desenvolvimento)
 * 
 * =============================================================================
 */

import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/minhasConsultas.styles";

type MinhasConsultasProps = {
  onNavigateToAgendamento: () => void;
  onLogout: () => void;
};

export default function MinhasConsultas({ onNavigateToAgendamento, onLogout }: MinhasConsultasProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Minhas Consultas</Text>
        <Text style={styles.subtitulo}>Componente não utilizado na versão simplificada</Text>
      </View>
    </View>
  );
}