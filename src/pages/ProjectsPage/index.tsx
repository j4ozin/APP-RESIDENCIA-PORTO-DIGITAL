import React, { useState } from "react";
import { imagens } from "../../assets/imagens";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileFooter from "../../components/Profile/ProfileFooter";
import "./styles.css";
import ProjectCard from "../../components/Projects/ProjectCard";
import { projects } from "../../data/projects";

const ProjectsPage: React.FC = () => {
    const [statusSelecionado, setStatusSelecionado] = useState("Todos");
    const [categoriaSelecionada, setCategoriaSelecionada] = useState("Categoria");
    const [tipoServicoSelecionado, setTipoServicoSelecionado] = useState("Tipo de serviço");
    const [localizacaoSelecionada, setLocalizacaoSelecionada] = useState("Localização");
    const [anoSelecionado, setAnoSelecionado] = useState("Ano de execução");

    const statusOptions = ["Todos", "Em andamento", "Concluído", "Arquivado"];

    const categorias = ["Categoria", ...new Set(projects.map((proj) => proj.categoria))];

    const tiposServico = ["Tipo de serviço", ...new Set(projects.map((proj) => proj.tipoServico))];

    const localizacoes = ["Localização", ...new Set(projects.map((proj) => proj.local))];

    const anos = [
        "Ano de execução",
        ...new Set(projects.map((proj) => proj.dataInicio.split("/")[2])), // Extract year from dataInicio
    ].sort((a, b) => (a === "Ano de execução" ? -1 : b === "Ano de execução" ? 1 : b.localeCompare(a)));

    const projetosFiltrados = projects.filter((proj) => {
        const matchStatus =
            statusSelecionado === "Todos" || proj.status === statusSelecionado;
        const matchCategoria =
            categoriaSelecionada === "Categoria" || proj.categoria === categoriaSelecionada;
        const matchTipoServico =
            tipoServicoSelecionado === "Tipo de serviço" ||
            proj.tipoServico === tipoServicoSelecionado;
        const matchLocalizacao =
            localizacaoSelecionada === "Localização" || proj.local === localizacaoSelecionada;
        const matchAno =
            anoSelecionado === "Ano de execução" ||
            proj.dataInicio.split("/")[2] === anoSelecionado; // Compare extracted year
        return matchStatus && matchCategoria && matchTipoServico && matchLocalizacao && matchAno;
    });

    return (
        <>
        <div className="container-lista-projetos">
            <ProfileHeader profilePic={imagens.arquiteto} tipoUsuario="profissional" />
            <div className="topo-lista-projetos">
                <div className="topo-lista-projetos-col1">
                    <div>
                        <h1>Meus Projetos</h1>
                        <p>Acompanhe e gerencie todos os seus projetos em andamento.</p>
                    </div>
                </div>
                <div className="topo-lista-projetos-col2">
                    <button className="novo-projeto">+ Novo projeto</button>
                </div>
            </div>

            <div className="filtros-projetos">
                <div className="filtro-container">
                    <div className="filtro-buttons">
                        {statusOptions.map((status) => (
                            <button
                                key={status}
                                className={`filtro-btn ${statusSelecionado === status ? "ativo" : ""}`}
                                onClick={() => setStatusSelecionado(status)}
                            >
                                {status === "Todos" ? "Todos os Projetos" : status}
                            </button>
                        ))}
                    </div>
                    <div className="filtro-dropdowns">
                        <select
                            className="filtro-dropdown"
                            value={categoriaSelecionada}
                            onChange={(e) => setCategoriaSelecionada(e.target.value)}
                        >
                            {categorias.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                        <select
                            className="filtro-dropdown"
                            value={tipoServicoSelecionado}
                            onChange={(e) => setTipoServicoSelecionado(e.target.value)}
                        >
                            {tiposServico.map((tipo) => (
                                <option key={tipo} value={tipo}>
                                    {tipo}
                                </option>
                            ))}
                        </select>
                        <select
                            className="filtro-dropdown"
                            value={anoSelecionado}
                            onChange={(e) => setAnoSelecionado(e.target.value)}
                        >
                            {anos.map((ano) => (
                                <option key={ano} value={ano}>
                                    {ano}
                                </option>
                            ))}
                        </select>
                        <select
                            className="filtro-dropdown"
                            value={localizacaoSelecionada}
                            onChange={(e) => setLocalizacaoSelecionada(e.target.value)}
                        >
                            {localizacoes.map((loc) => (
                                <option key={loc} value={loc}>
                                    {loc}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="lista-projetos">
                {projetosFiltrados.map((proj) => (
                    <ProjectCard
                        key={proj.id}
                        projeto={{
                            id: String(proj.id ?? ""),
                            titulo: proj.titulo ?? "",
                            status: proj.status ?? "",
                            local: proj.local ?? "",
                            categoria: proj.categoria ?? "",
                            tipoServico: proj.tipoServico ?? "",
                            dataInicio: proj.dataInicio ?? "",
                            dataFim: proj.dataFim ?? "",
                            tempoEstimado: proj.tempoEstimado ?? "",
                            autor: proj.autor ?? "",
                            tags: proj.tags ?? [],
                            imagem: proj.imagem ?? "",
                            destaque: proj.destaque ?? false,
                        }}
                    />
                ))}
            </div>

            <div className="profile-footer">
                <ProfileFooter />
            </div>
        </div>
    </>
    );
};

export default ProjectsPage;