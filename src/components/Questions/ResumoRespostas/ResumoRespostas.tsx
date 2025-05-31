import { PDFDownloadLink } from "@react-pdf/renderer";
import { ResumoRespostasPDF } from "./ResumoRespostasPDF";
import "./ResumoRespostas.css";
import CadastroSimplificado from "../../CadastroSimplificado";

interface ResumoRespostasProps {
  answers: Record<string, { question: string; answer: unknown; imageUrl?: string }>;
}

export function ResumoRespostas({ answers }: ResumoRespostasProps) {
  return (
    <div className="resumo-container">
      <div className="content-section">
        <span className="check-icon">✔</span>
        <h1 className="title">Excelente! Seu briefing já está pronto!</h1>
        <p className="subtitle">Complete seu cadastro para enviar o briefing ao profissional</p>
      </div>

      <div className="form-section">
        <CadastroSimplificado />
        <div className="button-group">
          <PDFDownloadLink
            document={<ResumoRespostasPDF answers={answers} />}
            fileName="resumo-respostas.pdf"
          >
            {({ loading }) => (
              <button className="pdf-button">
                {loading ? "Gerando PDF..." : "Exportar PDF"}
                <span>📥</span>
              </button>
            )}
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
}