/**
 * =============================================================================
 * TELA: CadastroPaciente
 * =============================================================================
 * 
 * Responsável: Victoria Moura (RM555474)
 * 
 * Tela de cadastro de paciente (em desenvolvimento)
 * 
 * =============================================================================
 */

import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/cadastroPaciente.styles";

type CadastroPacienteProps = {
  onCadastroSuccess: () => void;
  onVoltar: () => void;
};

export default function CadastroPaciente({ onCadastroSuccess, onVoltar }: CadastroPacienteProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>📝 Cadastro de Paciente</Text>
        <Text style={styles.subtitulo}>Componente não utilizado na versão simplificada</Text>
      </View>
    </View>
  );
}