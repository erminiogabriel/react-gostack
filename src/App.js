import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpg';

import Header from './components/Header';

/**
 * Componente
 * Propriedade
 * Estado e Imutabilidade
 */

function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de App', 'Front-end web']);
    /**
     * useState retorna um array com 2 posicoes
     * 
     * 1 Variavel com o seu valor inicial
     * 2 Funcao para atualizarmos esse valor
     */


    function handleAddProject() {
        //projects.push(`Novo Projeto ${Date.now()}`);
        setProjects([...projects, `Novo Projeto ${Date.now()}`]);
        console.log(projects);
    }

    return (
        <>
        <Header title="Projects"/>

        <img width={400} src={backgroundImage} />

        <ul>
            {projects.map(project => <li key={project}>{project}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    );
}

export default App;