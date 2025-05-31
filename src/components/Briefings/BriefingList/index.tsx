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
    default: 3,
    1100: 2,
    700: 1,
  };

  const destaque = briefings.find((b) => b.tipo === "destaque");
  const outrosBriefings = briefings.filter((b) => b.id !== destaque?.id);

  return (
    <>
      {destaque && (
        <div className="briefing-destaque">
          <h2>Briefing Destaque</h2>
          <BriefingCard briefing={destaque} />
        </div>
      )}

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {outrosBriefings.length > 0 ? (
          outrosBriefings.map((briefing, index) => (
            <BriefingCard key={briefing.id} briefing={briefing} index={index} />
          ))
        ) : (
          <p>Nenhum briefing encontrado.</p>
        )}
      </Masonry>
    </>
  );
};
