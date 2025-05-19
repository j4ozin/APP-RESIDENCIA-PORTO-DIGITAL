import React from "react";
import Masonry from "react-masonry-css";
import { BriefingData } from "../../../data/briefings";
import "./styles.css";
import { BriefingCard } from "../CardBriefing";

interface BriefingListProps {
  briefings: BriefingData[];
}

export const BriefingList: React.FC<BriefingListProps> = ({ briefings }) => {
  const breakpointColumnsObj = {
    default: 3, // 3 colunas por padrão
    1100: 2, // 2 colunas abaixo de 1100px
    700: 1, // 1 coluna abaixo de 700px
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {briefings.length > 0 ? (
        briefings.map((briefing) => (
          <BriefingCard key={briefing.id} briefing={briefing} />
        ))
      ) : (
        <p>Nenhum briefing encontrado.</p>
      )}
    </Masonry>
  );
};