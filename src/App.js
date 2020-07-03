import React, { useState, useEffect } from 'react';
import api from './services/api';
import './App.css';

import Header from './components/Header';

/**
 * Componente
 * Propriedade
 * Estado e Imutabilidade
 */

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(respose => {
            console.log(respose);
            setProjects(respose.data)
        });
    }, []);
    /**
     * useState retorna um array com 2 posicoes
     * 
     * 1 Variavel com o seu valor inicial
     * 2 Funcao para atualizarmos esse valor
     */


    async function handleAddProject() {
        //projects.push(`Novo Projeto ${Date.now()}`);
        //setProjects([...projects, `Novo Projeto ${Date.now()}`]);
        const response = await api.post('projects', {
                title: `mobile com react native ${Date.now()}`,
                owner: "gabriel"
            });
        const project = response.data;
        setProjects([...projects, project]);
    }

    return (
        <>
        <Header title="Projects"/>

        <ul>
            {projects.map(project => <li key={project.id}>{project.title}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    );
}

export default App;