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
  
<div className="filtros-lista-briefings" role="region" aria-label="Filtros de briefings">
  <div className="filtros-lista-briefings-col1" role="group" aria-label="Categorias">
    <button
      className={`todos ${isAllSelected ? "active" : ""}`}
      aria-pressed={isAllSelected}
      onClick={handleAllCategories}
    >
      📋 Todos
    </button>
    {allCategories.map((category) => (
      <button
        key={category}
        className={`${category.toLowerCase()} ${selectedCategory.includes(category) ? "active" : ""}`}
        aria-pressed={selectedCategory.includes(category)}
        onClick={() => handleCategoryToggle(category)}
      >
        {category === "Residencial" && "🏡 "}
        {category === "Comercial" && "🏬 "}
        {category === "Corporativo" && "🏢 "}
        {category + ""}
      </button>
    ))}
  </div>
  <div className="filtros-lista-briefings-col2">
    <div className="filtros-lista-briefings-busca">
      <input
        type="search"
        placeholder="Buscar por palavra-chave..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
    <div className="filtros-lista-briefings-ordenar">
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value as "Mais usados" | "Novos")}
      >
        <option value="Mais usados">Mais usados</option>
        <option value="Novos">Novos</option>
      </select>
    </div>
  </div>
</div>
  )
};