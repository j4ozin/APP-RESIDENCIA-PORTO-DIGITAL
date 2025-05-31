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
    color: "#c4a962",
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
    color: "#c4a962",
  },
  image: {
    marginTop: 4,
    marginBottom: 6,
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
  answers: Record<string, { question: string; answer: unknown; imageUrl?: string }>;
}

const customKeyRules: Record<string, { hideKeys?: boolean; renameKeys?: Record<string, string> }> = {
  // Address question: Rename address-related keys
  "Onde está localizado o terreno para execução do projeto?": {
    renameKeys: {
      street: "Rua",
      city: "Cidade",
      state: "Estado",
      zip: "CEP",
      number: "Número",
      complement: "Complemento",
    },
  },
  // Yes-no-upload-file question: Hide keys for follow-up and main answer
  "É localizado em algum condomínio?": {
    hideKeys: true, // Show only the answer and follow-up (e.g., "Sim", "Condomínio Verde")
  },
  // Multiple-choice questions: Hide "tipo" key
  "Você já possui estudo topográfico do terreno?": {
    hideKeys: true, // Show only the selected option (e.g., "Sim")
  },
  "Será térreo ou dois pavimentos?": {
    hideKeys: true, // Show only the selected option (e.g., "Térreo")
  },
  "Algum portador de necessidades especiais irá utilizar a casa?": {
    hideKeys: true, // Show only the selected option (e.g., "Não")
  },
  "Alguém irá trabalhar/estudar em casa? Necessidade de home office?": {
    hideKeys: true, // Show only the selected option (e.g., "Sim")
  },
  "Gostariam de um espaço específico para assistir TV? (home cinema)": {
    hideKeys: true, // Show only the selected option (e.g., "Talvez")
  },
  "Gostam de cozinhar?": {
    hideKeys: true, // Show only the selected option (e.g., "Às vezes")
  },
  "Para fachada: gosta de cores mais claras ou escuras?": {
    hideKeys: true, // Show only the selected option (e.g., "Claras")
  },
  "Qual é a média do valor que pretende investir, considerando terraplanagem, mão de obra, materiais, acabamento, etc.?": {
    hideKeys: true, // Show only the selected option (e.g., "entre 700 mil e 1,2 milhões")
  },
  // Residents question: Rename keys for clarity
  "Quantas pessoas irão morar na residência? Detalhe as idades e profissões desses moradores.": {
    renameKeys: {
      count: "Número de Moradores",
      ages: "Idades",
      professions: "Profissões",
      detalhe: "Detalhes", // Rename "detalhe" to a clearer term
    },
  },
  // Terrain and construction size: Rename keys
  "Quantos m² tem o terreno e quantos m² pretende construir?": {
    renameKeys: {
      terrainSize: "Tamanho do Terreno (m²)",
      constructionSize: "Tamanho da Construção (m²)",
      detalhe: "Detalhes", // Rename "detalhe" if present
    },
  },
  // Environments question: Hide keys to list environments
  "Descreva os ambientes que possivelmente terão na residência: (exemplo: sala, cozinha, sala de jantar, 2 quartos, 1 suíte, closet, lavabo...)": {
    hideKeys: true, // List environments as bullet points
  },
  // Yes-no-follow-up questions: Hide keys for follow-up and main answer
  "Gostariam de piscina?": {
    hideKeys: true, // Show only the answer and follow-up (e.g., "Sim", "Retangular com prainha")
  },
  "Tem interesse em soluções voltadas para sustentabilidade?": {
    hideKeys: true, // Show only the answer and follow-up (e.g., "Sim", "Painéis solares")
  },
  "Recebe amigos em casa?": {
    hideKeys: true, // Show only the answer and follow-up (e.g., "Sim", "Cerca de 10 pessoas")
  },
  "Algum utilizador da casa tem hábito de leitura?": {
    hideKeys: true, // Show only the answer and follow-up (e.g., "Sim", "Na sala")
  },
  "Gostaria de algum espaço voltado para jogos, ou algo similar?": {
    hideKeys: true, // Show only the answer and follow-up (e.g., "Sim", "Mesa de sinuca")
  },
  "Tem ou pretende ter animal de estimação?": {
    hideKeys: true, // Show only the answer and follow-up (e.g., "Sim", "Espaço para cachorro")
  },
  // Visual multiple-choice and image-liking questions: Hide "tipo" key
  "Selecione a(s) fachada(s) que você gosta:": {
    hideKeys: true, // Show only the selected option(s) (e.g., "Platibanda")
  },
  "Gostam de ambientes integrados?": {
    hideKeys: true, // Show only the selected option (e.g., "Sim")
  },
  "Gostam de pé direito duplo?": {
    hideKeys: true, // Show only the selected option (e.g., "Talvez")
  },
  "Caso a sua casa seja de 2 pavimentos qual preferência pelo modelo de escada? (Analisar apenas o formato da escada, ignorar cores/revestimentos)": {
    hideKeys: true, // Show only the selected option (e.g., "Escada reta")
  },
  "Tem interesse em lareira ou algum espaço similar?": {
    hideKeys: true, // Show only the selected option (e.g., "Não")
  },
  "Gostam de jardim de inverno?": {
    hideKeys: true, // Show only the selected option (e.g., "Sim")
  },
  "Querem banheira no banheiro master?": {
    hideKeys: true, // Show only the selected option (e.g., "Talvez")
  },
  "Você gosta desta fachada?": {
    hideKeys: true, // Show only the selected option (e.g., "Sim") for all fachada questions
  },
  "Você gosta de brises? (Brise é um elemento instalado em fachadas e janelas formado por lâminas de metal ou madeira ou outro material)": {
    hideKeys: true, // Show only the selected option (e.g., "Não")
  },
  "Gostaria de um espaço voltado para exercícios físicos?": {
    hideKeys: true, // Show only the selected option (e.g., "Sim")
  },
  "Prefere piscina com área verde ou deck ao redor?": {
    hideKeys: true, // Show only the selected option (e.g., "Com deck")
  },
};

function renderAnswer(answer: unknown, question: string) {
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
      // Show only values without keys
      return (
        <View style={styles.list}>
          {Object.values(answer).map((value, i) => (
            <Text key={i} style={styles.listItem}>
              • {typeof value === "string" ? value : JSON.stringify(value)}
            </Text>
          ))}
        </View>
      );
    } else {
      // Show keys, possibly renamed
      return (
        <View style={styles.list}>
          {Object.entries(answer).map(([key, value], i) => (
            <Text key={i} style={styles.listItem}>
              <Text style={styles.boldText}>
                {rules.renameKeys?.[key] ?? key}:
              </Text>{" "}
              {typeof value === "string" ? value : JSON.stringify(value)}
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
              {imageUrl && <Image src={imageUrl} style={styles.image} />}
              {renderAnswer(answer, question)}
            </View>
          );
        })}
      </Page>
    </Document>
  );
}