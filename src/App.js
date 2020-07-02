import React from 'react';
import Header from './components/Header';

/**
 * Componente
 * Propriedade
 * Estado
 */

function App() {
    return (
        <>
        <Header  title="Homepage">
            <ul>
                <li>Homepage</li>
                <li>Projects</li>
                <li>Login</li>
            </ul>
        </Header>
        <Header   title="Projects"/>
        </>
    );
}

export default App;