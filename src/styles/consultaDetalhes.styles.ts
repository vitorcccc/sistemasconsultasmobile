/**
 * =============================================================================
 * ESTILOS: ConsultaDetalhesScreen
 * =============================================================================
 * 
 * Responsável: Isadora Meneghetti (RM556326)
 * Tela: ConsultaDetalhesScreen
 * 
 * Estilos para a tela de detalhes da consulta
 * 
 * =============================================================================
 */

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  /** Container principal da tela */
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  /** Container do ScrollView com padding */
  scrollContent: {
    padding: 20,
  },

  /** Badge de status da consulta */
  statusBadge: {
    alignSelf: "center",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    marginBottom: 24,
  },

  /** Texto do status */
  statusTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
  },

  /** Cada seção da tela (Paciente, Médico, Agendamento) */
  secao: {
    marginBottom: 20,
  },

  /** Título da seção */
  secaoTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },

  /** Card de informação */
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  /** Linha horizontal para informações lado a lado */
  row: {
    flexDirection: "row",
    gap: 16,
  },

  /** Coluna para informações lado a lado */
  coluna: {
    flex: 1,
  },

  /** Label da informação (ex: "Data", "Horário") */
  label: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },

  /** Valor da informação */
  valor: {
    fontSize: 18,
    color: "#333",
    fontWeight: "600",
  },

  /** Observações da consulta */
  observacoes: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
  },

  /** Container dos botões de ação */
  acoes: {
    gap: 12,
    marginTop: 12,
  },

  /** Botão padrão */
  botao: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  /** Botão confirmar (verde) */
  botaoConfirmar: {
    backgroundColor: "#4CAF50",
  },

  /** Botão cancelar (vermelho) */
  botaoCancelar: {
    backgroundColor: "#F44336",
  },

  /** Texto do botão */
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;