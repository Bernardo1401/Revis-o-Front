"use client";
import { useState, useEffect } from "react";

export default function MeuComponente() {
    // 📦 Estados
    const [contador, setContador] = useState(0);
    const [nome, setNome] = useState("");

    // ⚡ Effects
    useEffect(() => {
        console.log("Componente montado!");
    }, []); // Uma vez só

    useEffect(() => {
        console.log("Contador:", contador);
        document.title = `Contador: ${contador}`;
    }, [contador]); // Quando contador muda

    // 🎮 Funções
    const incrementar = () => setContador(contador + 1);

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={incrementar}>+1</button>
            
            <input 
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome"
            />
            {nome && <p>Olá, {nome}!</p>}
        </div>
    );
}