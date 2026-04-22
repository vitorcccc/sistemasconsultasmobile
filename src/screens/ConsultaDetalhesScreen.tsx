import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert, StyleSheet } from "react-native";

type ConsultaDetalhesScreenProps = {
  navigation: any;
  route: any;
};

export default function ConsultaDetalhesScreen({ navigation, route }: ConsultaDetalhesScreenProps) {
  const { consultaId } = route.params;
  const [consulta, setConsulta] = useState<any>(null);

  useEffect(() => {
    // Dados mockados para teste (substitua pelos dados reais depois)
    setConsulta({
      id: consultaId,
      pacienteNome: "Carlos Andrade",
      medicoNome: "Dr. Roberto Silva",
      especialidade: "Cardiologia",
      data: "10/03/2026",
      horario: "09:00",
      status: "agendada",
      observacoes: "Consulta de rotina para acompanhamento cardíaco",
    });
  }, [consultaId]);

  function handleConfirmar() {
    Alert.alert(
      "Confirmar Consulta",
      "Deseja confirmar esta consulta?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Confirmar",
          onPress: () => {
            Alert.alert("Sucesso", "Consulta confirmada com sucesso!");
          },
        },
      ]
    );
  }

  function handleCancelar() {
    Alert.alert(
      "Cancelar Consulta",
      "Tem certeza que deseja cancelar esta consulta?",
      [
        { text: "Não", style: "cancel" },
        {
          text: "Sim, cancelar",
          style: "destructive",
          onPress: () => {
            Alert.alert("Sucesso", "Consulta cancelada com sucesso!");
          },
        },
      ]
    );
  }

  if (!consulta) {
    return (
      <View style={styles.centered}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        {/* Badge de Status */}
        <View style={[styles.badge, { backgroundColor: "#FFA500" }]}>
          <Text style={styles.badgeText}>{consulta.status.toUpperCase()}</Text>
        </View>

        {/* Paciente */}
        <Text style={styles.label}>👤 Paciente</Text>
        <Text style={styles.value}>{consulta.pacienteNome}</Text>

        {/* Médico */}
        <Text style={styles.label}>👨‍⚕️ Médico</Text>
        <Text style={styles.value}>{consulta.medicoNome}</Text>
        <Text style={styles.subValue}>{consulta.especialidade}</Text>

        {/* Data e Horário */}
        <Text style={styles.label}>📅 Data</Text>
        <Text style={styles.value}>{consulta.data}</Text>

        <Text style={styles.label}>⏰ Horário</Text>
        <Text style={styles.value}>{consulta.horario}</Text>

        {/* Observações */}
        {consulta.observacoes && (
          <>
            <Text style={styles.label}>📝 Observações</Text>
            <Text style={styles.obsValue}>{consulta.observacoes}</Text>
          </>
        )}

        {/* Botões */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.buttonConfirm]} onPress={handleConfirmar}>
            <Text style={styles.buttonText}>✓ Confirmar Consulta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.buttonCancel]} onPress={handleCancelar}>
            <Text style={styles.buttonText}>✕ Cancelar Consulta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    margin: 16,
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 16,
  },
  badgeText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
    textTransform: "uppercase",
  },
  label: {
    fontSize: 12,
    color: "#666",
    marginTop: 12,
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },
  subValue: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  obsValue: {
    fontSize: 14,
    color: "#555",
    fontStyle: "italic",
    marginTop: 4,
  },
  buttonContainer: {
    marginTop: 24,
    gap: 12,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonConfirm: {
    backgroundColor: "#4CAF50",
  },
  buttonCancel: {
    backgroundColor: "#F44336",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});