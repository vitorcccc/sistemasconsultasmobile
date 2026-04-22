/**
 * =============================================================================
 * TELA: Login
 * =============================================================================
 * 
 * Responsável: Gustavo Ikeda (RM554718)
 * 
 * Tela de login (em desenvolvimento)
 * 
 * =============================================================================
 */

import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/login.styles";

type LoginProps = {
  onLoginSuccess: (tipo: "paciente" | "admin") => void;
  onNavigateToCadastro: () => void;
};

export default function Login({ onLoginSuccess, onNavigateToCadastro }: LoginProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>🏭 Sistema de Consultas</Text>
        <Text style={styles.subtitulo}>Componente não utilizado na versão simplificada</Text>
      </View>
    </View>
  );
}