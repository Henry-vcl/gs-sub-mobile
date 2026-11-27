import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f4f5", padding: 20 },
  card: { backgroundColor: "#fff", padding: 16, borderRadius: 8, marginBottom: 12, elevation: 2 },
  titulo: { fontSize: 18, fontWeight: "bold", color: "#333", marginBottom: 4 },
  texto: { fontSize: 14, color: "#666", marginBottom: 4 },
  statusBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4, alignSelf: "flex-start", marginBottom: 8 },
  statusTexto: { color: "#fff", fontWeight: "bold", fontSize: 12 },
  input: { backgroundColor: "#fff", borderWidth: 1, borderColor: "#ccc", padding: 12, borderRadius: 8, marginBottom: 16, fontSize: 16 },
  botao: { backgroundColor: "#0284c7", padding: 16, borderRadius: 8, alignItems: "center", marginTop: 8 },
  botaoExcluir: { backgroundColor: "#dc2626", padding: 16, borderRadius: 8, alignItems: "center", marginTop: 8 },
  textoBotao: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  centralizado: { flex: 1, justifyContent: "center", alignItems: "center" },
  erro: { color: "#dc2626", fontSize: 16, fontWeight: "bold" },
  vazio: { fontSize: 16, color: "#666", textAlign: "center" }
});