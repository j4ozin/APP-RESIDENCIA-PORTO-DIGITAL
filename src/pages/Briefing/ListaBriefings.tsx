import React, { useState } from "react";
import { imagens } from "../../assets/imagens";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import { BriefingData } from "../../data/briefings";
import "./ListaBriefings.css";
import { FilterBriefing } from "../../components/Briefings/FilterBriefings";
import { BriefingList } from "../../components/Briefings/BriefingList";
import ProfileFooter from "../../components/Profile/ProfileFooter";

const Briefings: React.FC = () => {

    const [filteredBriefings, setFilteredBriefings] = useState<BriefingData[]>(
        []
    );
    return (
        <>
            <div className="container-lista-briefings">
                <ProfileHeader profilePic={imagens.arquiteto} tipoUsuario={"profissional"} />
                <div className="topo-lista-briefings">
                <div className="topo-lista-briefings-col1">
                    <div>
                        <h1>Nossos Briefings</h1>
                        <p>Escolha e preencha o briefing ideal para seu projeto.</p>
                    </div>
                </div>
                <div className="topo-lista-briefings-col2">
                    <button className="briefing-personalizado">+ Briefing personalizado</button>
                </div>
                </div>
                <FilterBriefing onFilterChange={setFilteredBriefings} />
                <BriefingList briefings={filteredBriefings} />
                <div className="profile-footer">
                    <ProfileFooter />
                </div>
            </div>
        </>
    );
};

export default Briefings;