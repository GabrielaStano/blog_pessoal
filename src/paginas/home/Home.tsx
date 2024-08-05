import React, { useState, useEffect } from 'react';

const Home = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [tarefa, setTarefa] = useState('');

    useEffect(() => {
        if (completed) {
            setTarefa('Parabéns! Você concluiu a tarefa!');
        }
    }, [completed]);

    return (
        <div>
            {loggedIn ? (
                <div>
                    <h1>Tarefa</h1>
                    <h3>{tarefa}</h3>
                    <p>Conclua a tarefa</p>
                    <button onClick={() => setCompleted(true)}>Concluir Tarefa</button>
                </div>
            ) : (
                <button onClick={() => setLoggedIn(true)}>Entrar</button>
            )}
        </div>
    );
}

export default Home;
