"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css"

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
    <div className={styles.container}>
      
      <div className={styles.contador}>
      <h1 className={styles.title}>Contador: {contador}</h1>
      <button className={styles.button01} onClick={incrementar}>+1</button>
      </div>
      
    <div className={styles.inputContainer}>
      <input
      className={styles.list}
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Seu nome"
      />
      {nome && <p>Olá, {nome}!</p>}
    </div>
      
      <Link className={styles.button02} href="/sobre">
        Componente simples
      </Link>

      <Link className={styles.button02} href="/props">
        Componente Props
      </Link>

      <Link className={styles.button02} href="/toastify">
        Toastify
      </Link>

      <Link className={styles.button02} href="/modal">
        Modal
      </Link>

      <Link className={styles.button02} href="/axios">
        Axios
      </Link>
    </div>
  );
}