/**
 * =============================================================================
 * ESTILOS: ConsultasListScreen
 * =============================================================================
 * 
 * Responsável: Isadora Meneghetti (RM556326)
 * Tela: ConsultasListScreen
 * 
 * Estilos para a tela de listagem de consultas com filtros
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

  /** Container dos botões de filtro */
  filtros: {
    flexDirection: "row",
    padding: 16,
    gap: 8,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },

  /** Botão de filtro padrão */
  filtro: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
  },

  /** Botão de filtro ativo (selecionado) */
  filtroAtivo: {
    backgroundColor: "#79059C",
  },

  /** Texto do filtro padrão */
  filtroTexto: {
    fontSize: 14,
    color: "#666",
    fontWeight: "600",
  },

  /** Texto do filtro ativo */
  filtroTextoAtivo: {
    color: "#fff",
  },

  /** Container quando a lista está vazia */
  emptyContainer: {
    flex: 1,
  },
});

export default styles;