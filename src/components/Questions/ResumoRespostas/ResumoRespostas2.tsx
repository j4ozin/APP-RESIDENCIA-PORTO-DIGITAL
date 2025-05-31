import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

interface ResumoRespostasProps {
  answers: Record<string, { question: string; answer: string | number | string[] | Record<string, unknown>; imageUrl?: string }>;
}

export function ResumoRespostas({ answers }: ResumoRespostasProps) {
  const baixarRespostas = () => {
    const blob = new Blob([JSON.stringify(answers, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'respostas-briefing.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const renderAnswer = (answer: string | number | bigint | boolean | unknown[] | Record<string, unknown> | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | null | undefined> | ArrayLike<unknown> | null | undefined) => {
    if (typeof answer === 'string' || typeof answer === 'number') {
      return <span>{answer}</span>;
    }
    if (Array.isArray(answer)) {
      return <ul>{answer.map((a, i) => <li key={i}>{a}</li>)}</ul>;
    }
    if (typeof answer === 'object' && answer !== null) {
      return (
        <ul>
          {Object.entries(answer).map(([key, value], i) => (
            <li key={i}>
              <strong>{key}:</strong> {typeof value === 'string' ? value : JSON.stringify(value)}
            </li>
          ))}
        </ul>
      );
    }
    return <em>(Sem resposta)</em>;
  };

  return (
    <div className="resumo-container">
      <h3>Resumo das Respostas:</h3>
      <ul>
        {Object.entries(answers).map(([step, data]) => {
          const { question, answer, imageUrl } = data;
          return (
            <li key={step}>
              <strong>{question}</strong><br />
              {renderAnswer(answer)}
              {imageUrl && (
                <>
                  <br />
                  <em>Imagem: {imageUrl}</em>
                </>
              )}
            </li>
          );
        })}
      </ul>
      <button onClick={baixarRespostas}>📥 Baixar respostas</button>
    </div>
  );
}
