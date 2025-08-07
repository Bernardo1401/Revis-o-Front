"use client";
import { useState } from "react";
import axios from "axios";
import styles from "./axios.module.css";
import Link from "next/link";

export default function Home() {
  const [palavra, setPalavra] = useState("");
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState("");

  const buscarPalavra = async () => {
    setErro("");
    setResultado(null);

    try {
      const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${palavra}`);
      const dados = res.data[0];

      const audio = dados.phonetics[1]?.audio || null;
      setResultado({ palavra: dados.word, audio: audio });
    } catch (err) {
      setErro("Palavra não encontrada ou erro de rede.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🔤 Dicionário</h1>

      <input
        className={styles.input}
        type="text"
        placeholder="Digite uma palavra"
        value={palavra}
        onChange={(e) => setPalavra(e.target.value)}
      />
      <button className={styles.button} onClick={buscarPalavra}>Buscar</button>

      {resultado && (
        <div className={styles.result}>
          <p className={styles.word}>✅ Palavra: {resultado.palavra}</p>
          {resultado.audio && (
            <audio className={styles.audio} controls src={resultado.audio}>
              Seu navegador não suporta áudio.
            </audio>
          )}
        </div>
      )}

      {erro && <p className={styles.error}>❌ {erro}</p>}
        <div className={styles.container}>
            <Link className={styles.button} href="/">Voltar para home</Link>
        </div>
    </div>
  );
}