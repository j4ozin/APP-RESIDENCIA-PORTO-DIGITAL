import React, { useState, useEffect } from "react";
import "./styles.css";
import { BriefingData, briefings } from "../../../data/briefings";

interface FilterBriefingProps {
  onFilterChange: (filteredBriefings: BriefingData[]) => void;
}

export const FilterBriefing: React.FC<FilterBriefingProps> = ({
  onFilterChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([
    "Residencial",
    "Comercial",
    "Corporativo",
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState<"Mais usados" | "Novos">(
    "Mais usados"
  );

  // Todas as categorias possíveis
  const allCategories = ["Residencial", "Comercial", "Corporativo"];

  // Manipular clique em botão de categoria
  const handleCategoryToggle = (category: string) => {
    setSelectedCategory((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  // Manipular botão "Todos"
  const handleAllCategories = () => {
    setSelectedCategory((prev) =>
      prev.length === allCategories.length ? [] : [...allCategories]
    );
  };

  // Filtrar e ordenar briefings
  const filteredBriefings = briefings
    .filter((briefing) => {
      if (selectedCategory.length > 0) {
        return selectedCategory.includes(briefing.categoria);
      }
      return true; // Mostrar todos se nenhuma categoria selecionada
    })
    .filter((briefing) => {
      if (searchTerm) {
        const lowerSearch = searchTerm.toLowerCase();
        return (
          briefing.titulo.toLowerCase().includes(lowerSearch) ||
          briefing.descricao.toLowerCase().includes(lowerSearch) ||
          (briefing.tags &&
            briefing.tags.some((tag) => tag.toLowerCase().includes(lowerSearch)))
        );
      }
      return true;
    })
    .sort((a, b) => {
      if (sortOption === "Mais usados") {
        return b.perguntas - a.perguntas;
      } else {
        return (
          new Date(b.dataCriacao).getTime() - new Date(a.dataCriacao).getTime()
        );
      }
    });

  // Atualizar o componente pai apenas quando os filtros mudarem
  useEffect(() => {
    onFilterChange(filteredBriefings);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, searchTerm, sortOption, onFilterChange]); // Removido filteredBriefings das dependências

  // Verificar se todas as categorias estão selecionadas
  const isAllSelected = selectedCategory.length === allCategories.length;

  return (
    <div className="filtros-lista-briefings">
      <div className="filtros-lista-briefings-col1">
        <button
          className={`todos ${isAllSelected ? "active" : ""}`}
          onClick={handleAllCategories}
        >
          📋 Todos
        </button>
        <button
          className={`residenciais ${
            selectedCategory.includes("Residencial") ? "active" : ""
          }`}
          onClick={() => handleCategoryToggle("Residencial")}
        >
          🏡 Residenciais
        </button>
        <button
          className={`comerciais ${
            selectedCategory.includes("Comercial") ? "active" : ""
          }`}
          onClick={() => handleCategoryToggle("Comercial")}
        >
          🏬 Comerciais
        </button>
        <button
          className={`corporativos ${
            selectedCategory.includes("Corporativo") ? "active" : ""
          }`}
          onClick={() => handleCategoryToggle("Corporativo")}
        >
          🏢 Corporativos
        </button>
      </div>
      <div className="filtros-lista-briefings-col2">
        <div className="filtros-lista-briefings-busca">
          <input
            placeholder="Buscar por palavra-chave..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <select
            value={sortOption}
            onChange={(e) =>
              setSortOption(e.target.value as "Mais usados" | "Novos")
            }
          >
            <option>Mais usados</option>
            <option>Novos</option>
          </select>
        </div>
      </div>
    </div>
  );
};