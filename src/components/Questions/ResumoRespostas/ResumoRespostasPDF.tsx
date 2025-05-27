import React from "react";
import { 
  Page, 
  Text, 
  View, 
  Document, 
  StyleSheet, 
  Font, 
  Image 
} from "@react-pdf/renderer";

Font.register({
  family: "Poppins",
  src: "/fonts/Poppins-Regular.ttf",
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Poppins",
    padding: 24,
    fontSize: 12,
    lineHeight: 1.5,
    color: "#333",
  },
  section: {
    marginBottom: 12,
  },
  question: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#c4a962",  // destaque da pergunta
  },
  answerText: {
    fontSize: 12,
    marginBottom: 6,
    color: "#000",
  },
  list: {
    marginLeft: 12,
    marginBottom: 6,
  },
  listItem: {
    fontSize: 12,
  },
  boldText: {
    fontWeight: "bold",
    color: "#c4a962",  // cor dos textos em negrito dentro da resposta
  },
  image: {
    marginTop: 8,
    maxWidth: 300,
    maxHeight: 200,
    objectFit: "contain",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
    color: "#c4a962",
  },
});

interface ResumoRespostasPDFProps {
  answers: Record<string, { question: string; answer: any; imageUrl?: string }>;
}

// Mapa para customizar o comportamento de keys para perguntas específicas
const customKeyRules: Record<string, { hideKeys?: boolean; renameKeys?: Record<string, string> }> = {
  // Exemplo: esconder keys para essa pergunta
  "Exemplo de pergunta que não deve mostrar keys": {
    hideKeys: true,
  },
  // Exemplo: renomear algumas keys para outra coisa
  "Pergunta com keys renomeadas": {
    renameKeys: {
      nome: "Nome Completo",
      idade: "Idade",
    },
  },
};

function renderAnswer(answer: any, question: string) {
  const rules = customKeyRules[question] || {};

  if (typeof answer === "string" || typeof answer === "number") {
    return <Text style={styles.answerText}>{answer}</Text>;
  }
  if (Array.isArray(answer)) {
    return (
      <View style={styles.list}>
        {answer.map((a, i) => (
          <Text key={i} style={styles.listItem}>• {a}</Text>
        ))}
      </View>
    );
  }
  if (typeof answer === "object" && answer !== null) {
    if (rules.hideKeys) {
      // mostrar só valores (sem chaves)
      return (
        <View style={styles.list}>
          {Object.values(answer).map((value, i) => (
            <Text key={i} style={styles.listItem}>{typeof value === "string" ? value : JSON.stringify(value)}</Text>
          ))}
        </View>
      );
    } else {
      // mostrar keys, podendo renomear
      return (
        <View style={styles.list}>
          {Object.entries(answer).map(([key, value], i) => (
            <Text key={i} style={styles.listItem}>
              <Text style={styles.boldText}>
                {rules.renameKeys?.[key] ?? key}:
              </Text> {typeof value === "string" ? value : JSON.stringify(value)}
            </Text>
          ))}
        </View>
      );
    }
  }
  return <Text style={styles.answerText}>(Sem resposta)</Text>;
}

export function ResumoRespostasPDF({ answers }: ResumoRespostasPDFProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Resumo das Respostas</Text>
        {Object.entries(answers).map(([step, data]) => {
          const { question, answer, imageUrl } = data;
          return (
            <View key={step} style={styles.section}>
              <Text style={styles.question}>{question}</Text>
              {renderAnswer(answer, question)}
              {imageUrl && (
                <Image src={imageUrl} style={styles.image} />
              )}
            </View>
          );
        })}
      </Page>
    </Document>
  );
}
