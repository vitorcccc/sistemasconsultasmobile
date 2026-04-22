/**
 * =============================================================================
 * TELA: ConsultasListScreen
 * =============================================================================
 * 
 * Responsável: Isadora Meneghetti (RM556326)
 * 
 * Lista de consultas com filtros por status
 * 
 * Funcionalidades:
 * - Exibir todas as consultas
 * - Filtrar por status (Todas, Agendadas, Confirmadas)
 * - Navegar para detalhes da consulta
 * - Confirmar ou cancelar consulta
 * 
 * =============================================================================
 */

import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Consulta, StatusConsulta } from "../types";
import { ConsultaCard, Loading, EmptyState } from "../components";
import { consultasService } from "../services/consultasService";
import styles from "../styles/consultasList.styles";

type ConsultasListScreenProps = {
  navigation: any;
};

export default function ConsultasListScreen({ navigation }: ConsultasListScreenProps) {
  /** Estado que armazena a lista de consultas */
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  
  /** Estado de carregamento (exibe loading enquanto busca dados) */
  const [loading, setLoading] = useState(true);
  
  /** Estado do filtro ativo (qual status está selecionado) */
  const [filtroAtivo, setFiltroAtivo] = useState<StatusConsulta | "todas">("todas");

  /** useEffect executa ao montar o componente para carregar as consultas */
  useEffect(() => {
    carregarConsultas();
  }, []);

  /**
   * Carrega as consultas do service
   */
  async function carregarConsultas() {
    setLoading(true);
    try {
      const dados = await consultasService.listarConsultas();
      setConsultas(dados);
    } catch (error) {
      console.error("Erro ao carregar consultas:", error);
    } finally {
      setLoading(false);
    }
  }

  /**
   * Confirma uma consulta pelo ID
   * @param id - ID da consulta a ser confirmada
   */
  async function handleConfirmar(id: number) {
    try {
      await consultasService.confirmarConsulta(id);
      carregarConsultas(); // Recarrega a lista após confirmar
    } catch (error) {
      console.error("Erro ao confirmar consulta:", error);
    }
  }

  /**
   * Cancela uma consulta pelo ID
   * @param id - ID da consulta a ser cancelada
   */
  async function handleCancelar(id: number) {
    try {
      await consultasService.cancelarConsulta(id);
      carregarConsultas(); // Recarrega a lista após cancelar
    } catch (error) {
      console.error("Erro ao cancelar consulta:", error);
    }
  }

  /**
   * Navega para a tela de detalhes da consulta
   * @param id - ID da consulta
   */
  function handleDetalhes(id: number) {
    navigation.navigate("ConsultaDetalhes", { consultaId: id });
  }

  /** Filtra as consultas baseado no filtro ativo */
  const consultasFiltradas = filtroAtivo === "todas"
    ? consultas
    : consultas.filter((c) => c.status === filtroAtivo);

  /** Exibe loading enquanto carrega */
  if (loading) {
    return <Loading mensagem="Carregando consultas..." />;
  }

  return (
    <View style={styles.container}>
      {/* Filtros */}
      <View style={styles.filtros}>
        <TouchableOpacity
          style={[styles.filtro, filtroAtivo === "todas" && styles.filtroAtivo]}
          onPress={() => setFiltroAtivo("todas")}
        >
          <Text style={[styles.filtroTexto, filtroAtivo === "todas" && styles.filtroTextoAtivo]}>
            Todas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.filtro, filtroAtivo === "agendada" && styles.filtroAtivo]}
          onPress={() => setFiltroAtivo("agendada")}
        >
          <Text style={[styles.filtroTexto, filtroAtivo === "agendada" && styles.filtroTextoAtivo]}>
            Agendadas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.filtro, filtroAtivo === "confirmada" && styles.filtroAtivo]}
          onPress={() => setFiltroAtivo("confirmada")}
        >
          <Text style={[styles.filtroTexto, filtroAtivo === "confirmada" && styles.filtroTextoAtivo]}>
            Confirmadas
          </Text>
        </TouchableOpacity>
      </View>

      {/* Lista de Consultas com FlatList */}
      <FlatList
        data={consultasFiltradas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ConsultaCard
            consulta={item}
            onConfirmar={handleConfirmar}
            onCancelar={handleCancelar}
            onDetalhes={handleDetalhes}
          />
        )}
        contentContainerStyle={consultasFiltradas.length === 0 && styles.emptyContainer}
        ListEmptyComponent={
          <EmptyState
            mensagem={filtroAtivo === "todas"
              ? "Você ainda não possui consultas"
              : `Nenhuma consulta ${filtroAtivo}`}
            icone="📅"
          />
        }
      />
    </View>
  );
}